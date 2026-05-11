#!/usr/bin/env python3
"""Build the static Skill Library index used by the project website."""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path


DOMAIN_LABELS = {
    "chrome": "Chrome",
    "gimp": "GIMP",
    "libreoffice_calc": "LibreOffice Calc",
    "libreoffice_impress": "LibreOffice Impress",
    "libreoffice_writer": "LibreOffice Writer",
    "multi_apps": "Multi-App Workflows",
    "os": "Ubuntu OS",
    "thunderbird": "Thunderbird",
    "vlc": "VLC",
    "vs_code": "VS Code",
}

TAG_KEYWORDS = (
    ("search", "search"),
    ("web", "web"),
    ("chart", "charts"),
    ("table", "tables"),
    ("formula", "formulas"),
    ("format", "formatting"),
    ("export", "export"),
    ("save", "save"),
    ("configure", "settings"),
    ("preference", "settings"),
    ("terminal", "terminal"),
    ("file", "files"),
    ("folder", "files"),
    ("media", "media"),
    ("video", "media"),
    ("audio", "media"),
    ("email", "email"),
    ("message", "email"),
    ("slide", "slides"),
    ("presentation", "slides"),
    ("image", "images"),
    ("text", "text"),
    ("document", "documents"),
)


def parse_front_matter(text: str) -> dict[str, str]:
    match = re.match(r"\A---\s*\n(.*?)\n---\s*\n", text, flags=re.DOTALL)
    if not match:
        return {}

    result: dict[str, str] = {}
    current_key = ""
    for raw_line in match.group(1).splitlines():
        if not raw_line.strip():
            continue
        if raw_line.startswith((" ", "\t")) and current_key:
            result[current_key] = f"{result[current_key]} {raw_line.strip()}".strip()
            continue
        key, sep, value = raw_line.partition(":")
        if sep:
            current_key = key.strip()
            result[current_key] = value.strip().strip("\"'")
    return result


def markdown_title(text: str, fallback: str) -> str:
    match = re.search(r"^#\s+(.+)$", text, flags=re.MULTILINE)
    if match:
        return match.group(1).strip()
    return fallback.replace("_", " ").title()


def first_paragraph_after_heading(text: str, heading_patterns: tuple[str, ...]) -> str:
    for heading in heading_patterns:
        pattern = rf"^##\s+{heading}\s*$([\s\S]*?)(?=^##\s+|\Z)"
        match = re.search(pattern, text, flags=re.MULTILINE | re.IGNORECASE)
        if not match:
            continue
        block = match.group(1).strip()
        for paragraph in re.split(r"\n\s*\n", block):
            cleaned = re.sub(r"\s+", " ", paragraph.replace("- ", "")).strip()
            if cleaned and not cleaned.startswith("#"):
                return cleaned[:360]
    return ""


def bullets_after_heading(text: str, heading_patterns: tuple[str, ...], limit: int = 3) -> list[str]:
    bullets: list[str] = []
    for heading in heading_patterns:
        pattern = rf"^##\s+{heading}\s*$([\s\S]*?)(?=^##\s+|\Z)"
        match = re.search(pattern, text, flags=re.MULTILINE | re.IGNORECASE)
        if not match:
            continue
        for line in match.group(1).splitlines():
            stripped = line.strip()
            if stripped.startswith("- "):
                item = re.sub(r"\s+", " ", stripped[2:]).strip()
                if item:
                    bullets.append(item[:220])
            if len(bullets) >= limit:
                return bullets
    return bullets


def read_json(path: Path) -> dict | list | None:
    if not path.exists():
        return None
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return None


def count_json_items(path: Path) -> int:
    data = read_json(path)
    if data is None:
        return 0
    if isinstance(data, list):
        return len(data)
    if isinstance(data, dict):
        for key in ("states", "cards", "state_cards", "runtime_state_cards", "steps"):
            value = data.get(key)
            if isinstance(value, list):
                return len(value)
        return len(data)
    return 0


def image_files(skill_dir: Path) -> list[Path]:
    images_dir = skill_dir / "Images"
    if not images_dir.exists():
        return []
    return sorted(
        path
        for path in images_dir.rglob("*")
        if path.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"}
    )


def choose_thumbnail(images: list[Path]) -> Path | None:
    if not images:
        return None

    def score(path: Path) -> tuple[int, str]:
        name = path.name.lower()
        rank = 0
        if "focus_crop" in name:
            rank += 20
        if any(token in name for token in ("result", "verify", "finished", "visible", "ready")):
            rank += 10
        if any(token in name for token in ("before", "after")):
            rank -= 2
        return (-rank, name)

    return sorted(images, key=score)[0]


def make_preview(source: Path, dest: Path, max_size: int = 420) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if shutil.which("sips"):
        result = subprocess.run(
            [
                "sips",
                "-Z",
                str(max_size),
                "-s",
                "format",
                "jpeg",
                "-s",
                "formatOptions",
                "72",
                str(source),
                "--out",
                str(dest),
            ],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            check=False,
        )
        if result.returncode == 0 and dest.exists():
            return True
    try:
        shutil.copy2(source, dest)
        return True
    except OSError:
        return False


def make_full_image(source: Path, dest: Path) -> bool:
    """Write a full-resolution web display image without spatial downsampling."""
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        from PIL import Image

        with Image.open(source) as image:
            if image.mode not in ("RGB", "RGBA"):
                image = image.convert("RGB")
            image.save(dest, format="WEBP", quality=95, method=6)
        return dest.exists()
    except Exception:
        try:
            shutil.copy2(source, dest.with_suffix(source.suffix.lower()))
            return True
        except OSError:
            return False


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", value).strip("-").lower()
    return slug or "skill"


def infer_tags(name: str, description: str, domain: str) -> list[str]:
    text = f"{name} {description}".lower()
    tags = []
    for token, label in TAG_KEYWORDS:
        if token in text and label not in tags:
            tags.append(label)
        if len(tags) == 4:
            break
    if not tags:
        tags.append(DOMAIN_LABELS.get(domain, domain).lower())
    return tags


def strip_front_matter(text: str) -> str:
    return re.sub(r"\A---\s*\n.*?\n---\s*\n", "", text, flags=re.DOTALL).strip()


def view_type_from_name(path: Path) -> str:
    name = path.stem.lower()
    if "focus_crop" in name:
        return "focus_crop"
    if name.endswith("_before") or "_before" in name:
        return "before"
    if name.endswith("_after") or "_after" in name:
        return "after"
    return "full_frame"


def image_label(path: Path) -> str:
    stem = path.stem
    for suffix in ("_focus_crop", "_before", "_after"):
        stem = stem.replace(suffix, "")
    return stem.replace("_", " ").strip().title()


def extract_runtime_states(
    runtime_payload: dict | list | None,
    preview_lookup: dict[str, str],
    full_lookup: dict[str, str],
) -> list[dict]:
    if not isinstance(runtime_payload, dict):
        return []
    states = runtime_payload.get("states")
    if not isinstance(states, list):
        return []

    extracted = []
    for state in states:
        if not isinstance(state, dict):
            continue
        views = state.get("available_views")
        if not isinstance(views, list):
            view_bundle = state.get("view_bundle")
            if isinstance(view_bundle, dict):
                views = view_bundle.get("available_views")
        if not isinstance(views, list):
            views = []

        extracted_views = []
        for view in views:
            if not isinstance(view, dict):
                continue
            image_path = str(view.get("image_path", ""))
            extracted_views.append(
                {
                    "viewType": view.get("view_type", ""),
                    "imagePath": image_path,
                    "previewPath": preview_lookup.get(image_path, ""),
                    "fullPath": full_lookup.get(image_path, ""),
                    "useFor": view.get("use_for", ""),
                    "label": view.get("label", ""),
                }
            )

        extracted.append(
            {
                "stateId": state.get("state_id", ""),
                "stateName": state.get("state_name", ""),
                "stage": state.get("stage", ""),
                "imageRole": state.get("image_role", ""),
                "whenToUse": state.get("when_to_use", ""),
                "whenNotToUse": state.get("when_not_to_use", ""),
                "visibleCues": state.get("visible_cues", []),
                "verificationCue": state.get("verification_cue", ""),
                "preferredViewOrder": state.get("preferred_view_order", []),
                "availableViews": extracted_views,
            }
        )
    return extracted


def build_payload(source_dir: Path, output_dir: Path) -> dict:
    skills = []
    domains: dict[str, dict] = {}
    preview_dir = output_dir / "image-previews"
    full_image_dir = output_dir / "full-images"
    legacy_thumbnail_dir = output_dir / "thumbnails"
    if preview_dir.exists():
        shutil.rmtree(preview_dir)
    if full_image_dir.exists():
        shutil.rmtree(full_image_dir)
    if legacy_thumbnail_dir.exists():
        shutil.rmtree(legacy_thumbnail_dir)
    preview_dir.mkdir(parents=True, exist_ok=True)
    full_image_dir.mkdir(parents=True, exist_ok=True)

    for skill_md in sorted(source_dir.glob("*/*/SKILL.md")):
        skill_dir = skill_md.parent
        domain = skill_dir.parent.name
        skill_id = skill_dir.name
        text = skill_md.read_text(encoding="utf-8", errors="replace")
        front_matter = parse_front_matter(text)
        name = front_matter.get("name") or markdown_title(text, skill_id)
        description = front_matter.get("description") or first_paragraph_after_heading(
            text, ("Overview", "When This Skill Applies", "When to Use")
        )
        description = re.sub(r"\s+", " ", description).strip()

        images = image_files(skill_dir)
        image_references = []
        preview_lookup: dict[str, str] = {}
        full_lookup: dict[str, str] = {}
        for image in images:
            relative_image_path = image.relative_to(skill_dir).as_posix()
            preview_name = f"{slugify(image.stem)}.jpg"
            preview_dest = preview_dir / slugify(domain) / slugify(skill_id) / preview_name
            preview_path = ""
            if make_preview(image, preview_dest):
                preview_path = preview_dest.relative_to(output_dir.parent.parent).as_posix()
                preview_lookup[relative_image_path] = preview_path
            full_name = f"{slugify(image.stem)}.webp"
            full_dest = full_image_dir / slugify(domain) / slugify(skill_id) / full_name
            full_path = ""
            if make_full_image(image, full_dest):
                final_full_dest = full_dest if full_dest.exists() else full_dest.with_suffix(image.suffix.lower())
                full_path = final_full_dest.relative_to(output_dir.parent.parent).as_posix()
                full_lookup[relative_image_path] = full_path
            image_references.append(
                {
                    "imagePath": relative_image_path,
                    "previewPath": preview_path,
                    "fullPath": full_path,
                    "viewType": view_type_from_name(image),
                    "label": image_label(image),
                }
            )

        state_cards_path = skill_dir / "state_cards.json"
        runtime_cards_path = skill_dir / "runtime_state_cards.json"
        runtime_payload = read_json(runtime_cards_path)
        state_payload = read_json(state_cards_path)
        state_count = count_json_items(state_cards_path)
        runtime_count = count_json_items(runtime_cards_path)
        plan_count = count_json_items(skill_dir / "plan.json")
        applicability = bullets_after_heading(
            text,
            (
                "When This Skill Applies",
                "When This Skill Is Applicable",
                "When to Use",
                "When This Skill Applies",
            ),
        )
        failure_modes = bullets_after_heading(text, ("Common Failure Modes",), limit=3)
        overview = first_paragraph_after_heading(text, ("Overview", "When This Skill Applies"))

        skills.append(
            {
                "id": skill_id,
                "name": name,
                "description": description,
                "domain": domain,
                "domainLabel": DOMAIN_LABELS.get(domain, domain.replace("_", " ").title()),
                "platform": "Ubuntu",
                "category": "GUI Tasks",
                "sourcePath": f"ubuntu/{domain}/{skill_id}",
                "imageCount": len(images),
                "stateCardCount": state_count,
                "runtimeCardCount": runtime_count,
                "planStepCount": plan_count,
                "tags": infer_tags(name, description, domain),
                "overview": overview,
                "applicability": applicability,
                "failureModes": failure_modes,
                "skillMarkdown": strip_front_matter(text),
                "runtimeStates": extract_runtime_states(runtime_payload, preview_lookup, full_lookup),
                "imageReferences": image_references,
                "completenessScore": runtime_count * 3 + state_count * 2 + len(images),
            }
        )

    counts = defaultdict(int)
    image_counts = defaultdict(int)
    runtime_counts = defaultdict(int)
    for skill in skills:
        counts[skill["domain"]] += 1
        image_counts[skill["domain"]] += skill["imageCount"]
        runtime_counts[skill["domain"]] += skill["runtimeCardCount"]

    for domain in sorted(counts):
        domains[domain] = {
            "id": domain,
            "label": DOMAIN_LABELS.get(domain, domain.replace("_", " ").title()),
            "count": counts[domain],
            "imageCount": image_counts[domain],
            "runtimeCardCount": runtime_counts[domain],
        }

    return {
        "generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "generatedFrom": "open_source_skills/ubuntu",
        "stats": {
            "skillCount": len(skills),
            "domainCount": len(domains),
            "imageCount": sum(skill["imageCount"] for skill in skills),
            "runtimeCardCount": sum(skill["runtimeCardCount"] for skill in skills),
            "stateCardCount": sum(skill["stateCardCount"] for skill in skills),
        },
        "domains": list(domains.values()),
        "skills": skills,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source",
        type=Path,
        default=Path("/Users/zhangkangning/code_repos/mm_skill_creator/open_source_skills/ubuntu"),
        help="Path to the Ubuntu open-source skills directory.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("assets/skill-library"),
        help="Website asset directory for generated data and thumbnails.",
    )
    args = parser.parse_args()

    source_dir = args.source.expanduser().resolve()
    output_dir = args.output.resolve()
    if not source_dir.exists():
        raise SystemExit(f"Source directory not found: {source_dir}")

    payload = build_payload(source_dir, output_dir)
    data_path = output_dir / "skills-data.js"
    data_path.write_text(
        "window.MMSKILLS_LIBRARY = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(
        f"Wrote {len(payload['skills'])} skills, {payload['stats']['imageCount']} image references, "
        f"{len(list((output_dir / 'image-previews').rglob('*.jpg')))} previews, "
        f"and {len([path for path in (output_dir / 'full-images').rglob('*') if path.is_file()])} "
        f"full-resolution images to {output_dir}"
    )


if __name__ == "__main__":
    main()
