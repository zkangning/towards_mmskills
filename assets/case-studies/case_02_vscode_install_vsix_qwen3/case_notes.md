# VS Code local VSIX install: v9 follows the local-file route

- Model/result group: `qwen3`
- App: `vs_code`
- Task ID: `0512bb38-d531-4acf-9e7e-0add90816068`
- Instruction: Install an extension in VS Code from local VSIX file "/home/user/test.vsix".
- Why this case: The no-skill and text-only runs visibly loop on the Extensions/View entry point, while v9 opens the VSIX install flow and selects the file.

## Clips

The source clips were cut from the original recordings. The website clips are H.264/yuv420p 720p derivatives for reliable browser playback. The window is manually chosen to emphasize the key behavioral contrast.

| Variant | Score | Steps | Window | Clip | Caption |
| --- | ---: | ---: | ---: | --- | --- |
| `no_skills` | 0.0 | 20 | 60.0s + 45.0s | [no_skills.mp4](no_skills.mp4) | No-skills: reaches the Extensions area but repeats clicks near the panel menu and never opens the Install from VSIX file picker. |
| `text_only` | 0.0 | 20 | 100.0s + 50.0s | [text_only.mp4](text_only.mp4) | Text-only: alternates between the Extensions icon and View menu, but never commits to the local VSIX installation path. |
| `multimodal_v9` | 1.0 | 8 | 35.0s + 50.0s | [multimodal.mp4](multimodal.mp4) | Multimodal v9: opens Extensions, uses the overflow menu's Install from VSIX option, selects /home/user/test.vsix, and stops after the install path is completed. |

## Behavior Summary

- No-skills: reaches the Extensions area but repeats clicks near the panel menu and never opens the Install from VSIX file picker.
- Text-only: alternates between the Extensions icon and View menu, but never commits to the local VSIX installation path.
- Multimodal v9: opens Extensions, uses the overflow menu's Install from VSIX option, selects /home/user/test.vsix, and stops after the install path is completed.

## Skill Usage

- `no_skills`: mode=`no_skills`, calls=0, consulted=none recorded; task skills=none recorded.
- `text_only`: mode=`text_only`, calls=0, consulted=none recorded; task skills=`VSCODE_Install_Local_VSIX_and_Verify_Extension_Installed`.
- `multimodal_v9`: mode=`multimodal`, calls=1, consulted=`VSCODE_Install_Local_VSIX_and_Verify_Extension_Installed`; task skills=`VSCODE_Install_Local_VSIX_and_Verify_Extension_Installed`.

## Source Recordings

- `no_skills`: `evaluation_results/skills419_full_domain_qwen3/no_skills/pyautogui/screenshot/qwen3vl235_skills419_no_skills_full_tmux_rerun/vs_code/0512bb38-d531-4acf-9e7e-0add90816068/recording.mp4`
- `text_only`: `evaluation_results/skills419_full_domain_qwen3/text-only/pyautogui/screenshot/qwen3vl235_skills419_text_branch_full/vs_code/0512bb38-d531-4acf-9e7e-0add90816068/recording.mp4`
- `multimodal_v9`: `evaluation_results/skills419_full_domain_qwen3/multimodal_v9/pyautogui/screenshot/qwen3vl235_skills419_multimodal_v9_full/vs_code/0512bb38-d531-4acf-9e7e-0add90816068/recording.mp4`
