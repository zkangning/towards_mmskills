# GIMP text-layer move: v9 moves the intended layer, not the background

- Model/result group: `geminipro31`
- App: `gimp`
- Task ID: `e2dd0213-26db-4349-abe5-d5667bfd725c`
- Instruction: Shift the text box to the left without accidentally selecting the image layer beneath it.
- Why this case: This case has a clear visual distinction: failures drag around the wrong target or overshoot, while v9 deliberately activates and moves the text layer.

## Clips

The source clips were cut from the original recordings with stream-copy. The website and README clips keep the original 1920x1080 resolution and are encoded as high-quality H.264/yuv420p CRF18 videos for reliable direct browser playback. The window is manually chosen to emphasize the key behavioral contrast.

| Variant | Score | Steps | Window | Clip | Caption |
| --- | ---: | ---: | ---: | --- | --- |
| `no_skills` | 0.0 | 20 | 250.0s + 55.0s | [no_skills.mp4](no_skills.mp4) | No-skills: repeatedly clicks tools/layers and drags from the image area, often affecting or targeting the background instead of the text box. |
| `text_only` | 0.0 | 20 | 245.0s + 55.0s | [text_only.mp4](text_only.mp4) | Text-only: receives the right high-level idea but keeps dragging large distances from the wrong visual anchor, so the target text box is not placed correctly. |
| `multimodal_v9` | 1.0 | 8 | 45.0s + 50.0s | [multimodal.mp4](multimodal.mp4) | Multimodal v9: activates the text/object layer, uses the move tool, and drags the text box left while avoiding the background layer. |

## Behavior Summary

- No-skills: repeatedly clicks tools/layers and drags from the image area, often affecting or targeting the background instead of the text box.
- Text-only: receives the right high-level idea but keeps dragging large distances from the wrong visual anchor, so the target text box is not placed correctly.
- Multimodal v9: activates the text/object layer, uses the move tool, and drags the text box left while avoiding the background layer.

## Skill Usage

- `no_skills`: mode=`no_skills`, calls=0, consulted=none recorded; task skills=none recorded.
- `text_only`: mode=`text_only`, calls=1, consulted=`GIMP_GIMP_Move_Text_Or_Object_Layers_Without_Selecting_Background_Content`; task skills=`GIMP_GIMP_Move_Text_Or_Object_Layers_Without_Selecting_Background_Content`, `GIMP_GIMP_Manage_Layers_Masks_and_Blend_States`.
- `multimodal_v9`: mode=`multimodal`, calls=1, consulted=`GIMP_GIMP_Move_Text_Or_Object_Layers_Without_Selecting_Background_Content`; task skills=`GIMP_GIMP_Move_Text_Or_Object_Layers_Without_Selecting_Background_Content`, `GIMP_GIMP_Manage_Layers_Masks_and_Blend_States`.

## Source Recordings

- `no_skills`: `evaluation_results/skills419_full_domain_geminipro31/no_skills/pyautogui/screenshot/gemini31pro_office_no_skills/gimp/e2dd0213-26db-4349-abe5-d5667bfd725c/recording.mp4`
- `text_only`: `evaluation_results/skills419_full_domain_geminipro31/text-only/pyautogui/screenshot/geminipro31_skills419_text_branch_full/gimp/e2dd0213-26db-4349-abe5-d5667bfd725c/recording.mp4`
- `multimodal_v9`: `evaluation_results/skills419_full_domain_geminipro31/multimodal_v9/pyautogui/screenshot/geminipro31_skills419_multimodal_v9_full/gimp/e2dd0213-26db-4349-abe5-d5667bfd725c/recording.mp4`
