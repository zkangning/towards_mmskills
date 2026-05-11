# Calc merged headers: v9 completes the structured sheet layout

- Model/result group: `qwen3`
- App: `libreoffice_calc`
- Task ID: `1d17d234-e39d-4ed7-b46f-4417922a4e7c`
- Instruction: Create a new sheet named "Sheet2" and merge cells A1:C1 to write the header "Investment Summary". Beneath that, merge cells A2:B2 to write "High Interest Rate" and merge cells C2:D2 to form "Low Interest Rate".
- Why this case: The failure modes are visible in the sheet-tab/menu region, while the successful run visibly builds the three merged report headers.

## Clips

The source clips were cut from the original recordings with stream-copy. The website and README clips keep the original 1920x1080 resolution and are encoded as high-quality H.264/yuv420p CRF18 videos for reliable direct browser playback. The window is manually chosen to emphasize the key behavioral contrast.

| Variant | Score | Steps | Window | Clip | Caption |
| --- | ---: | ---: | ---: | --- | --- |
| `no_skills` | 0.0 | 20 | 98.0s + 50.0s | [no_skills.mp4](no_skills.mp4) | No-skills: repeatedly clicks around the sheet tab/context-menu area and never constructs the requested merged-cell layout. |
| `text_only` | 0.0 | 20 | 120.0s + 50.0s | [text_only.mp4](text_only.mp4) | Text-only: starts toward the right operation, but loses cell selection state and ends by rewriting only Investment Summary, without the two second-row headers. |
| `multimodal_v9` | 1.0 | 12 | 80.0s + 50.0s | [multimodal.mp4](multimodal.mp4) | Multimodal v9: creates Sheet2, selects each target range, merges A1:C1, A2:B2, and C2:D2, then writes all three labels. |

## Behavior Summary

- No-skills: repeatedly clicks around the sheet tab/context-menu area and never constructs the requested merged-cell layout.
- Text-only: starts toward the right operation, but loses cell selection state and ends by rewriting only Investment Summary, without the two second-row headers.
- Multimodal v9: creates Sheet2, selects each target range, merges A1:C1, A2:B2, and C2:D2, then writes all three labels.

## Skill Usage

- `no_skills`: mode=`no_skills`, calls=0, consulted=none recorded; task skills=none recorded.
- `text_only`: mode=`text_only`, calls=0, consulted=none recorded; task skills=`LIBREOFFICECALC_Build_Merged_Report_Headers_and_Multi_Row_Layouts`, `LIBREOFFICECALC_Manage_Calc_Worksheets_and_Cross_Sheet_Data`.
- `multimodal_v9`: mode=`multimodal`, calls=1, consulted=`LIBREOFFICECALC_Manage_Calc_Worksheets_and_Cross_Sheet_Data`; task skills=`LIBREOFFICECALC_Build_Merged_Report_Headers_and_Multi_Row_Layouts`, `LIBREOFFICECALC_Manage_Calc_Worksheets_and_Cross_Sheet_Data`.

## Source Recordings

- `no_skills`: `evaluation_results/skills419_full_domain_qwen3/no_skills/pyautogui/screenshot/qwen3vl235_skills419_no_skills_full_tmux_rerun/libreoffice_calc/1d17d234-e39d-4ed7-b46f-4417922a4e7c/recording.mp4`
- `text_only`: `evaluation_results/skills419_full_domain_qwen3/text-only/pyautogui/screenshot/qwen3vl235_skills419_text_branch_full/libreoffice_calc/1d17d234-e39d-4ed7-b46f-4417922a4e7c/recording.mp4`
- `multimodal_v9`: `evaluation_results/skills419_full_domain_qwen3/multimodal_v9/pyautogui/screenshot/qwen3vl235_skills419_multimodal_v9_full/libreoffice_calc/1d17d234-e39d-4ed7-b46f-4417922a4e7c/recording.mp4`
