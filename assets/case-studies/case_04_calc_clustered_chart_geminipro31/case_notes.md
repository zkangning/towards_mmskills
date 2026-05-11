# Calc chart creation: v9 creates and relocates the exact chart

- Model/result group: `geminipro31`
- App: `libreoffice_calc`
- Task ID: `12382c62-0cd1-4bf2-bdc8-1d20bf9b2371`
- Instruction: Create a clustered column chart showing the Sales and COGS data for each week in a new sheet named "Sheet2". Set the chart title as "Sales & COGS".
- Why this case: The chart wizard, title entry, and chart relocation are directly visible, making the successful skill-guided sequence easy to contrast.

## Clips

The source clips were cut from the original recordings with stream-copy. The website and README clips keep the original 1920x1080 resolution and are encoded as high-quality H.264/yuv420p CRF18 videos for reliable direct browser playback. The window is manually chosen to emphasize the key behavioral contrast.

| Variant | Score | Steps | Window | Clip | Caption |
| --- | ---: | ---: | ---: | --- | --- |
| `no_skills` | 0.0 | 20 | 0.0s + 55.0s | [no_skills.mp4](no_skills.mp4) | No-skills: selects data and clicks chart-related controls, but then cuts/pastes around the workbook and never leaves a correct clustered chart with the required title on Sheet2. |
| `text_only` | 0.0 | 20 | 140.0s + 55.0s | [text_only.mp4](text_only.mp4) | Text-only: repeatedly retries chart insertion and sheet movement, but does not stabilize the correct data range, title, and destination sheet. |
| `multimodal_v9` | 1.0 | 16 | 220.0s + 60.0s | [multimodal.mp4](multimodal.mp4) | Multimodal v9: selects the Sales/COGS data range, opens the chart wizard, enters the exact title Sales & COGS, creates Sheet2, and moves the chart there. |

## Behavior Summary

- No-skills: selects data and clicks chart-related controls, but then cuts/pastes around the workbook and never leaves a correct clustered chart with the required title on Sheet2.
- Text-only: repeatedly retries chart insertion and sheet movement, but does not stabilize the correct data range, title, and destination sheet.
- Multimodal v9: selects the Sales/COGS data range, opens the chart wizard, enters the exact title Sales & COGS, creates Sheet2, and moves the chart there.

## Skill Usage

- `no_skills`: mode=`no_skills`, calls=0, consulted=none recorded; task skills=none recorded.
- `text_only`: mode=`text_only`, calls=1, consulted=`LIBREOFFICECALC_Create_Chart_on_Target_Sheet_with_Exact_Title_and_Type`; task skills=`LIBREOFFICECALC_Create_Chart_on_Target_Sheet_with_Exact_Title_and_Type`.
- `multimodal_v9`: mode=`multimodal`, calls=2, consulted=`LIBREOFFICECALC_Create_Chart_on_Target_Sheet_with_Exact_Title_and_Type`; task skills=`LIBREOFFICECALC_Create_Chart_on_Target_Sheet_with_Exact_Title_and_Type`.

## Source Recordings

- `no_skills`: `evaluation_results/skills419_full_domain_geminipro31/no_skills/pyautogui/screenshot/gemini31pro_office_no_skills/libreoffice_calc/12382c62-0cd1-4bf2-bdc8-1d20bf9b2371/recording.mp4`
- `text_only`: `evaluation_results/skills419_full_domain_geminipro31/text-only/pyautogui/screenshot/geminipro31_skills419_text_branch_full/libreoffice_calc/12382c62-0cd1-4bf2-bdc8-1d20bf9b2371/recording.mp4`
- `multimodal_v9`: `evaluation_results/skills419_full_domain_geminipro31/multimodal_v9/pyautogui/screenshot/geminipro31_skills419_multimodal_v9_full/libreoffice_calc/12382c62-0cd1-4bf2-bdc8-1d20bf9b2371/recording.mp4`
