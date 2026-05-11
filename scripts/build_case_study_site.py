#!/usr/bin/env python3
"""Prepare web-friendly case-study clips and metadata for GitHub Pages."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import shutil
import subprocess
from pathlib import Path


SOURCE_DEFAULT = Path(
    "/Users/zhangkangning/code_repos/OSWorld/case_study_lossless_clips_20260511"
)


def ffmpeg_exe() -> str:
    try:
        import imageio_ffmpeg

        return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception as exc:  # pragma: no cover - used only as a local build fallback
        path = shutil.which("ffmpeg")
        if path:
            return path
        raise SystemExit(f"ffmpeg not found: {exc}") from exc


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def probe_clip(ffmpeg: str, path: Path) -> dict:
    result = subprocess.run(
        [ffmpeg, "-hide_banner", "-i", str(path)],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.PIPE,
        text=True,
        check=False,
    )
    text = result.stderr
    duration_match = re.search(r"Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)", text)
    duration_sec = None
    if duration_match:
        hours, minutes, seconds = duration_match.groups()
        duration_sec = int(hours) * 3600 + int(minutes) * 60 + float(seconds)
    video_line = ""
    for line in text.splitlines():
        if "Video:" in line:
            video_line = line.strip()
            break
    return {
        "bytes": path.stat().st_size,
        "duration_sec": round(duration_sec, 2) if duration_sec is not None else None,
        "video_stream": video_line,
    }


def run_ffmpeg(command: list[str]) -> None:
    subprocess.run(command, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)


def convert_video(ffmpeg: str, source: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    run_ffmpeg(
        [
            ffmpeg,
            "-y",
            "-i",
            str(source),
            "-vf",
            "scale=1280:-2",
            "-pix_fmt",
            "yuv420p",
            "-c:v",
            "libx264",
            "-profile:v",
            "high",
            "-preset",
            "medium",
            "-crf",
            "28",
            "-movflags",
            "+faststart",
            "-an",
            str(dest),
        ]
    )


def write_poster(ffmpeg: str, source: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    run_ffmpeg(
        [
            ffmpeg,
            "-y",
            "-ss",
            "1",
            "-i",
            str(source),
            "-frames:v",
            "1",
            "-vf",
            "scale=1280:-2",
            "-q:v",
            "3",
            str(dest),
        ]
    )


def copy_text_assets(source_case_dir: Path, dest_case_dir: Path) -> None:
    for filename in ("captions.json", "metadata.json"):
        shutil.copy2(source_case_dir / filename, dest_case_dir / filename)

    notes = (source_case_dir / "case_notes.md").read_text(encoding="utf-8")
    notes = notes.replace(
        "These clips are stream-copied from the original recordings with `-c:v copy`; "
        "there is no scaling, filtering, fps change, or video re-encoding.",
        "The source clips were cut from the original recordings. The website clips "
        "are H.264/yuv420p 720p derivatives for reliable browser playback.",
    )
    (dest_case_dir / "case_notes.md").write_text(notes, encoding="utf-8")


def build_site(source_dir: Path, output_dir: Path) -> None:
    ffmpeg = ffmpeg_exe()
    source_manifest = json.loads((source_dir / "manifest.json").read_text(encoding="utf-8"))
    output_dir.mkdir(parents=True, exist_ok=True)

    manifest = dict(source_manifest)
    manifest["created_by"] = "build_case_study_site.py"
    manifest["source_created_by"] = source_manifest.get("created_by", "")
    manifest["source_directory_name"] = source_dir.name
    manifest["website_encoding"] = {
        "video": "H.264 high profile, yuv420p, 1280px wide, CRF 28, no audio, faststart",
        "poster": "JPEG frame at 1s, 1280px wide",
        "reason": "GitHub Pages/browser playback compatibility and lighter page loading.",
    }

    for case_item in manifest.get("cases", []):
        case_id = case_item["id"]
        source_case_dir = source_dir / case_id
        dest_case_dir = output_dir / case_id
        dest_case_dir.mkdir(parents=True, exist_ok=True)
        copy_text_assets(source_case_dir, dest_case_dir)

        for variant in case_item.get("variants", {}).values():
            clip_file = variant["clip_file"]
            source_clip = source_case_dir / clip_file
            dest_clip = dest_case_dir / clip_file
            poster = dest_case_dir / clip_file.replace(".mp4", ".jpg")

            source_probe = variant.get("clip_probe", {})
            source_sha = variant.get("sha256", "")
            convert_video(ffmpeg, source_clip, dest_clip)
            write_poster(ffmpeg, dest_clip, poster)

            variant["source_clip_probe"] = source_probe
            variant["source_clip_sha256"] = source_sha
            variant["clip_probe"] = probe_clip(ffmpeg, dest_clip)
            variant["sha256"] = sha256(dest_clip)
            variant["poster_file"] = poster.name

    (output_dir / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    readme = [
        "# MMSkills Case Study Clips",
        "",
        "This directory contains website-ready case-study clips derived from the",
        "`case_study_lossless_clips_20260511` source bundle.",
        "",
        "The source clips are preserved outside the repository. The files here are",
        "H.264/yuv420p 720p MP4 derivatives with JPEG posters so GitHub Pages can",
        "play them reliably in common browsers.",
        "",
        "## Cases",
        "",
        "| Case | Model | App | no-skills | text-only | MMSkills |",
        "| --- | --- | --- | ---: | ---: | ---: |",
    ]
    for case_item in manifest.get("cases", []):
        variants = case_item.get("variants", {})
        readme.append(
            "| "
            + f"[{case_item['title']}]({case_item['id']}/case_notes.md) | "
            + f"`{case_item['model']}` | `{case_item['app']}` | "
            + f"{variants.get('no_skills', {}).get('score', '')} | "
            + f"{variants.get('text_only', {}).get('score', '')} | "
            + f"{variants.get('multimodal_v9', {}).get('score', '')} |"
        )
    readme.extend(
        [
            "",
            "Regenerate with:",
            "",
            "```bash",
            "python3 scripts/build_case_study_site.py",
            "```",
            "",
        ]
    )
    (output_dir / "README.md").write_text("\n".join(readme), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=SOURCE_DEFAULT)
    parser.add_argument("--output", type=Path, default=Path("assets/case-studies"))
    args = parser.parse_args()

    source_dir = args.source.expanduser().resolve()
    output_dir = args.output.resolve()
    if not source_dir.exists():
        raise SystemExit(f"Source directory not found: {source_dir}")

    build_site(source_dir, output_dir)
    print(f"Wrote case-study website assets to {output_dir}")


if __name__ == "__main__":
    main()
