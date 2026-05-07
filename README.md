# 🧩 MMSkills

**MMSkills: Towards Multimodal Skills for General Visual Agents**

MMSkills is a framework for representing, generating, and using reusable multimodal procedural knowledge for visual agents. This anonymous release contains a compact public skill subset, the MM Skill runtime architecture, and OSWorld integration files for reproducing skill-augmented desktop-agent evaluations.

![MMSkills overview](assets/full_figure.png)

The original PDF version of the paper figure is available at [`assets/full_figure.pdf`](assets/full_figure.pdf).

## ✨ What Is Included

Each MMSkill is a compact, state-conditioned package:

- `SKILL.md`: procedural guidance, applicability conditions, transfer limits, and verification cues.
- `runtime_state_cards.json`: compact state/view metadata used by the runtime agent.
- `state_cards.json`: audit-grade state metadata for inspection and debugging.
- `Images/`: visual keyframes and focus crops loaded only when a planning branch requests them.
- `task_skill_mappings/task_skill_mapping.json`: a lightweight OSWorld task-to-skill mapping for the released subset.

This repository is not a full OSWorld fork. It vendors the MM Skill integration layer and helper scripts needed to install it into an OSWorld checkout.

## 🗂️ Repository Layout

```text
MMSkills/
  assets/                       # Paper figure for README/paper reference
  mm_agents/                    # MM Skill runtime architecture and model adapters
  osworld_integration/          # MMSkills-aware OSWorld runner files
  skills_library/               # Public multimodal skills subset
  task_skill_mappings/          # Compact global OSWorld task-to-skill mapping
  scripts/
    install_into_osworld.py     # Copy this release into an OSWorld checkout
    sync_from_sources.py        # Maintainer sync script for local development sources
```

## 🧠 Architecture

The public runtime entrypoint is [`mm_agents/mm_skill_agent.py`](mm_agents/mm_skill_agent.py), exposed in OSWorld as:

```bash
--agent_type mm_skill
```

The architecture is model-agnostic: the main idea is a branch-loaded multimodal skill consultation loop. The main agent sees only compact skill hints; when a skill may help, a temporary branch decides whether visual evidence is needed, requests only relevant state views, compares them with the live screenshot, and returns structured guidance for the next grounded action.

The OSWorld integration in this release uses a Gemini/OpenAI-compatible desktop-agent adapter as the reference implementation, but the MM Skill consultation pattern can be attached to other visual agents by providing equivalent screenshot input, model-call, and action-parsing interfaces.

## 🚀 Setup

1. Clone OSWorld and install its environment following the OSWorld instructions.

2. Clone this repository next to it or anywhere convenient.

3. Install the MMSkills integration into OSWorld:

```bash
python3 scripts/install_into_osworld.py /path/to/OSWorld --with-runner --with-skills
```

This copies the agent files into `OSWorld/mm_agents/`, installs the MMSkills-aware runner files, and copies the released skills subset plus mapping file into `OSWorld/skills_library/` and `OSWorld/task_skill_mappings/`.

4. Configure an OpenAI-compatible or Gemini-compatible API endpoint:

```bash
export OPENAI_BASE_URL="https://your-openai-compatible-endpoint/v1"
export OPENAI_API_KEY="your_api_key"
```

For native Gemini-compatible routing, use `--api_backend gemini` and set `GEMINI_BASE_URL` / `GEMINI_API_KEY`.

## 🧪 OSWorld Evaluation

Run commands from the OSWorld checkout after installation.

### Baseline Without Skills

```bash
python run.py \
  --agent_type gemini \
  --model gemini-3-pro-preview \
  --api_backend openai \
  --observation_type screenshot \
  --action_space pyautogui \
  --max_steps 20 \
  --test_all_meta_path evaluation_examples/test_nogdrive.json \
  --domain chrome \
  --result_dir results/no_skills
```

### Text-Only Skills

```bash
python run.py \
  --agent_type gemini_text_skill \
  --model gemini-3-pro-preview \
  --api_backend openai \
  --observation_type screenshot \
  --action_space pyautogui \
  --max_steps 20 \
  --skills_library_dir skills_library \
  --task_skill_mapping_root task_skill_mappings/task_skill_mapping.json \
  --skill_mode text_only \
  --text_skill_mode branch_planner \
  --test_all_meta_path evaluation_examples/test_nogdrive.json \
  --domain chrome \
  --result_dir results/text_only
```

### MM Skill Multimodal Agent

```bash
python run.py \
  --agent_type mm_skill \
  --model gemini-3-pro-preview \
  --api_backend openai \
  --observation_type screenshot \
  --action_space pyautogui \
  --max_steps 20 \
  --skills_library_dir skills_library \
  --task_skill_mapping_root task_skill_mappings/task_skill_mapping.json \
  --skill_mode multimodal \
  --task_skill_top_k 6 \
  --save_conversation_json \
  --test_all_meta_path evaluation_examples/test_nogdrive.json \
  --domain chrome \
  --result_dir results/mm_skill_multimodal
```

Use `--domain all` for the full no-Google-Drive OSWorld split. The runner writes per-task trajectories, screenshots, `skill_invocations.json`, `skill_usage_summary.json`, and aggregate results under the selected `--result_dir`.

## 📚 Released Skills

The released subset contains 16 skills across Chrome, LibreOffice Calc/Impress/Writer, OS, Thunderbird, VLC, VS Code, and GIMP. Each skill includes text, runtime state cards, audit state cards, and visual keyframes. See [`skills_library/README.md`](skills_library/README.md) for the exact list.


