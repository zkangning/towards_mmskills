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


def count_json_items(path: Path) -> int:
    if not path.exists():
        return 0
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return 0
    if isinstance(data, list):
        return len(data)
    if isinstance(data, dict):
        for key in ("cards", "state_cards", "runtime_state_cards", "steps"):
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


def make_thumbnail(source: Path, dest: Path) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if shutil.which("sips"):
        result = subprocess.run(
            ["sips", "-Z", "640", "-s", "format", "jpeg", str(source), "--out", str(dest)],
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


def build_payload(source_dir: Path, output_dir: Path) -> dict:
    skills = []
    domains: dict[str, dict] = {}
    thumbnail_dir = output_dir / "thumbnails"
    thumbnail_dir.mkdir(parents=True, exist_ok=True)

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
        chosen_thumb = choose_thumbnail(images)
        thumb_path = ""
        if chosen_thumb:
            thumb_name = f"{slugify(domain)}--{slugify(skill_id)}.jpg"
            thumb_dest = thumbnail_dir / thumb_name
            if make_thumbnail(chosen_thumb, thumb_dest):
                thumb_path = f"assets/skill-library/thumbnails/{thumb_name}"

        state_count = count_json_items(skill_dir / "state_cards.json")
        runtime_count = count_json_items(skill_dir / "runtime_state_cards.json")
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
                "thumbnail": thumb_path,
                "imageCount": len(images),
                "stateCardCount": state_count,
                "runtimeCardCount": runtime_count,
                "planStepCount": plan_count,
                "tags": infer_tags(name, description, domain),
                "overview": overview,
                "applicability": applicability,
                "failureModes": failure_modes,
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
        f"and {len(list((output_dir / 'thumbnails').glob('*.jpg')))} thumbnails to {output_dir}"
    )


if __name__ == "__main__":
    main()
