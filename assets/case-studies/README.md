# Lossless Case Study Clips

This folder replaces the earlier compressed comparison-video draft. Each case now contains three separate clips: `no_skills.mp4`, `text_only.mp4`, and `multimodal.mp4`.

Video handling:

- No side-by-side combined videos are generated.
- Clips are made with ffmpeg stream copy: `-map 0:v:0 -an -c:v copy`.
- No scaling, filtering, frame-rate change, or video re-encoding is applied.
- Each clip uses a manually selected time window that emphasizes either the failure loop/wrong route or the successful v9 operation.
- Because stream copy preserves encoded frames, clip boundaries may snap to nearby keyframes instead of exact frame-level timestamps.

## Cases

| Case | Model | App | Task | no-skills | text-only | multimodal_v9 | v9 skills |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| [Calc merged headers: v9 completes the structured sheet layout](case_01_calc_merged_headers_qwen3/case_notes.md) | `qwen3` | `libreoffice_calc` | `1d17d234-e39d-4ed7-b46f-4417922a4e7c` | 0.0 | 0.0 | 1.0 | `LIBREOFFICECALC_Manage_Calc_Worksheets_and_Cross_Sheet_Data` |
| [VS Code local VSIX install: v9 follows the local-file route](case_02_vscode_install_vsix_qwen3/case_notes.md) | `qwen3` | `vs_code` | `0512bb38-d531-4acf-9e7e-0add90816068` | 0.0 | 0.0 | 1.0 | `VSCODE_Install_Local_VSIX_and_Verify_Extension_Installed` |
| [GIMP text-layer move: v9 moves the intended layer, not the background](case_03_gimp_move_text_box_geminipro31/case_notes.md) | `geminipro31` | `gimp` | `e2dd0213-26db-4349-abe5-d5667bfd725c` | 0.0 | 0.0 | 1.0 | `GIMP_GIMP_Move_Text_Or_Object_Layers_Without_Selecting_Background_Content` |
| [Calc chart creation: v9 creates and relocates the exact chart](case_04_calc_clustered_chart_geminipro31/case_notes.md) | `geminipro31` | `libreoffice_calc` | `12382c62-0cd1-4bf2-bdc8-1d20bf9b2371` | 0.0 | 0.0 | 1.0 | `LIBREOFFICECALC_Create_Chart_on_Target_Sheet_with_Exact_Title_and_Type` |
| [Impress note and background: v9 completes both required edits](case_05_impress_purple_note_kimi_k26/case_notes.md) | `kimi_k26` | `libreoffice_impress` | `841b50aa-df53-47bd-a73a-22d3a9f73160` | 0 | 0 | 1 | `LIBREOFFICEIMPRESS_Edit_Speaker_Notes_and_Notes_Views` |

## Website Caption Use

For each case, use the `captions.json` strings as the captions below the corresponding videos. The longer `case_notes.md` file contains the same captions plus the rationale, source recording paths, and skill-call metadata.
