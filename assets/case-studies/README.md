# MMSkills Case Study Clips

This directory contains website-ready case-study clips derived from the
`case_study_lossless_clips_20260511` source bundle.

The source clips are preserved outside the repository. The files here are
H.264/yuv420p 720p MP4 derivatives with JPEG posters so GitHub Pages can
play them reliably in common browsers.

## Cases

| Case | Model | App | no-skills | text-only | MMSkills |
| --- | --- | --- | ---: | ---: | ---: |
| [Calc merged headers: v9 completes the structured sheet layout](case_01_calc_merged_headers_qwen3/case_notes.md) | `qwen3` | `libreoffice_calc` | 0.0 | 0.0 | 1.0 |
| [VS Code local VSIX install: v9 follows the local-file route](case_02_vscode_install_vsix_qwen3/case_notes.md) | `qwen3` | `vs_code` | 0.0 | 0.0 | 1.0 |
| [GIMP text-layer move: v9 moves the intended layer, not the background](case_03_gimp_move_text_box_geminipro31/case_notes.md) | `geminipro31` | `gimp` | 0.0 | 0.0 | 1.0 |
| [Calc chart creation: v9 creates and relocates the exact chart](case_04_calc_clustered_chart_geminipro31/case_notes.md) | `geminipro31` | `libreoffice_calc` | 0.0 | 0.0 | 1.0 |
| [Impress note and background: v9 completes both required edits](case_05_impress_purple_note_kimi_k26/case_notes.md) | `kimi_k26` | `libreoffice_impress` | 0 | 0 | 1 |

Regenerate with:

```bash
python3 scripts/build_case_study_site.py
```
