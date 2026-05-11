window.MMSKILLS_LIBRARY = {
  "generatedAt": "2026-05-11T08:36:28+00:00",
  "generatedFrom": "open_source_skills/ubuntu",
  "stats": {
    "skillCount": 247,
    "domainCount": 10,
    "imageCount": 1910,
    "runtimeCardCount": 1232,
    "stateCardCount": 1428
  },
  "domains": [
    {
      "id": "chrome",
      "label": "Chrome",
      "count": 34,
      "imageCount": 292,
      "runtimeCardCount": 167
    },
    {
      "id": "gimp",
      "label": "GIMP",
      "count": 26,
      "imageCount": 203,
      "runtimeCardCount": 130
    },
    {
      "id": "libreoffice_calc",
      "label": "LibreOffice Calc",
      "count": 26,
      "imageCount": 184,
      "runtimeCardCount": 130
    },
    {
      "id": "libreoffice_impress",
      "label": "LibreOffice Impress",
      "count": 20,
      "imageCount": 139,
      "runtimeCardCount": 100
    },
    {
      "id": "libreoffice_writer",
      "label": "LibreOffice Writer",
      "count": 23,
      "imageCount": 144,
      "runtimeCardCount": 115
    },
    {
      "id": "multi_apps",
      "label": "Multi-App Workflows",
      "count": 20,
      "imageCount": 164,
      "runtimeCardCount": 100
    },
    {
      "id": "os",
      "label": "Ubuntu OS",
      "count": 37,
      "imageCount": 283,
      "runtimeCardCount": 185
    },
    {
      "id": "thunderbird",
      "label": "Thunderbird",
      "count": 25,
      "imageCount": 192,
      "runtimeCardCount": 125
    },
    {
      "id": "vlc",
      "label": "VLC",
      "count": 18,
      "imageCount": 122,
      "runtimeCardCount": 90
    },
    {
      "id": "vs_code",
      "label": "VS Code",
      "count": 18,
      "imageCount": 187,
      "runtimeCardCount": 90
    }
  ],
  "skills": [
    {
      "id": "CHROME_Add_Shortcut_to_New_Tab_Page",
      "name": "Add Shortcut to New Tab Page",
      "description": "Use Chrome's New Tab shortcut editor to add a named website shortcut tile and verify that the tile appears in the shortcut grid.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Add_Shortcut_to_New_Tab_Page",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-add-shortcut-to-new-tab-page.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "web"
      ],
      "overview": "Use this skill to add a website shortcut tile to the Chrome or Chromium New Tab page. The reusable workflow is text-first: open the New Tab shortcut editor, enter the current task's requested shortcut label and URL, save the dialog, and verify that the new tile appears in the shortcut grid.",
      "applicability": [
        "The task asks to add a website shortcut to the Chrome or Chromium New Tab page.",
        "The task provides, or clearly implies, the shortcut label and destination URL to enter.",
        "Chrome can open a New Tab page with the shortcut grid below the search box."
      ],
      "failureModes": [
        "The URL is incomplete, misspelled, or malformed, leaving Done disabled.",
        "The shortcut label is entered into the URL field, or the URL is entered into the Name field.",
        "A visible example value from an image is copied instead of the current task's requested value."
      ],
      "completenessScore": 35
    },
    {
      "id": "CHROME_Check_Finance_And_Copy_Or_Share_Stock_Links",
      "name": "Check Finance And Copy Or Share Stock Links",
      "description": "Use Chrome and Google Finance to open a requested stock quote page, inspect visible finance news context, and complete or verify copy, share, or follow actions.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Check_Finance_And_Copy_Or_Share_Stock_Links",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-check-finance-and-copy-or-share-stock-links.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "text"
      ],
      "overview": "Use this skill when the task is about a stock or company quote in Chrome and the required work can be completed from Google Finance: opening the requested quote page, checking visible finance news titles or links, copying or sharing the quote link, or following the stock page.",
      "applicability": [],
      "failureModes": [
        "Selecting the wrong security from suggestions because it has a similar company name or ticker.",
        "Treating a red or green box as a fixed coordinate after the layout changes.",
        "Stopping after locating the Share button without opening the share/copy surface or completing the requested handoff."
      ],
      "completenessScore": 36
    },
    {
      "id": "CHROME_Check_Weather_And_Astronomy_Data_From_Web_Search",
      "name": "Check Weather And Astronomy Data From Web Search",
      "description": "Use Chrome search results to open a Google weather widget, switch the requested day or metric view, and verify the final visible forecast state.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Check_Weather_And_Astronomy_Data_From_Web_Search",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-check-weather-and-astronomy-data-from-web-search.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "search",
        "web"
      ],
      "overview": "Use this skill when a Chrome web search needs information from the Google weather result widget: forecast days, chart views, wind or temperature details, or another closely related result that uses the same widget structure. It fits best when the page exposes a day strip, metric tabs, and a chart or value panel that updates after clicks.",
      "applicability": [],
      "failureModes": [
        "Stopping after a search snippet or ordinary web result when the task requires the interactive widget data.",
        "Selecting a day but never checking that the widget header and chart actually changed.",
        "Opening the metric tab but leaving the wrong day selected."
      ],
      "completenessScore": 35
    },
    {
      "id": "CHROME_Clear_Browsing_Data_and_Site_Data",
      "name": "Clear Browsing Data and Site Data",
      "description": "Clear Chrome browsing data or site-specific stored data, then verify that the requested cleanup actually took effect.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Clear_Browsing_Data_and_Site_Data",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-clear-browsing-data-and-site-data.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "chrome"
      ],
      "overview": "Use this skill when the task asks Chrome or Chromium to do any of the following:",
      "applicability": [
        "clear browsing history, cached images/files, cookies, or other browsing-data categories",
        "open the Delete browsing data workflow and choose a time range or tab before deleting",
        "remove stored data for a specific site from the All sites page"
      ],
      "failureModes": [
        "Opening the deletion workflow correctly but deleting with the wrong time range or wrong category selection.",
        "Treating the menu item or Delete data button state as completion evidence.",
        "Clearing all browsing data when the task only asked for one site's stored data."
      ],
      "completenessScore": 35
    },
    {
      "id": "CHROME_Configure_Appearance_Reading_Mode_and_Toolbar",
      "name": "Configure Appearance Reading Mode and Toolbar",
      "description": "Use Chrome appearance controls, Reading mode settings, toolbar toggles, and explicit Chrome Refresh rollback rows to change visual preferences and verify the requested visible state.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Configure_Appearance_Reading_Mode_and_Toolbar",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-configure-appearance-reading-mode-and-toolbar.jpg",
      "imageCount": 16,
      "stateCardCount": 6,
      "runtimeCardCount": 4,
      "planStepCount": 9,
      "tags": [
        "settings"
      ],
      "overview": "Use this skill when Chrome or Chromium must show a visible appearance result, especially:",
      "applicability": [
        "opening the Reading mode side panel",
        "changing Reading mode font family",
        "changing Reading mode background or theme"
      ],
      "failureModes": [
        "Opening Reading mode but leaving the requested font or color unchanged.",
        "Copying the example screenshot's font or tint instead of the live task's requested value.",
        "Treating a red or green box as a stable click position after layout changes."
      ],
      "completenessScore": 40
    },
    {
      "id": "CHROME_Configure_Default_Search_Engine_And_Search_Preferences",
      "name": "Configure Default Search Engine And Search Preferences",
      "description": "Use Chrome search-engine settings and Google Search Settings surfaces to change providers or inspect search-display preferences without inventing controls that are not visible.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Configure_Default_Search_Engine_And_Search_Preferences",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-configure-default-search-engine-and-search-preferences.jpg",
      "imageCount": 12,
      "stateCardCount": 6,
      "runtimeCardCount": 4,
      "planStepCount": 9,
      "tags": [
        "search",
        "settings"
      ],
      "overview": "",
      "applicability": [
        "change the default search engine",
        "inspect, edit, or remove search-engine or site-search entries",
        "verify a downstream search-results preference or a Google Search settings control"
      ],
      "failureModes": [
        "Confirming the provider dialog while the old provider is still selected.",
        "Treating Google Search Settings as the same surface as Chrome Search engine settings.",
        "Scrolling or clicking through a Google Search settings page that does not contain the requested control while still assuming the task is solved."
      ],
      "completenessScore": 36
    },
    {
      "id": "CHROME_Configure_Security_And_Safe_Browsing_Toggles",
      "name": "Configure Security And Safe Browsing Toggles",
      "description": "Use Chrome Security and Privacy settings to configure Safe Browsing, secure DNS, secure connections, or nearby security controls and verify the requested state.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Configure_Security_And_Safe_Browsing_Toggles",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-configure-security-and-safe-browsing-toggles.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings"
      ],
      "overview": "",
      "applicability": [
        "Safe Browsing level changes such as Enhanced protection, Standard protection, or No protection.",
        "Secondary Security-page controls such as secure connections, password-compromise warnings, or Use secure DNS and its provider selection.",
        "Verification that a requested security control is visibly enabled, disabled, or selected."
      ],
      "failureModes": [
        "Stopping on the Privacy and security overview without entering the Security detail page.",
        "Choosing the example Safe Browsing option instead of the one requested by the task.",
        "Treating the secure-connections screenshot as proof that secure DNS is already configured."
      ],
      "completenessScore": 36
    },
    {
      "id": "CHROME_Configure_Startup_Downloads_And_System_Behavior",
      "name": "Configure Startup Downloads And System Behavior",
      "description": "Use Chrome Settings to change download location, download prompts, startup behavior, or nearby system and performance controls, then verify the visible result.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Configure_Startup_Downloads_And_System_Behavior",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-configure-startup-downloads-and-system-behavior.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 4,
      "planStepCount": 8,
      "tags": [
        "settings"
      ],
      "overview": "",
      "applicability": [
        "change the default download folder",
        "turn `Ask where to save each file before downloading` on or off",
        "change `On startup` behavior or the startup page list"
      ],
      "failureModes": [
        "confusing the highlighted `Downloads` sidebar entry with the Downloads page already being loaded",
        "flipping a toggle without first checking whether it already matches the task",
        "selecting the example folder from a reference image instead of the folder named by the current task"
      ],
      "completenessScore": 33
    },
    {
      "id": "CHROME_Enable_Live_Caption_and_Webpage_Translation",
      "name": "Enable Live Caption and Webpage Translation",
      "description": "Use Chrome Settings to enable webpage translation, Live Caption, or Live Translate and verify the requested caption and translation language state.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Enable_Live_Caption_and_Webpage_Translation",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-enable-live-caption-and-webpage-translation.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "web"
      ],
      "overview": "Use this skill when a Chrome task asks you to change browser-level translation or caption settings in Chrome Settings. Typical cases:",
      "applicability": [
        "enable webpage translation or set the language Chrome should translate pages into;",
        "enable `Live Caption`;",
        "enable `Live Translate` and choose the caption translation target language;"
      ],
      "failureModes": [
        "stopping on `chrome://settings/accessibility` without opening `Captions`;",
        "selecting a language in `Add languages` but not confirming it;",
        "copying the example language from a screenshot instead of the language named by the current task;"
      ],
      "completenessScore": 36
    },
    {
      "id": "CHROME_Filter_And_Sort_Commerce_Results",
      "name": "Filter And Sort Commerce Results",
      "description": "Use shopping-site result lists and shopping-specific filter or sorting controls to apply requested price, category, size, color, or rating constraints and verify that the shopping result list reflects the requested constraint.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Filter_And_Sort_Commerce_Results",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-filter-and-sort-commerce-results.jpg",
      "imageCount": 5,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "chrome"
      ],
      "overview": "Use shopping-site result lists and shopping-specific filter or sorting controls to apply requested price, category, size, color, or rating constraints and verify that the shopping result list reflects the requested constraint.",
      "applicability": [
        "Filtering or sorting a shopping results page",
        "Applying price, category, size, color, rating, or deal constraints on shopping sites",
        "Verifying that the shopping results page reflects the requested filter or sort state"
      ],
      "failureModes": [
        "Treating a travel results surface as if it were a shopping filter panel.",
        "Stopping when a dropdown opens instead of verifying that the selected shopping constraint persists on the results page.",
        "Confusing a product detail or cart page with the results page where filtering must happen."
      ],
      "completenessScore": 32
    },
    {
      "id": "CHROME_Filter_and_Sort_Google_Maps_Reviews",
      "name": "Filter and Sort Google Maps Reviews",
      "description": "Use Google Maps category filters, place tabs, review sort controls, and review expansion links to inspect the requested reviews and verify the visible result state.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Filter_and_Sort_Google_Maps_Reviews",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-filter-and-sort-google-maps-reviews.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "chrome"
      ],
      "overview": "",
      "applicability": [
        "narrowing visible results with a category or nearby business filter",
        "opening a place's Reviews tab",
        "changing the review ordering"
      ],
      "failureModes": [
        "Selecting the example hotel category when the task actually names another business type.",
        "Clicking the Reviews tab area after reviews are already active and misreading the lack of change as failure.",
        "Opening the sort menu but never choosing the requested ordering."
      ],
      "completenessScore": 37
    },
    {
      "id": "CHROME_Interact_With_YouTube_And_Video_Page_Controls",
      "name": "Interact With YouTube And Video Page Controls",
      "description": "Reach a YouTube channel or watch page in Chrome, use channel sorting or video engagement controls, and verify the requested visible result.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Interact_With_YouTube_And_Video_Page_Controls",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-interact-with-youtube-and-video-page-controls.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "media"
      ],
      "overview": "",
      "applicability": [
        "opening the requested creator channel or watch page",
        "using the channel Videos tab and its sort chips",
        "opening a target video from the current channel surface"
      ],
      "failureModes": [
        "Opening an unrelated or sponsored result instead of the requested creator.",
        "Picking the first visible video before applying the requested sort.",
        "Clicking from the screenshot cue instead of locating the specific live button."
      ],
      "completenessScore": 36
    },
    {
      "id": "CHROME_Manage_Autofill_Addresses_And_Payment_Methods",
      "name": "Manage Autofill Addresses And Payment Methods",
      "description": "Use Chrome Autofill settings to add, edit, disable, and verify saved addresses or payment-method preferences.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Manage_Autofill_Addresses_And_Payment_Methods",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-manage-autofill-addresses-and-payment-methods.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "save",
        "settings"
      ],
      "overview": "Use this skill when a Chrome or Chromium task asks you to manage data under Autofill and passwords, especially:",
      "applicability": [
        "add a new saved address",
        "edit an existing saved address",
        "enable or disable address autofill"
      ],
      "failureModes": [
        "Opening Password Manager instead of `Addresses and more` or `Payment methods`",
        "Treating the pre-dialog Addresses page as if the form is already open",
        "Reusing screenshot example data instead of the current task's requested values"
      ],
      "completenessScore": 36
    },
    {
      "id": "CHROME_Manage_Bookmarks_Reading_List_And_Shortcuts",
      "name": "Manage Bookmarks Reading List And Shortcuts",
      "description": "Save the current Chrome page, choose or create a destination, and verify the saved result. Use the image cards only when the current UI genuinely matches the bookmark states they show.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Manage_Bookmarks_Reading_List_And_Shortcuts",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-manage-bookmarks-reading-list-and-shortcuts.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "save",
        "images"
      ],
      "overview": "",
      "applicability": [],
      "failureModes": [
        "Opening the save UI on the wrong tab.",
        "Accepting the default folder when the task asked for a specific or newly created destination.",
        "Stopping after the compact popover opens without confirming save."
      ],
      "completenessScore": 36
    },
    {
      "id": "CHROME_Manage_Passwords_and_Autofill",
      "name": "Manage Passwords and Autofill",
      "description": "Open Chrome Password Manager, add or review saved credentials, and verify the requested password-manager state from the live UI.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Manage_Passwords_and_Autofill",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-manage-passwords-and-autofill.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "save"
      ],
      "overview": "",
      "applicability": [
        "Open the password-management surface from Chrome Settings.",
        "Add a password manually or review saved password entries.",
        "Confirm that a requested saved credential row or password-manager state is visible."
      ],
      "failureModes": [
        "Stopping on the `Autofill and passwords` settings page instead of opening Password Manager.",
        "Treating a sample saved-password row from the reference image as proof that the current target credential was saved.",
        "Clicking `Save` before the live dialog fields contain the intended values."
      ],
      "completenessScore": 36
    },
    {
      "id": "CHROME_Manage_Preferred_Languages_And_Interface_Language",
      "name": "Manage Preferred Languages And Interface Language",
      "description": "Use Chrome Languages settings to add, remove, reorder, or promote preferred languages and verify that the language list reflects the requested state.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Manage_Preferred_Languages_And_Interface_Language",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-manage-preferred-languages-and-interface-language.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "chrome"
      ],
      "overview": "The task is about Chrome preferred languages, translate-language lists, spell-check language lists, or the Chrome interface language when that option is exposed. Chrome Settings can be opened and the Languages page is reachable from the left sidebar. Success depends on a persistent language state, such as a new row appearing, a row moving, or a translate buc",
      "applicability": [
        "The task is about Chrome preferred languages, translate-language lists, spell-check language lists, or the Chrome interface language when that option is exposed.",
        "Chrome Settings can be opened and the Languages page is reachable from the left sidebar.",
        "Success depends on a persistent language state, such as a new row appearing, a row moving, or a translate bucket changing."
      ],
      "failureModes": [
        "Stopping after opening the dialog without committing the selected language.",
        "Verifying only the checked row inside the picker and not the persistent list after the dialog closes.",
        "Opening the overflow menu on the wrong language row because several similar rows are present."
      ],
      "completenessScore": 35
    },
    {
      "id": "CHROME_Manage_Privacy_Permissions_And_Content_Settings",
      "name": "Manage Privacy Permissions And Content Settings",
      "description": "Use Chrome Site settings and permission exception lists to change permission defaults or add site-specific exceptions for notifications, location, camera, microphone, and similar content settings.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Manage_Privacy_Permissions_And_Content_Settings",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-manage-privacy-permissions-and-content-settings.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "chrome"
      ],
      "overview": "Use this skill when Chrome needs a permission default changed or a site-specific allow or block exception added under `Settings > Privacy and security > Site settings`.",
      "applicability": [
        "Open a permission category such as Notifications, Location, Camera, or Microphone.",
        "Change that category's default behavior.",
        "Add a site-specific exception under the correct allow or block section."
      ],
      "failureModes": [
        "Opening the wrong permission category from Site settings.",
        "Changing a global default when the task asked for a site-specific exception, or the reverse.",
        "Adding the site under the wrong section, such as `Allowed` instead of `Not allowed`."
      ],
      "completenessScore": 35
    },
    {
      "id": "CHROME_Manage_Profile_Theme_Avatar_And_Home_Button",
      "name": "Manage Profile Theme Avatar And Home Button",
      "description": "Use Chrome profile customization and Appearance settings to change the profile name, avatar, theme, or home-button behavior, then verify the requested persistent state.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Manage_Profile_Theme_Avatar_And_Home_Button",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-manage-profile-theme-avatar-and-home-button.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "files"
      ],
      "overview": "",
      "applicability": [
        "profile name",
        "profile avatar",
        "profile theme color"
      ],
      "failureModes": [
        "Acting on a Settings page that looks similar but is not the correct surface for the requested change.",
        "Copying the example pink theme or example avatar when the task asks for a different choice.",
        "Treating the notification or address screenshots as part of the home-button procedure."
      ],
      "completenessScore": 37
    },
    {
      "id": "CHROME_Manage_Tabs_History_And_Tab_Groups",
      "name": "Manage Tabs History And Tab Groups",
      "description": "Use Chrome History and the tab strip to reopen recent pages, inspect current tab state, and verify that the requested tabs are visible.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Manage_Tabs_History_And_Tab_Groups",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-manage-tabs-history-and-tab-groups.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "chrome"
      ],
      "overview": "",
      "applicability": [],
      "failureModes": [
        "Treating the generic new-tab entry image as proof that History is already open.",
        "Using a History row title from the example instead of the page requested by the current task.",
        "Stopping after the row menu opens, without checking whether a new tab was actually created."
      ],
      "completenessScore": 35
    },
    {
      "id": "CHROME_Manage_Web_Store_Extension_Install_And_Permissions",
      "name": "Manage Web Store Extension Install And Permissions",
      "description": "Use chrome://extensions, Chrome Web Store pages, and extension settings surfaces to install an extension from the store or load an unpacked local extension, then verify that the extension or permission state matches the task.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Manage_Web_Store_Extension_Install_And_Permissions",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-manage-web-store-extension-install-and-permissions.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "web"
      ],
      "overview": "",
      "applicability": [
        "Reach the Chrome Web Store from `chrome://extensions`.",
        "Search for a requested extension and open the correct detail page.",
        "Install an extension with `Add to Chrome`."
      ],
      "failureModes": [
        "Mistaking the `chrome://extensions` page for the Chrome Web Store itself.",
        "Opening the Web Store even though the task clearly requires `Load unpacked` from a local folder.",
        "Selecting the wrong folder for `Load unpacked` instead of the folder that directly contains `manifest.json`."
      ],
      "completenessScore": 36
    },
    {
      "id": "CHROME_Navigate_Arbitrary_Website_and_Find_Target_Section",
      "name": "Navigate Arbitrary Website and Find Target Section",
      "description": "Use official-site results, site-specific navigation shortcuts, and in-site section or item links to reach the requested page on an arbitrary website and verify that the final section or destination page is visibly open.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Navigate_Arbitrary_Website_and_Find_Target_Section",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-navigate-arbitrary-website-and-find-target-section.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "web"
      ],
      "overview": "Use official-site results, site-specific navigation shortcuts, and in-site section or item links to reach the requested page on an arbitrary website and verify that the final section or destination page is visibly open.",
      "applicability": [
        "Browsing from a website home page to a target section",
        "Opening a target item or subsection through site navigation",
        "Verifying that the requested site section is visibly open"
      ],
      "failureModes": [
        "Stopping on a search engine shortcut instead of verifying the final in-site page.",
        "Choosing an official site correctly but then drifting into the wrong subsection.",
        "Treating a list or discovery page as the final destination when the requested item page is still unopened."
      ],
      "completenessScore": 33
    },
    {
      "id": "CHROME_Navigate_Google_News_and_Search_Topics",
      "name": "Navigate Google News and Search Topics",
      "description": "Open Google News from Chrome, browse or search for a topic, open an article, and verify the requested news surface or article state.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Navigate_Google_News_and_Search_Topics",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-navigate-google-news-and-search-topics.jpg",
      "imageCount": 11,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "search"
      ],
      "overview": "",
      "applicability": [
        "Start from a Google homepage or Chromium new tab and open Google News.",
        "Switch from the Google apps launcher into the News service.",
        "Search for a topic or browse Google News categories."
      ],
      "failureModes": [
        "Clicking the apps launcher from a non-Google page where the expected Google controls are absent.",
        "Confusing the pre-click launcher icon image with the launcher-open panel image.",
        "Treating the Google News home surface as proof that a requested topic search already ran."
      ],
      "completenessScore": 38
    },
    {
      "id": "CHROME_Navigate_to_Google_Services_via_Apps_Menu",
      "name": "Navigate to Google Services via Apps Menu",
      "description": "Use the Google Apps launcher in Chrome to open a requested Google service and verify that the destination page is visibly loaded.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Navigate_to_Google_Services_via_Apps_Menu",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-navigate-to-google-services-via-apps-menu.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "chrome"
      ],
      "overview": "",
      "applicability": [
        "Chrome is already open on a surface where the Google Apps launcher is available.",
        "The task needs navigation through the 3x3 Google Apps grid rather than direct URL entry.",
        "Completion depends on the requested Google service page becoming visibly open."
      ],
      "failureModes": [
        "The current page does not expose the Google Apps launcher.",
        "The apps panel opens, but the requested service tile is not visible without scrolling.",
        "Selecting the tile opens a sign-in or access gate instead of the service home page."
      ],
      "completenessScore": 35
    },
    {
      "id": "CHROME_Open_Google_Maps_And_Inspect_Place_Details",
      "name": "Open Google Maps and Inspect Place Details",
      "description": "Open Google Maps in Chrome, search for a requested place, and confirm that the place detail panel is open.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Open_Google_Maps_And_Inspect_Place_Details",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-open-google-maps-and-inspect-place-details.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "search"
      ],
      "overview": "",
      "applicability": [
        "Search for a place by name in Google Maps.",
        "Open the place detail panel, review surface, or place profile from search.",
        "Confirm that the requested place has loaded before taking follow-up actions such as reading reviews or copying a link."
      ],
      "failureModes": [
        "Typing the place name but never selecting a suggestion.",
        "Selecting a suggestion that matches only part of the requested place name.",
        "Stopping on the raw map view before the place-detail panel loads."
      ],
      "completenessScore": 34
    },
    {
      "id": "CHROME_Perform_Reverse_Image_Search_Or_Image_Download",
      "name": "Perform Reverse Image Search Or Image Download",
      "description": "Use Google or Google Lens in Chrome to start image-based search, upload an image, inspect visual matches, and verify that the results surface or requested source page is open.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Perform_Reverse_Image_Search_Or_Image_Download",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-perform-reverse-image-search-or-image-download.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "search",
        "images"
      ],
      "overview": "Use this skill when the task in Chrome is to:",
      "applicability": [
        "start reverse image search from a Google or Google Lens surface",
        "upload a local image or paste an image link into Lens",
        "inspect visual matches, exact matches, products, or similar result cards"
      ],
      "failureModes": [
        "The current page is a generic tab or homepage with no usable image-search trigger.",
        "The Lens upload panel is open, but the image has not been submitted yet.",
        "Chrome is on a Lens upload URL, but the results surface has not rendered; this is only a transition state."
      ],
      "completenessScore": 35
    },
    {
      "id": "CHROME_Save_Or_Print_Page_To_PDF_With_Exact_Options",
      "name": "Save Or Print Page To PDF With Exact Options",
      "description": "Use Chrome print or a site-native PDF export flow to save the current page as PDF, apply requested print options, and verify the final save surface before completion.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Save_Or_Print_Page_To_PDF_With_Exact_Options",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-save-or-print-page-to-pdf-with-exact-options.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "export",
        "save"
      ],
      "overview": "Use this skill when the current goal is to produce a PDF from the page already open in Chrome and the task may require exact print or save settings such as destination, margins, layout, pages, or filename and location.",
      "applicability": [
        "Save the current page as a PDF.",
        "Open Chrome print preview and switch output to PDF.",
        "Use a site-native `Download as PDF` action when the page provides one."
      ],
      "failureModes": [
        "Using the site-export card on a page that does not actually offer native PDF export.",
        "Leaving print destination on a physical printer instead of PDF.",
        "Clicking `Save` in print preview before checking requested margins or other print settings."
      ],
      "completenessScore": 35
    },
    {
      "id": "CHROME_Scroll_Webpage_to_Locate_Section",
      "name": "Scroll Webpage to Locate Section",
      "description": "Use page scrolling to move through a webpage until the requested section, heading, or content block is visible.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Scroll_Webpage_to_Locate_Section",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-scroll-webpage-to-locate-section.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "web"
      ],
      "overview": "Use page scrolling to move through a webpage until the requested section, heading, or content block is visible.",
      "applicability": [
        "The target content is lower on the current page",
        "The task depends on reaching a particular section by scrolling",
        "Verifying that the requested section is visible after scrolling"
      ],
      "failureModes": [
        "Scrolling past the target section without checking whether the heading is now visible.",
        "Mistaking any content change for the requested section instead of verifying the target heading or answer block.",
        "Continuing to scroll after the target is partially visible instead of making a controlled positioning adjustment."
      ],
      "completenessScore": 36
    },
    {
      "id": "CHROME_Search_And_Sort_Flight_Results",
      "name": "Search And Sort Flight Results",
      "description": "Use Google Flights search and results surfaces to set route, trip type, passenger count, dates, and sorting on Google Flights. Keep this skill as the default for plain Google Flights tasks, and switch to the broader travel-booking skill only after a hotel, car-rental, or non-Google booking surface is clearly open.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Search_And_Sort_Flight_Results",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-search-and-sort-flight-results.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "search"
      ],
      "overview": "Use Google Flights search and results surfaces to set route, trip type, passenger count, dates, and sorting on Google Flights. Keep this skill as the default for plain Google Flights tasks, and switch to the broader travel-booking skill only after a hotel, car-rental, or non-Google booking surface is clearly open.",
      "applicability": [
        "Searching flights in Google Flights",
        "Setting one-way or round-trip parameters, passenger count, and dates",
        "Opening or verifying the Google Flights results list"
      ],
      "failureModes": [
        "Editing Google Flights fields but never reaching a stable results list.",
        "Leaving a valid Google Flights results page to chase an external airline page that the verification does not require.",
        "Mixing this skill with hotel or car-rental filter patterns that belong to the broader travel-booking skill."
      ],
      "completenessScore": 36
    },
    {
      "id": "CHROME_Search_Web_And_Open_Target_Result",
      "name": "Search Web and Open Target Result",
      "description": "Use Google search in Chrome to submit a query, choose the intended result, and verify that the browser has opened the requested destination page instead of a similarly named result. This skill stops at the landing page and does not cover deep in-site browsing or long-page extraction.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Search_Web_And_Open_Target_Result",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-search-web-and-open-target-result.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "search",
        "web"
      ],
      "overview": "Use Google search in Chrome to submit a query, choose the intended result, and verify that the browser has opened the requested destination page instead of a similarly named result. This skill stops at the landing page and does not cover deep in-site browsing or long-page extraction.",
      "applicability": [
        "Searching the web from Google or the Chrome new-tab surface",
        "Opening a specific result after the query runs",
        "Verifying that the target destination page is visibly open"
      ],
      "failureModes": [
        "Opening a similarly named result instead of the requested destination.",
        "Treating a result snippet or knowledge card as completion before the destination page actually opens.",
        "Using the skill for in-site section hunting after the destination has already loaded."
      ],
      "completenessScore": 33
    },
    {
      "id": "CHROME_Select_Product_Offer_Or_Result_And_Complete_Cart_Or_Wishlist_Action",
      "name": "Select Product Offer Or Result And Complete Cart Or Wishlist Action",
      "description": "Choose a qualifying commerce result or offer, trigger the cart or save control, and finish only after a visible success state appears.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Select_Product_Offer_Or_Result_And_Complete_Cart_Or_Wishlist_Action",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-select-product-offer-or-result-and-complete-cart-or-wishlist-action.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "save"
      ],
      "overview": "Use this skill to move from a qualifying commerce result or product offer to a completed add-to-cart or save action in Chrome. The skill is complete only when the site shows a visible confirmation that the item was added or saved.",
      "applicability": [
        "A commerce results page, product page, or offer card is already open in Chrome.",
        "The item constraints are already known from the task or previous steps.",
        "The next objective is to choose the correct result and trigger Add to Cart, Save, Add to List, or an equivalent merchant-specific control."
      ],
      "failureModes": [
        "Acting on a result that no longer matches the requested constraints.",
        "Clicking Buy Now, Proceed to checkout, or another adjacent purchase control instead of the requested add/save control.",
        "Leaving the page before a durable success signal appears."
      ],
      "completenessScore": 33
    },
    {
      "id": "CHROME_Select_Transportation_Mode",
      "name": "Select Transportation Mode",
      "description": "Switch the transportation mode on a Google Maps directions page and verify that the requested mode is now active.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Select_Transportation_Mode",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-select-transportation-mode.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "chrome"
      ],
      "overview": "",
      "applicability": [
        "the origin and destination are already entered",
        "the current route mode does not match the requested one",
        "completion depends on proving that the new mode is selected"
      ],
      "failureModes": [
        "Clicking the wrong icon because similar symbols were scanned too quickly.",
        "Acting before the directions panel fully loads, so the click does not change the route.",
        "Mistaking the presence of the mode row for successful completion."
      ],
      "completenessScore": 35
    },
    {
      "id": "CHROME_Sort_News_Results_by_Time",
      "name": "Sort News Results by Time",
      "description": "Use a news or site-search results page to switch the list into newest or time-based order, then open the requested result and verify that the article page loaded.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Sort_News_Results_by_Time",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-sort-news-results-by-time.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "search"
      ],
      "overview": "Use this skill when Chrome is already showing a news or site-search results list and the task asks you to:",
      "applicability": [
        "change the list to newest, latest, or another time-based order",
        "verify that the list is actually sorted by time rather than relevance",
        "open a requested result after the sort is applied, such as the first, second, or another ranked article"
      ],
      "failureModes": [
        "Clicking a sort pill but continuing immediately before the page refresh completes.",
        "Mistaking a relevance-selected page for a successful newest sort.",
        "Counting article rank from the pre-sort order instead of the refreshed list."
      ],
      "completenessScore": 35
    },
    {
      "id": "CHROME_Travel_Results_And_Booking_Filters",
      "name": "Travel Results And Booking Filters",
      "description": "Use travel-booking result surfaces to filter or sort hotel, car-rental, and vendor booking pages, adjust travel constraints that are already on those surfaces, and recover from browser-level booking failures. Do not use this as the first-choice skill for plain Google Flights tasks.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Travel_Results_And_Booking_Filters",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-travel-results-and-booking-filters.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "chrome"
      ],
      "overview": "Use travel-booking result surfaces to filter or sort hotel, car-rental, and vendor booking pages, adjust travel constraints that are already on those surfaces, and recover from browser-level booking failures. Do not use this as the first-choice skill for plain Google Flights tasks.",
      "applicability": [
        "Sorting or filtering hotel, car-rental, or non-Google vendor booking result pages",
        "Changing dates, traveler settings, or price/capacity constraints on those result pages",
        "Recovering from unresponsive travel booking pages before retrying the same task"
      ],
      "failureModes": [
        "Applying this skill too early on plain Google Flights tasks, which pulls the agent away from the simpler flight-specific workflow.",
        "Using shopping-style filter assumptions on hotel or booking results pages.",
        "Changing travel filters or dates without checking that the selected constraint persisted on the live results surface."
      ],
      "completenessScore": 33
    },
    {
      "id": "CHROME_Use_Google_Play_Store_Content_Actions",
      "name": "Use Google Play Store Content Actions",
      "description": "Reach Google Play in Chrome, switch sections or filters, open the requested listing, and verify the requested Play detail state.",
      "domain": "chrome",
      "domainLabel": "Chrome",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/chrome/CHROME_Use_Google_Play_Store_Content_Actions",
      "thumbnail": "assets/skill-library/thumbnails/chrome--chrome-use-google-play-store-content-actions.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "chrome"
      ],
      "overview": "",
      "applicability": [
        "open Google Play from a Google start page",
        "switch Play sections or broad filters before choosing content",
        "open a specific app or game listing"
      ],
      "failureModes": [
        "Stopping at the Google start page because the launcher tile was visible but never used.",
        "Treating the broad category page as if a specific listing were already selected.",
        "Mistaking the filtered results grid for the final detail page."
      ],
      "completenessScore": 35
    },
    {
      "id": "GIMP_GIMP_Adjust_Brightness_Contrast_And_Tonal_Strength",
      "name": "GIMP_GIMP_Adjust_Brightness_Contrast_And_Tonal_Strength",
      "description": "Adjust brightness, contrast, exposure, black level, and related tonal-strength controls in GIMP without mixing them into hue, saturation, or transparency workflows.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Adjust_Brightness_Contrast_And_Tonal_Strength",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-adjust-brightness-contrast-and-tonal-strength.jpg",
      "imageCount": 11,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "gimp"
      ],
      "overview": "Use this skill for text-first GIMP tasks that ask for tonal-strength changes: brightness, contrast, exposure, black level, or a mode setting that is secondary to one of those tonal dialogs. The target image should already be open, and the requested numeric values or mode choices should be known from the task.",
      "applicability": [
        "The task explicitly names Brightness-Contrast, brightness, contrast, Exposure, black level, or a similar tonal control.",
        "The requested outcome is a brighter, darker, flatter, stronger, or exposure-adjusted image without changing hue, saturation, alpha, or file organization.",
        "A blend or mode option is mentioned as part of the tonal adjustment, not as a separate layer-management task."
      ],
      "failureModes": [
        "Opening Exposure when the task asks for Brightness-Contrast, or opening Brightness-Contrast when the task asks for Exposure or Black level.",
        "Copying example values from the image cards instead of entering the current task's requested values.",
        "Forgetting a requested Mode option after entering Brightness and Contrast."
      ],
      "completenessScore": 38
    },
    {
      "id": "GIMP_GIMP_Adjust_Hue_Saturation_and_Color_Tone",
      "name": "GIMP_GIMP_Adjust_Hue_Saturation_and_Color_Tone",
      "description": "Adjust hue, saturation, lightness, and related color-tone controls in GIMP without drifting into unrelated exposure, threshold, or transparency-only workflows.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Adjust_Hue_Saturation_and_Color_Tone",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-adjust-hue-saturation-and-color-tone.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "gimp"
      ],
      "overview": "Use this skill when the goal is to change an image's hue, saturation, lightness, color tone, or related blend presentation in GIMP. Keep the workflow centered on the Hue-Saturation adjustment and only use mode or opacity controls when the current task explicitly asks for them as part of the color-tone change.",
      "applicability": [
        "The task names hue, saturation, lightness, or color tone.",
        "The task asks for a color shift or more/less vivid color rather than exposure, threshold, transparency, or layer visibility.",
        "The task combines Hue-Saturation values with blend mode or opacity settings for the same color adjustment."
      ],
      "failureModes": [
        "Using exposure, brightness, or levels controls when the request specifically names hue or saturation.",
        "Treating a transparency-only opacity request as a Hue-Saturation task.",
        "Applying blend mode or opacity before entering the Hue-Saturation values."
      ],
      "completenessScore": 36
    },
    {
      "id": "GIMP_GIMP_Apply_Blur_GEGL_and_Artistic_Filters",
      "name": "GIMP_GIMP_Apply_Blur_GEGL_and_Artistic_Filters",
      "description": "Apply a named blur, GEGL, or artistic filter in GIMP and set the requested effect and blending controls before confirming.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Apply_Blur_GEGL_and_Artistic_Filters",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-apply-blur-gegl-and-artistic-filters.jpg",
      "imageCount": 12,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "gimp"
      ],
      "overview": "",
      "applicability": [
        "The task names a blur, artistic filter, or GEGL operation in GIMP.",
        "The task asks for effect parameters such as radius, threshold, edge preservation, mask radius, mode, or opacity inside the filter workflow.",
        "The target image is already open and the requested filter values are known from the task."
      ],
      "failureModes": [
        "Opening a similarly named filter instead of the requested one.",
        "Using the generic GEGL Operation window when the task actually expects a classic named filter dialog, or the reverse.",
        "Confirming the filter after setting only part of the requested numeric values."
      ],
      "completenessScore": 39
    },
    {
      "id": "GIMP_GIMP_Capture_Screenshots_and_Sample_Colors",
      "name": "GIMP_GIMP_Capture_Screenshots_and_Sample_Colors",
      "description": "Capture a screenshot as a new image in GIMP and sample a visible color into the foreground color slot when the task calls for it.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Capture_Screenshots_and_Sample_Colors",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-capture-screenshots-and-sample-colors.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "images"
      ],
      "overview": "Use this skill when a task stays inside GIMP and needs one or both of these outcomes:",
      "applicability": [
        "GIMP is already running.",
        "The task explicitly wants GIMP to perform the screenshot capture, not an external screenshot utility.",
        "The screen or image region to capture is already visible or will be visible when the capture runs."
      ],
      "failureModes": [
        "Confirming the wrong screenshot scope because the dialog settings were not checked before capture.",
        "Assuming capture succeeded while the Screenshot dialog is still open or before a new image appears.",
        "Sampling from the wrong nearby pixel and trusting the result without checking the foreground color swatch or picker readout."
      ],
      "completenessScore": 34
    },
    {
      "id": "GIMP_GIMP_Configure_Shortcuts_and_Interface_Behavior",
      "name": "GIMP_GIMP_Configure_Shortcuts_and_Interface_Behavior",
      "description": "Change GIMP keyboard shortcuts and nearby interface-behavior preferences such as undo levels, menu mode, and editing-on-invisible-layer behavior without mixing them with theme or color-management tasks.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Configure_Shortcuts_and_Interface_Behavior",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-configure-shortcuts-and-interface-behavior.jpg",
      "imageCount": 12,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "Use this family when the task is about:",
      "applicability": [
        "keyboard shortcut lookup or assignment;",
        "minimum undo levels or closely related undo-history counts;",
        "toolbox submenu behavior such as show-on-click vs show-on-hover;"
      ],
      "failureModes": [],
      "completenessScore": 39
    },
    {
      "id": "GIMP_GIMP_Configure_Themes_Preferences_and_Color_Management",
      "name": "GIMP_GIMP_Configure_Themes_Preferences_and_Color_Management",
      "description": "Change visible GIMP appearance values such as theme or icon presentation without drifting into image precision or profile workflows.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Configure_Themes_Preferences_and_Color_Management",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-configure-themes-preferences-and-color-management.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings",
        "files",
        "slides",
        "images"
      ],
      "overview": "Use this family for appearance-facing preference work:",
      "applicability": [
        "switch the theme to a value that is visibly available in the live environment;",
        "change adjacent appearance controls in the same Preferences surface;",
        "verify that the requested theme selection actually took effect."
      ],
      "failureModes": [],
      "completenessScore": 36
    },
    {
      "id": "GIMP_GIMP_Convert_Image_Modes_Palettes_and_Precision",
      "name": "GIMP_GIMP_Convert_Image_Modes_Palettes_and_Precision",
      "description": "Convert images to indexed or palette-based modes and set palette-size or dithering choices without mixing in precision or profile work.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Convert_Image_Modes_Palettes_and_Precision",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-convert-image-modes-palettes-and-precision.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "files",
        "images"
      ],
      "overview": "Use this family for indexed and palette conversion only:",
      "applicability": [
        "switch to Indexed mode;",
        "set maximum colors or palette choice;",
        "enable or adjust dithering behavior."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "GIMP_GIMP_Create_Canvases_and_Draw_Graphic_Elements",
      "name": "GIMP_GIMP_Create_Canvases_and_Draw_Graphic_Elements",
      "description": "Create a blank GIMP canvas, define simple geometric or freeform regions, and fill them with the requested color, gradient, or pattern.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Create_Canvases_and_Draw_Graphic_Elements",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-create-canvases-and-draw-graphic-elements.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "gimp"
      ],
      "overview": "Use this skill when the task is to start a new image in GIMP, define one or more simple shapes or selected regions, and apply a fill treatment to those regions.",
      "applicability": [
        "Start from a blank canvas instead of editing an existing photo or layered design.",
        "Draw ellipses, rectangles, or freeform regions before filling them.",
        "Apply a solid color, gradient, or pattern once the target region exists."
      ],
      "failureModes": [
        "Confirming the new canvas with example settings instead of the task's requested size or background.",
        "Filling the wrong region because the intended selection was not active.",
        "Drawing the next shape in a way that overwrites or deselects the earlier filled region."
      ],
      "completenessScore": 33
    },
    {
      "id": "GIMP_GIMP_Create_Transparent_Backgrounds_and_Threshold_Effects",
      "name": "GIMP_GIMP_Create_Transparent_Backgrounds_and_Threshold_Effects",
      "description": "Create transparent backgrounds with Color to Alpha or apply channel-specific threshold effects with explicit result checks.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Create_Transparent_Backgrounds_and_Threshold_Effects",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-create-transparent-backgrounds-and-threshold-effects.jpg",
      "imageCount": 12,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "gimp"
      ],
      "overview": "Use this skill when the task is about either:",
      "applicability": [
        "removing or fading a background color through `Color to Alpha`",
        "applying a `Threshold` effect with a named channel, cutoff, mode, or opacity",
        "removing or fading a background color through `Color to Alpha`"
      ],
      "failureModes": [
        "Opening `Threshold` when the task is actually asking for transparency from a selected color.",
        "Opening `Color to Alpha` when the task is asking for a channel-based threshold effect.",
        "Copying example values from an image card instead of using the values named in the current task."
      ],
      "completenessScore": 39
    },
    {
      "id": "GIMP_GIMP_Create_and_Style_Text_Layers",
      "name": "GIMP_GIMP_Create_and_Style_Text_Layers",
      "description": "Create a text region in GIMP, enter requested text, and style the active text layer with the requested appearance.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Create_and_Style_Text_Layers",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-create-and-style-text-layers.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "text"
      ],
      "overview": "Use this skill when text must be added to an image or canvas with the GIMP Text tool. Use it when the task includes entering text and adjusting visible text properties such as size, color, bold, italic, or similar font treatment. Keep this skill focused on text-layer creation and styling. Use a different skill for movement-heavy layer repositioning, masking,",
      "applicability": [
        "Use this skill when text must be added to an image or canvas with the GIMP Text tool.",
        "Use it when the task includes entering text and adjusting visible text properties such as size, color, bold, italic, or similar font treatment.",
        "Keep this skill focused on text-layer creation and styling. Use a different skill for movement-heavy layer repositioning, masking, or unrelated image edits."
      ],
      "failureModes": [
        "Typing before a text region exists.",
        "Styling the background layer instead of the text layer.",
        "Treating example text, placement, or color as defaults for unrelated tasks."
      ],
      "completenessScore": 33
    },
    {
      "id": "GIMP_GIMP_Erase_Retouch_and_Reshape_Local_Content",
      "name": "GIMP_GIMP_Erase_Retouch_and_Reshape_Local_Content",
      "description": "Erase a local distraction, retouch a small region, or reshape one visible subject without applying a whole-image transform.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Erase_Retouch_and_Reshape_Local_Content",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-erase-retouch-and-reshape-local-content.jpg",
      "imageCount": 5,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "images"
      ],
      "overview": "Modify one visible local subject by erasing an unwanted distraction, retouching a small region, or reshaping the subject with a local transform workflow.",
      "applicability": [
        "Use it when the task names one local object, blemish, or subject that should change while most of the image stays as-is.",
        "Use it when Unified Transform should reshape one visible subject rather than rotate, crop, or resize the whole image.",
        "Use it when the agent can already see the target region on the current GIMP canvas and does not need a document-wide workflow."
      ],
      "failureModes": [
        "Transforming the whole image when the task only asked for one local reshape.",
        "Editing the wrong nearby object because the named target was not identified first.",
        "Stopping after a tool action without checking whether the local result actually looks corrected."
      ],
      "completenessScore": 32
    },
    {
      "id": "GIMP_GIMP_Export_RAW_Or_Source_Images_To_Target_Raster_Format",
      "name": "GIMP_GIMP_Export_RAW_Or_Source_Images_To_Target_Raster_Format",
      "description": "Export the active or imported image from GIMP to a raster delivery format such as PNG or JPG.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Export_RAW_Or_Source_Images_To_Target_Raster_Format",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-export-raw-or-source-images-to-target-raster-format.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "export",
        "images"
      ],
      "overview": "Use this family when the target output is a raster format:",
      "applicability": [
        "PNG, JPG, JPEG, GIF, or similar bitmap output;",
        "export flows that may start from a source image import and end in a raster-format options dialog.",
        "PNG, JPG, JPEG, GIF, or similar bitmap output;"
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "GIMP_GIMP_Handle_Unsupported_Or_NonRaster_Exports",
      "name": "GIMP_GIMP_Handle_Unsupported_Or_NonRaster_Exports",
      "description": "Route special or non-raster export requests in GIMP and stop cleanly when a raster-only flow would be misleading.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Handle_Unsupported_Or_NonRaster_Exports",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-handle-unsupported-or-nonraster-exports.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "export"
      ],
      "overview": "Use this family for unusual export targets:",
      "applicability": [
        "PostScript or other special format dialogs;",
        "SVG, PDF, or other non-raster requests that need a real support check;",
        "export flows that require a dedicated boundary decision instead of a routine raster dialog."
      ],
      "failureModes": [],
      "completenessScore": 31
    },
    {
      "id": "GIMP_GIMP_Manage_Dockable_Dialogs_and_Workspace_Layout",
      "name": "GIMP_GIMP_Manage_Dockable_Dialogs_and_Workspace_Layout",
      "description": "Restore, move, regroup, or detach dockable dialogs and tabs in the GIMP workspace.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Manage_Dockable_Dialogs_and_Workspace_Layout",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-manage-dockable-dialogs-and-workspace-layout.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "gimp"
      ],
      "overview": "Use this skill for panel and dock layout changes:",
      "applicability": [
        "open or restore dockable dialogs;",
        "move tabs between docks;",
        "detach or regroup panels."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "GIMP_GIMP_Manage_Image_Precision_Gamma_and_Color_Profiles",
      "name": "GIMP_GIMP_Manage_Image_Precision_Gamma_and_Color_Profiles",
      "description": "Configure GIMP image precision, gamma, and color-profile settings, including advanced color-management controls.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Manage_Image_Precision_Gamma_and_Color_Profiles",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-manage-image-precision-gamma-and-color-profiles.jpg",
      "imageCount": 7,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings",
        "files",
        "images"
      ],
      "overview": "Use this family when the task explicitly names:",
      "applicability": [
        "precision or bit depth;",
        "gamma or sRGB handling;",
        "color profiles, rendering intent, or black-point compensation;"
      ],
      "failureModes": [],
      "completenessScore": 32
    },
    {
      "id": "GIMP_GIMP_Manage_Layers_Masks_and_Blend_States",
      "name": "GIMP_GIMP_Manage_Layers_Masks_and_Blend_States",
      "description": "Create, rename, duplicate, mask, and tune layers in GIMP while keeping the correct layer active.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Manage_Layers_Masks_and_Blend_States",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-manage-layers-masks-and-blend-states.jpg",
      "imageCount": 13,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "gimp"
      ],
      "overview": "Use this family when the layer stack is the main work surface:",
      "applicability": [
        "create a new layer with a requested name, label, mode, or opacity;",
        "rename or verify a layer row after creation;",
        "duplicate a layer, add a mask, or adjust blend mode and opacity."
      ],
      "failureModes": [],
      "completenessScore": 40
    },
    {
      "id": "GIMP_GIMP_Manage_Open_Images_Recent_History_and_Close_Extras",
      "name": "GIMP_GIMP_Manage_Open_Images_Recent_History_and_Close_Extras",
      "description": "Manage multiple open GIMP images, use recent-history surfaces, and close extras while keeping the requested document active.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Manage_Open_Images_Recent_History_and_Close_Extras",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-manage-open-images-recent-history-and-close-extras.jpg",
      "imageCount": 7,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "images",
        "documents"
      ],
      "overview": "Use this family when the task is about the session rather than the edit itself:",
      "applicability": [
        "open or reopen several images;",
        "count open images or inspect which one is active;",
        "leave only one requested image open and close the rest."
      ],
      "failureModes": [],
      "completenessScore": 32
    },
    {
      "id": "GIMP_GIMP_Move_Text_Or_Object_Layers_Without_Selecting_Background_Content",
      "name": "GIMP_GIMP_Move_Text_Or_Object_Layers_Without_Selecting_Background_Content",
      "description": "Move a text, duplicate, or isolated object layer by first making that layer active, then dragging only that active layer with the Move tool.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Move_Text_Or_Object_Layers_Without_Selecting_Background_Content",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-move-text-or-object-layers-without-selecting-background-content.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "text"
      ],
      "overview": "Use this skill when the task is to reposition text or object content without shifting the base image. It fits duplicate-layer moves, isolated object moves, and text-layer moves where the wrong active layer would move the background or another sibling layer instead.",
      "applicability": [],
      "failureModes": [
        "Dragging before the correct layer is active, which moves the wrong layer or the background.",
        "Using a transform tool other than Move, which changes size or orientation instead of position.",
        "Verifying against the example screenshot's exact placement instead of the destination requested by the current task."
      ],
      "completenessScore": 34
    },
    {
      "id": "GIMP_GIMP_Open_GIMP_Help_and_Tutorials",
      "name": "GIMP_GIMP_Open_GIMP_Help_and_Tutorials",
      "description": "Open official GIMP help or tutorial content for a named topic instead of performing an edit.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Open_GIMP_Help_and_Tutorials",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-open-gimp-help-and-tutorials.jpg",
      "imageCount": 4,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "gimp"
      ],
      "overview": "Open the official GIMP documentation or tutorial page for a named topic. Use this skill when the requested outcome is learning material, not an edited image.",
      "applicability": [
        "The user asks for help, documentation, an introduction, or a tutorial about a GIMP concept.",
        "The task should end on a readable documentation page for the requested topic.",
        "Opening a help surface or browser page is allowed."
      ],
      "failureModes": [
        "Treating a learning request as an image-editing request.",
        "Stopping after the docs site opens without opening the requested topic page.",
        "Mistaking an index, search result, or unrelated web page for the final tutorial page."
      ],
      "completenessScore": 31
    },
    {
      "id": "GIMP_GIMP_Open_Inspect_and_Manage_Images",
      "name": "GIMP_GIMP_Open_Inspect_and_Manage_Images",
      "description": "Open image files in GIMP and inspect active-image properties without letting this entry skill absorb later editing work.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Open_Inspect_and_Manage_Images",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-open-inspect-and-manage-images.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "files",
        "images"
      ],
      "overview": "Use this skill for document entry and inspection:",
      "applicability": [
        "open one or more named image files;",
        "verify that the intended image actually loaded;",
        "read image properties such as size, resolution, or color space."
      ],
      "failureModes": [
        "Letting the open/import family keep control after the file is already loaded.",
        "Reading properties from the wrong active image when multiple documents are open.",
        "Treating example filenames or property values in screenshots as reusable task inputs."
      ],
      "completenessScore": 34
    },
    {
      "id": "GIMP_GIMP_Print_Images_with_Page_Setup",
      "name": "GIMP_GIMP_Print_Images_with_Page_Setup",
      "description": "Use GIMP's Print dialog and Page Setup controls to configure paper-oriented output such as paper size, orientation, scaling, copies, and preview before printing.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Print_Images_with_Page_Setup",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-print-images-with-page-setup.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings",
        "images"
      ],
      "overview": "Use this skill when the task is about printing the current image from GIMP and the important outcome is a correct paper-oriented setup, not file export.",
      "applicability": [
        "The user asks to print the current image from GIMP.",
        "The task mentions paper size, orientation, copies, scaling, page setup, or print preview.",
        "The correct end state is a ready-to-confirm Print dialog with the requested settings visible."
      ],
      "failureModes": [
        "Opening an export flow instead of GIMP's Print dialog.",
        "Stopping on the `General` tab when the task requires paper size or orientation changes from `Page Setup`.",
        "Accepting the example values shown in a screenshot instead of checking the live values requested by the task."
      ],
      "completenessScore": 35
    },
    {
      "id": "GIMP_GIMP_Save_Projects_and_Export_Edited_Images",
      "name": "GIMP_GIMP_Save_Projects_and_Export_Edited_Images",
      "description": "Save editable GIMP workfiles and preserve layered project state before handing off to export when needed.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Save_Projects_and_Export_Edited_Images",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-save-projects-and-export-edited-images.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "tables",
        "export",
        "save",
        "files"
      ],
      "overview": "Use this family for editable saves:",
      "applicability": [
        "save the current project as XCF or another editable workfile;",
        "preserve layers and project state;",
        "handle save routing without collapsing into a raster export workflow."
      ],
      "failureModes": [],
      "completenessScore": 37
    },
    {
      "id": "GIMP_GIMP_Scale_Selected_Content_and_Reposition_Layers",
      "name": "GIMP_GIMP_Scale_Selected_Content_and_Reposition_Layers",
      "description": "Scale one selected object or layer in GIMP, then move the resized result to a new canvas position without resizing the whole image.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Scale_Selected_Content_and_Reposition_Layers",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-scale-selected-content-and-reposition-layers.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "images"
      ],
      "overview": "",
      "applicability": [],
      "failureModes": [
        "Using `Image -> Scale Image` or another document-level resize path instead of scaling the selected target.",
        "Editing the wrong layer, which resizes background content or another object.",
        "Confirming the wrong dimensions because example numbers from the screenshot were copied instead of the task's requested values."
      ],
      "completenessScore": 34
    },
    {
      "id": "GIMP_GIMP_Scale_Whole_Images_and_Set_Resolution",
      "name": "GIMP_GIMP_Scale_Whole_Images_and_Set_Resolution",
      "description": "Scale the whole image or update print-resolution metadata while keeping that workflow separate from layer transforms.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Scale_Whole_Images_and_Set_Resolution",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-scale-whole-images-and-set-resolution.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "images"
      ],
      "overview": "Use this family when the task is about the whole image:",
      "applicability": [
        "set image width and height for the entire document;",
        "change X/Y resolution or interpolation in the Scale Image dialog;",
        "explicitly distinguish pixel-size changes from resolution-metadata-only changes."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "GIMP_GIMP_Select_Isolate_and_Fill_Image_Regions",
      "name": "GIMP_GIMP_Select_Isolate_and_Fill_Image_Regions",
      "description": "Isolate a local region in an open image, then fill or recolor only that selection.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Select_Isolate_and_Fill_Image_Regions",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-select-isolate-and-fill-image-regions.jpg",
      "imageCount": 4,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "images"
      ],
      "overview": "Use this skill when an image is already open in GIMP and the requested edit must stay inside one local region such as clothing, a background area, or another object boundary.",
      "applicability": [
        "The task asks you to isolate a local region before changing its color or applying a fill.",
        "The requested change should affect part of the image, not the full canvas.",
        "The workflow depends on choosing or using a selection tool such as Free Select or Scissors Select before the recolor."
      ],
      "failureModes": [
        "Choosing a paint or draw tool instead of a selection tool, which causes the edit to spill outside the target region.",
        "Applying the fill before the selection is complete.",
        "Verifying only that some color changed, without checking whether unrelated parts of the image also changed."
      ],
      "completenessScore": 31
    },
    {
      "id": "GIMP_GIMP_Transform_Image_Geometry_and_Canvas",
      "name": "GIMP_GIMP_Transform_Image_Geometry_and_Canvas",
      "description": "Apply a geometry transform in GIMP, then change canvas bounds when the task also requires a canvas resize.",
      "domain": "gimp",
      "domainLabel": "GIMP",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/gimp/GIMP_GIMP_Transform_Image_Geometry_and_Canvas",
      "thumbnail": "assets/skill-library/thumbnails/gimp--gimp-gimp-transform-image-geometry-and-canvas.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "images"
      ],
      "overview": "Apply the requested geometric transform first, then adjust the canvas size if the task requires a new document boundary after the transform.",
      "applicability": [
        "When the user requests rotation, shear, flip, or perspective changes to the image geometry.",
        "When the task also asks for a new canvas size after the transform.",
        "When the geometry change should preserve the transformed image inside a resized canvas."
      ],
      "failureModes": [
        "Resizing the canvas before the transform is applied, which makes later geometry alignment harder.",
        "Changing geometry on the wrong target because a tool state carried over from a previous edit.",
        "Confusing canvas size with image size and unintentionally resampling the image instead of just changing document bounds."
      ],
      "completenessScore": 35
    },
    {
      "id": "LIBREOFFICECALC_Apply_Revenue_Cost_Discount_Profit_Formulas",
      "name": "Apply Revenue Cost Discount Profit Formulas",
      "description": "Build business-metric columns such as revenue, cost, discount, or profit from visible Calc source columns, then verify the target output column before moving on.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Apply_Revenue_Cost_Discount_Profit_Formulas",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-apply-revenue-cost-discount-profit-formulas.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "formulas"
      ],
      "overview": "Use when the task explicitly names revenue, cost, profit, discount, unit price, gross profit, or another business-style derived metric. Use when the main difficulty is choosing the right source columns and producing a filled output column, not merely typing a generic one-off formula. This is the preferred main path for profit and revenue cases that later bra",
      "applicability": [
        "Use when the task explicitly names revenue, cost, profit, discount, unit price, gross profit, or another business-style derived metric.",
        "Use when the main difficulty is choosing the right source columns and producing a filled output column, not merely typing a generic one-off formula.",
        "This is the preferred main path for profit and revenue cases that later branch into reporting, pivot, or chart steps."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICECALC_Build_Merged_Report_Headers_and_Multi_Row_Layouts",
      "name": "Build Merged Report Headers and Multi Row Layouts",
      "description": "Merge header ranges, handle hidden-cell warnings deliberately, and verify that multi-row report headers still span the intended block after the merge.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Build_Merged_Report_Headers_and_Multi_Row_Layouts",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-build-merged-report-headers-and-multi-row-layouts.jpg",
      "imageCount": 7,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "libreoffice calc"
      ],
      "overview": "Use when the task asks to merge and center report headers, merge named cell spans, or handle hidden-cell content while merging. Use when the merged result is part of a broader report layout that must remain visually intact afterward.",
      "applicability": [
        "Use when the task asks to merge and center report headers, merge named cell spans, or handle hidden-cell content while merging.",
        "Use when the merged result is part of a broader report layout that must remain visually intact afterward.",
        "Use when the task asks to merge and center report headers, merge named cell spans, or handle hidden-cell content while merging."
      ],
      "failureModes": [
        "Merging the wrong span because the selection drifted before the command.",
        "Clicking through the hidden-cell warning without checking whether contents should be cleared or preserved.",
        "Assuming the merge succeeded without verifying the visible header span on the worksheet."
      ],
      "completenessScore": 32
    },
    {
      "id": "LIBREOFFICECALC_Conditional_Formatting_and_Placeholder_Handling",
      "name": "Conditional Formatting and Placeholder Handling",
      "description": "Author conditional-format rules, handle placeholder values such as #N/A, and verify both the dialog logic and the visible styled result when Calc tasks depend on rule-driven formatting.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Conditional_Formatting_and_Placeholder_Handling",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-conditional-formatting-and-placeholder-handling.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formatting"
      ],
      "overview": "Use when the task explicitly asks for conditional formatting, gradients, data bars, color scales, or placeholder handling such as #N/A. Use when the workflow depends on dialog-level rule setup rather than only direct on-sheet styling.",
      "applicability": [
        "Use when the task explicitly asks for conditional formatting, gradients, data bars, color scales, or placeholder handling such as #N/A.",
        "Use when the workflow depends on dialog-level rule setup rather than only direct on-sheet styling.",
        "Use when the task explicitly asks for conditional formatting, gradients, data bars, color scales, or placeholder handling such as #N/A."
      ],
      "failureModes": [
        "Applying a direct fill instead of authoring a conditional rule.",
        "Typing the comparison value incorrectly, especially placeholder text such as #N/A.",
        "Stopping at the dialog without checking the visible styled result on the sheet."
      ],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICECALC_Configure_Page_Setup_and_Export_Calc_Output",
      "name": "Configure Page Setup and Export Calc Output",
      "description": "Adjust Page Style and print-scaling settings, then verify export-option dialogs for fit-to-page, page count, or PDF-output workflows that ordinary save/export skills underspecify.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Configure_Page_Setup_and_Export_Calc_Output",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-configure-page-setup-and-export-calc-output.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "export",
        "save",
        "settings"
      ],
      "overview": "Use when the task explicitly asks for page setup, Page Style, fit-to-page scaling, print-range sizing, or export-option tuning such as View PDF after export. Use when the output branch depends on page-style controls before the final export dialog.",
      "applicability": [
        "Use when the task explicitly asks for page setup, Page Style, fit-to-page scaling, print-range sizing, or export-option tuning such as View PDF after export.",
        "Use when the output branch depends on page-style controls before the final export dialog.",
        "Use when the task explicitly asks for page setup, Page Style, fit-to-page scaling, print-range sizing, or export-option tuning such as View PDF after export."
      ],
      "failureModes": [
        "Opening a save or export dialog without configuring the required Page Style settings first.",
        "Leaving scaling on the default mode when the task required fit-to-page or a specific percentage.",
        "Skipping the final export-option check for View PDF after export, quality, or DPI settings."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICECALC_Create_Calc_Pivot_Tables_with_Aggregations_and_Filters",
      "name": "Create Calc Pivot Tables with Aggregations and Filters",
      "description": "Create Calc pivot tables from the intended source range, place fields into the correct layout buckets, choose non-default aggregations, and verify renamed or filtered pivot output on the result sheet.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Create_Calc_Pivot_Tables_with_Aggregations_and_Filters",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-create-calc-pivot-tables-with-aggregations-and-filters.jpg",
      "imageCount": 11,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "tables"
      ],
      "overview": "Use when the task explicitly asks for a pivot table or a data-pilot style summary. Use when the work includes field layout, non-default aggregation, pivot filters, or renamed pivot output sheets.",
      "applicability": [
        "Use when the task explicitly asks for a pivot table or a data-pilot style summary.",
        "Use when the work includes field layout, non-default aggregation, pivot filters, or renamed pivot output sheets.",
        "Use when the task explicitly asks for a pivot table or a data-pilot style summary."
      ],
      "failureModes": [
        "Building the pivot from the wrong source or stale selection.",
        "Leaving value fields on default Sum when the task required another aggregation.",
        "Stopping in the layout dialog without checking the finished pivot output, rename, or filter state."
      ],
      "completenessScore": 36
    },
    {
      "id": "LIBREOFFICECALC_Create_Chart_on_Target_Sheet_with_Exact_Title_and_Type",
      "name": "Create Chart on Target Sheet with Exact Title and Type",
      "description": "Create a chart on the requested destination sheet while honoring an exact chart title and chart family.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Create_Chart_on_Target_Sheet_with_Exact_Title_and_Type",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-create-chart-on-target-sheet-with-exact-title-and-type.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "charts"
      ],
      "overview": "Use when the task explicitly names both a target sheet and a required chart title or exact chart type. Use when the chart placement and final title are first-class requirements rather than incidental details.",
      "applicability": [
        "Use when the task explicitly names both a target sheet and a required chart title or exact chart type.",
        "Use when the chart placement and final title are first-class requirements rather than incidental details.",
        "Use when the task explicitly names both a target sheet and a required chart title or exact chart type."
      ],
      "failureModes": [
        "Creating the chart on the current sheet when the task named another sheet.",
        "Leaving a placeholder title or wrong chart family in place."
      ],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICECALC_Create_Sparklines_or_Cell_Embedded_Trend_Visuals",
      "name": "Create Sparklines or Cell Embedded Trend Visuals",
      "description": "Create compact cell-embedded trend or intensity visuals such as sparklines, data bars, or color scales when the task wants an in-cell visual result instead of a full chart canvas.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Create_Sparklines_or_Cell_Embedded_Trend_Visuals",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-create-sparklines-or-cell-embedded-trend-visuals.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "charts"
      ],
      "overview": "Use when the task explicitly asks for sparkline-like charts, data bars, color scales, or another embedded visual inside worksheet cells. Use when the output is an in-cell visual cue per cell or range, not a standard chart canvas.",
      "applicability": [
        "Use when the task explicitly asks for sparkline-like charts, data bars, color scales, or another embedded visual inside worksheet cells.",
        "Use when the output is an in-cell visual cue per cell or range, not a standard chart canvas.",
        "Use when the task explicitly asks for sparkline-like charts, data bars, color scales, or another embedded visual inside worksheet cells."
      ],
      "failureModes": [
        "Mistaking an in-cell visual request for a regular chart-insertion workflow.",
        "Creating a regular chart canvas instead of an in-cell trend visual."
      ],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICECALC_Edit_Calc_Cell_Values_Comments_and_Find_Replace",
      "name": "Edit Calc Cell Values Comments and Find Replace",
      "description": "Type or replace cell content, add labels, manage comments, and use find/replace flows when the task is about literal cell edits.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Edit_Calc_Cell_Values_Comments_and_Find_Replace",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-edit-calc-cell-values-comments-and-find-replace.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "libreoffice calc"
      ],
      "overview": "Use when the task directly asks to type, edit, replace, or annotate cell content. Use when the visible action is a literal cell-content change rather than formula entry or formatting.",
      "applicability": [
        "Use when the task directly asks to type, edit, replace, or annotate cell content.",
        "Use when the visible action is a literal cell-content change rather than formula entry or formatting.",
        "Use when the task directly asks to type, edit, replace, or annotate cell content."
      ],
      "failureModes": [
        "Typing the requested text into the wrong cell.",
        "Using formula entry when the task asked for a literal label or comment."
      ],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICECALC_Enable_Data_Validation_Dropdowns_and_Allowed_Values",
      "name": "Enable Data Validation Dropdowns and Allowed Values",
      "description": "Turn Calc cells into validated dropdowns, set the allowed list or criteria correctly, and verify the post-dialog dropdown behavior on the sheet.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Enable_Data_Validation_Dropdowns_and_Allowed_Values",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-enable-data-validation-dropdowns-and-allowed-values.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "libreoffice calc"
      ],
      "overview": "Use when the task asks for a dropdown list, validation rule, or allowed-values constraint on one or more cells. Use when the actual completion gate is that the cell behaves like a dropdown after the dialog is confirmed.",
      "applicability": [
        "Use when the task asks for a dropdown list, validation rule, or allowed-values constraint on one or more cells.",
        "Use when the actual completion gate is that the cell behaves like a dropdown after the dialog is confirmed.",
        "Use when the task asks for a dropdown list, validation rule, or allowed-values constraint on one or more cells."
      ],
      "failureModes": [
        "Opening Validity for the wrong cell after losing the selection.",
        "Leaving Allow on the wrong criteria type or typing list entries with the wrong separators.",
        "Stopping after clicking OK without confirming the cell actually exposes the dropdown choices."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICECALC_Fill_Copy_Paste_and_Split_Calc_Data",
      "name": "Fill Copy Paste and Split Calc Data",
      "description": "Copy, paste, fill down, duplicate rows, or split text into columns while protecting existing values and keeping the destination range aligned with the task.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Fill_Copy_Paste_and_Split_Calc_Data",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-fill-copy-paste-and-split-calc-data.jpg",
      "imageCount": 4,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "text"
      ],
      "overview": "Use when the task asks to fill blanks, copy and paste table content, duplicate rows, or split delimiter-based text into cells. Use when the visible challenge is data movement across cells rather than formula logic or formatting only.",
      "applicability": [
        "Use when the task asks to fill blanks, copy and paste table content, duplicate rows, or split delimiter-based text into cells.",
        "Use when the visible challenge is data movement across cells rather than formula logic or formatting only.",
        "Use when the task asks to fill blanks, copy and paste table content, duplicate rows, or split delimiter-based text into cells."
      ],
      "failureModes": [
        "Running fill or paste on the wrong range after a selection change.",
        "Overwriting populated cells when the task only wanted blanks filled or split output appended.",
        "Stopping after opening a split or fill surface without checking the resulting cells."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICECALC_Format_Calc_Cell_Text_Alignment_and_Borders",
      "name": "Format Calc Cell Text Alignment and Borders",
      "description": "Apply direct cell formatting such as font weight, font size, alignment, fill, and borders, then verify that the requested style landed only on the intended range.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Format_Calc_Cell_Text_Alignment_and_Borders",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-format-calc-cell-text-alignment-and-borders.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formatting",
        "text"
      ],
      "overview": "Use when the task is about direct cell styling such as bold, font size, alignment, fill color, or borders. Use when the requested result is visible on the worksheet cells rather than in a chart, pivot, or validation dialog.",
      "applicability": [
        "Use when the task is about direct cell styling such as bold, font size, alignment, fill color, or borders.",
        "Use when the requested result is visible on the worksheet cells rather than in a chart, pivot, or validation dialog.",
        "Use when the task is about direct cell styling such as bold, font size, alignment, fill color, or borders."
      ],
      "failureModes": [
        "Applying formatting to an entire row or column when the task named a smaller range.",
        "Stopping at a toolbar button state instead of checking the worksheet result.",
        "Treating conditional or rule-driven styling as ordinary direct cell formatting."
      ],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICECALC_Format_Calc_Chart_Elements_and_Series",
      "name": "Format Calc Chart Elements and Series",
      "description": "Adjust chart legends, axes, series styles, labels, line types, and secondary-axis settings after the chart already exists.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Format_Calc_Chart_Elements_and_Series",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-format-calc-chart-elements-and-series.jpg",
      "imageCount": 11,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "charts",
        "formatting"
      ],
      "overview": "Use when the chart already exists and the task is about legends, axes, series colors, data labels, or line styles. Use when the work stays inside chart-edit mode rather than chart insertion.",
      "applicability": [
        "Use when the chart already exists and the task is about legends, axes, series colors, data labels, or line styles.",
        "Use when the work stays inside chart-edit mode rather than chart insertion.",
        "Use when the chart already exists and the task is about legends, axes, series colors, data labels, or line styles."
      ],
      "failureModes": [
        "Trying to recreate the chart instead of editing the existing one.",
        "Formatting the wrong series or axis because the chart element focus drifted."
      ],
      "completenessScore": 38
    },
    {
      "id": "LIBREOFFICECALC_Format_Calc_Numbers_Dates_and_Percentages",
      "name": "Format Calc Numbers Dates and Percentages",
      "description": "Apply numeric, date, time, percentage, fraction, or separator formatting to visible Calc cells and verify the displayed representation.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Format_Calc_Numbers_Dates_and_Percentages",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-format-calc-numbers-dates-and-percentages.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formatting",
        "slides"
      ],
      "overview": "Use when the task is about number formats such as percent, decimal precision, thousand separators, fractions, currency, or dates. Use when the cell values stay the same but their displayed format must change.",
      "applicability": [
        "Use when the task is about number formats such as percent, decimal precision, thousand separators, fractions, currency, or dates.",
        "Use when the cell values stay the same but their displayed format must change.",
        "Use when the task is about number formats such as percent, decimal precision, thousand separators, fractions, currency, or dates."
      ],
      "failureModes": [
        "Changing the underlying values when the task only wanted display formatting.",
        "Stopping after opening the format dialog without checking the visible cell representation."
      ],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICECALC_Highlight_Weekend_or_Rule_Matched_Cells",
      "name": "Highlight Weekend or Rule Matched Cells",
      "description": "Highlight cells or rows that match visible weekend or value rules when the end state is a directly visible on-sheet match result rather than a dialog-centric conditional-format authoring flow.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Highlight_Weekend_or_Rule_Matched_Cells",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-highlight-weekend-or-rule-matched-cells.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formatting"
      ],
      "overview": "Use when the task is about visibly highlighted weekend rows, matched values, or rule-hit cells already expressible as an on-sheet result. Use when the instruction does not hinge on placeholder cleanup, style-dialog branching, or data-bar/color-scale authoring.",
      "applicability": [
        "Use when the task is about visibly highlighted weekend rows, matched values, or rule-hit cells already expressible as an on-sheet result.",
        "Use when the instruction does not hinge on placeholder cleanup, style-dialog branching, or data-bar/color-scale authoring.",
        "Use when the task is about visibly highlighted weekend rows, matched values, or rule-hit cells already expressible as an on-sheet result."
      ],
      "failureModes": [
        "Choosing the wrong target range for the highlight rule.",
        "Using this direct-highlight skill for placeholder-hiding or gradient-format tasks that need dialog-level conditional formatting."
      ],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICECALC_Insert_Calc_Drawing_and_Gallery_Objects",
      "name": "Insert Calc Drawing and Gallery Objects",
      "description": "Insert arrows, shapes, gallery items, or drawing objects into Calc sheets.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Insert_Calc_Drawing_and_Gallery_Objects",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-insert-calc-drawing-and-gallery-objects.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "libreoffice calc"
      ],
      "overview": "Use when the task asks to insert a drawing object, arrow, or gallery item into the worksheet.",
      "applicability": [
        "Use when the task asks to insert a drawing object, arrow, or gallery item into the worksheet.",
        "Use when the task asks to insert a drawing object, arrow, or gallery item into the worksheet."
      ],
      "failureModes": [
        "Using cell text or chart tools instead of drawing-object insertion."
      ],
      "completenessScore": 36
    },
    {
      "id": "LIBREOFFICECALC_Insert_and_Structure_Calc_Charts",
      "name": "Insert and Structure Calc Charts",
      "description": "Insert chart types, choose source ranges, and keep the wizard or chart canvas aligned with the requested structure before later formatting steps.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Insert_and_Structure_Calc_Charts",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-insert-and-structure-calc-charts.jpg",
      "imageCount": 11,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "charts",
        "formatting"
      ],
      "overview": "Use when the task asks to insert a new chart, choose a chart family, or set up a chart from the current table. Use when the main decision is chart structure rather than later legend or series styling.",
      "applicability": [
        "Use when the task asks to insert a new chart, choose a chart family, or set up a chart from the current table.",
        "Use when the main decision is chart structure rather than later legend or series styling.",
        "Use when the task asks to insert a new chart, choose a chart family, or set up a chart from the current table."
      ],
      "failureModes": [
        "Starting a chart from the wrong source range or wrong sheet.",
        "Treating later legend or axis formatting as part of the initial insertion flow."
      ],
      "completenessScore": 38
    },
    {
      "id": "LIBREOFFICECALC_Lookup_Reference_and_Keyed_Fill_Formulas",
      "name": "Lookup Reference and Keyed Fill Formulas",
      "description": "Enter cross-sheet or keyed-reference formulas in the correct destination column, verify the sheet-qualified references, and confirm the visible filled results.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Lookup_Reference_and_Keyed_Fill_Formulas",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-lookup-reference-and-keyed-fill-formulas.jpg",
      "imageCount": 4,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "formulas"
      ],
      "overview": "Use when the task explicitly involves VLOOKUP-style logic, cross-sheet references, matching by key, or filling values from a reference table. Use when the main risk is choosing the wrong source sheet, wrong key column, wrong lookup range, or wrong destination output column.",
      "applicability": [
        "Use when the task explicitly involves VLOOKUP-style logic, cross-sheet references, matching by key, or filling values from a reference table.",
        "Use when the main risk is choosing the wrong source sheet, wrong key column, wrong lookup range, or wrong destination output column.",
        "Use when the task explicitly involves VLOOKUP-style logic, cross-sheet references, matching by key, or filling values from a reference table."
      ],
      "failureModes": [],
      "completenessScore": 29
    },
    {
      "id": "LIBREOFFICECALC_Manage_Calc_Rows_Columns_Freeze_and_Split_Views",
      "name": "Manage Calc Rows Columns Freeze and Split Views",
      "description": "Resize, hide, move, or freeze worksheet rows and columns and handle split or zoom-like view controls without mixing them into formatting-only tasks.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Manage_Calc_Rows_Columns_Freeze_and_Split_Views",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-manage-calc-rows-columns-freeze-and-split-views.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formatting"
      ],
      "overview": "Use when the task is about row height, column width, hide/unhide, moving columns, freezing panes, splitting views, or zooming the sheet view. Use when the worksheet structure or viewport behavior changes but the cell contents do not fundamentally change.",
      "applicability": [
        "Use when the task is about row height, column width, hide/unhide, moving columns, freezing panes, splitting views, or zooming the sheet view.",
        "Use when the worksheet structure or viewport behavior changes but the cell contents do not fundamentally change.",
        "Use when the task is about row height, column width, hide/unhide, moving columns, freezing panes, splitting views, or zooming the sheet view."
      ],
      "failureModes": [
        "Changing column width or freeze state on the wrong row or column.",
        "Opening a cell-format dialog when the task required a view or structural change.",
        "Assuming a freeze or split succeeded without checking the visible pane boundary."
      ],
      "completenessScore": 35
    },
    {
      "id": "LIBREOFFICECALC_Manage_Calc_Worksheets_and_Cross_Sheet_Data",
      "name": "Manage Calc Worksheets and Cross Sheet Data",
      "description": "Create, rename, switch, and organize worksheet tabs while moving data between sheets in a controlled way.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Manage_Calc_Worksheets_and_Cross_Sheet_Data",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-manage-calc-worksheets-and-cross-sheet-data.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "libreoffice calc"
      ],
      "overview": "Use when the task is about creating, renaming, deleting, or switching worksheet tabs or placing data on another sheet. Use when cross-sheet placement is part of the visible result.",
      "applicability": [
        "Use when the task is about creating, renaming, deleting, or switching worksheet tabs or placing data on another sheet.",
        "Use when cross-sheet placement is part of the visible result.",
        "Use when the task is about creating, renaming, deleting, or switching worksheet tabs or placing data on another sheet."
      ],
      "failureModes": [
        "Renaming or editing the wrong sheet tab.",
        "Pasting data onto the current sheet when the task required another tab."
      ],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICECALC_Open_LibreOffice_Calc_Python_Console_Help",
      "name": "Open LibreOffice Calc Python Console Help",
      "description": "Open Calc help or the Python console/help surface when the task is documentation- or console-oriented rather than spreadsheet editing.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Open_LibreOffice_Calc_Python_Console_Help",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-open-libreoffice-calc-python-console-help.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "documents"
      ],
      "overview": "Use when the task explicitly asks for Calc help, documentation, or a Python console/help surface.",
      "applicability": [
        "Use when the task explicitly asks for Calc help, documentation, or a Python console/help surface.",
        "Use when the task explicitly asks for Calc help, documentation, or a Python console/help surface."
      ],
      "failureModes": [
        "Continuing into spreadsheet edits when the task only required documentation or console navigation."
      ],
      "completenessScore": 35
    },
    {
      "id": "LIBREOFFICECALC_Protect_Calc_Sheets_and_Allowed_Actions",
      "name": "Protect Calc Sheets and Allowed Actions",
      "description": "Protect worksheets, set passwords, and control allowed actions for protected sheets.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Protect_Calc_Sheets_and_Allowed_Actions",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-protect-calc-sheets-and-allowed-actions.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "libreoffice calc"
      ],
      "overview": "Use when the task is about sheet protection, passwords, or allowed actions on protected sheets.",
      "applicability": [
        "Use when the task is about sheet protection, passwords, or allowed actions on protected sheets.",
        "Use when the task is about sheet protection, passwords, or allowed actions on protected sheets."
      ],
      "failureModes": [
        "Protecting the wrong sheet or missing the requested allowed-action setting."
      ],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICECALC_Run_Calc_Statistical_Tests_and_Summaries",
      "name": "Run Calc Statistical Tests and Summaries",
      "description": "Run statistical tools or summary functions that are more specialized than ordinary worksheet formulas.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Run_Calc_Statistical_Tests_and_Summaries",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-run-calc-statistical-tests-and-summaries.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formulas"
      ],
      "overview": "Use when the task explicitly asks for statistical tools, tests, or summary workflows beyond direct formulas.",
      "applicability": [
        "Use when the task explicitly asks for statistical tools, tests, or summary workflows beyond direct formulas.",
        "Use when the task explicitly asks for statistical tools, tests, or summary workflows beyond direct formulas."
      ],
      "failureModes": [
        "Reducing a specialized analysis request to a simple worksheet formula when the task expected a tool-driven output."
      ],
      "completenessScore": 35
    },
    {
      "id": "LIBREOFFICECALC_Save_Export_and_Print_Calc_Files",
      "name": "Save Export and Print Calc Files",
      "description": "Save Calc workbooks, export them to requested file names or formats, and open print-preview or save dialogs for ordinary output workflows, while page-style scaling branches live in the dedicated page-setup export skill.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Save_Export_and_Print_Calc_Files",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-save-export-and-print-calc-files.jpg",
      "imageCount": 4,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formatting",
        "export",
        "save",
        "files"
      ],
      "overview": "Use when the task is about saving, saving as, exporting, or entering ordinary print-preview or output dialogs. Use when the task does not require detailed page-style scaling, fit-to-page logic, or PDF-option tuning beyond the standard output flow.",
      "applicability": [
        "Use when the task is about saving, saving as, exporting, or entering ordinary print-preview or output dialogs.",
        "Use when the task does not require detailed page-style scaling, fit-to-page logic, or PDF-option tuning beyond the standard output flow.",
        "Use when the task is about saving, saving as, exporting, or entering ordinary print-preview or output dialogs."
      ],
      "failureModes": [
        "Using a generic save flow when the task required export or print preview.",
        "Entering the wrong filename, extension, or destination directory.",
        "Staying in this broad output skill for page-style scaling tasks that need the dedicated page-setup branch."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICECALC_Sort_and_Filter_Calc_Tables",
      "name": "Sort and Filter Calc Tables",
      "description": "Apply sorts, auto-filters, and range filters to Calc tables and verify the visible filtered rows or ordering on the sheet.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Sort_and_Filter_Calc_Tables",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-sort-and-filter-calc-tables.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "tables"
      ],
      "overview": "Use when the task asks to sort, filter, or exclude values from a table. Use when the main result is the visible ordering or filtered subset of a worksheet table.",
      "applicability": [
        "Use when the task asks to sort, filter, or exclude values from a table.",
        "Use when the main result is the visible ordering or filtered subset of a worksheet table.",
        "Use when the task asks to sort, filter, or exclude values from a table."
      ],
      "failureModes": [
        "Filtering the wrong range or wrong column.",
        "Assuming the filter was applied without checking the visible table subset."
      ],
      "completenessScore": 35
    },
    {
      "id": "LIBREOFFICECALC_Text_Cleaning_Case_Transforms_and_Normalization",
      "name": "Text Cleaning Case Transforms and Normalization",
      "description": "Transform selected Calc text to uppercase, lowercase, or capitalize-each-word forms and keep text-cleanup workflows aligned with the requested normalization target.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Text_Cleaning_Case_Transforms_and_Normalization",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-text-cleaning-case-transforms-and-normalization.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "text"
      ],
      "overview": "Use when the task asks to convert text to uppercase, lowercase, capitalize-each-word, or another explicit case-normalization target. Use when the main step happens through Format > Text or another text-cleanup surface rather than numeric formatting or formulas.",
      "applicability": [
        "Use when the task asks to convert text to uppercase, lowercase, capitalize-each-word, or another explicit case-normalization target.",
        "Use when the main step happens through Format > Text or another text-cleanup surface rather than numeric formatting or formulas.",
        "Use when the task asks to convert text to uppercase, lowercase, capitalize-each-word, or another explicit case-normalization target."
      ],
      "failureModes": [
        "Opening a number-format or cell-format dialog instead of the Text submenu.",
        "Applying the case transform to the wrong range because the selection changed.",
        "Stopping at the submenu without confirming the worksheet text visibly changed."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICECALC_Use_Formulas_and_Functions_in_Calc_Cells",
      "name": "Use Formulas and Functions in Calc Cells",
      "description": "Enter direct Calc formulas or wizard-selected functions in the correct target cell, verify the first result, and only then fill the intended range.",
      "domain": "libreoffice_calc",
      "domainLabel": "LibreOffice Calc",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_calc/LIBREOFFICECALC_Use_Formulas_and_Functions_in_Calc_Cells",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-calc--libreofficecalc-use-formulas-and-functions-in-calc-cells.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "formulas"
      ],
      "overview": "Use when the task is primarily a direct worksheet formula or named function task: totals, averages, date arithmetic, rounding, scaling, concatenation, or similar cell-level calculations. Use when success is judged by visible worksheet values in a target cell or repeated range. Keep this as the default formula path unless the task is explicitly a keyed lookup",
      "applicability": [
        "Use when the task is primarily a direct worksheet formula or named function task: totals, averages, date arithmetic, rounding, scaling, concatenation, or similar cell-level calculations.",
        "Use when success is judged by visible worksheet values in a target cell or repeated range.",
        "Keep this as the default formula path unless the task is explicitly a keyed lookup/cross-sheet retrieval or a business-metric specialist flow such as revenue, profit, or discount columns."
      ],
      "failureModes": [],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Adjust_Text_Bullets_Indentation_Strikethrough_and_Alignment",
      "name": "Adjust Text Bullets, Indentation, Strikethrough, and Alignment",
      "description": "Apply paragraph-level list, alignment, spacing, or strikeout changes to existing slide text and verify the same line on the canvas.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Adjust_Text_Bullets_Indentation_Strikethrough_and_Alignment",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-adjust-text-bullets-indentation-strikethrough-and-alignment.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "slides",
        "text"
      ],
      "overview": "Use this skill for paragraph-level edits on existing slide text: bullets, numbering, indentation, alignment, line spacing, or strikeout.",
      "applicability": [],
      "failureModes": [],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Apply_Multi_Slide_Title_and_Text_Formatting",
      "name": "Apply Multi-Slide Title and Text Formatting",
      "description": "Repeat the same title or text formatting change across several slides with a slide-by-slide verification loop.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Apply_Multi_Slide_Title_and_Text_Formatting",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-apply-multi-slide-title-and-text-formatting.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formatting",
        "slides",
        "text"
      ],
      "overview": "Use this skill when the task names multiple slides or a slide range and applies the same text-formatting recipe to each target.",
      "applicability": [],
      "failureModes": [],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Apply_Object_Animations",
      "name": "Apply Object Animations",
      "description": "Add, remove, or reconfigure object-level entrance, exit, or emphasis animations with exact effect and timing controls.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Apply_Object_Animations",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-apply-object-animations.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings"
      ],
      "overview": "Select the target object, open the LibreOffice Impress Animation controls, set the requested effect and timing values, and verify the final animation entry before leaving the sidebar.",
      "applicability": [
        "Use this skill for object-level animations on a selected slide object, text box, image, shape, or title.",
        "Use it when the task names an animation effect, effect category, direction, trigger, duration, delay, or other object-animation parameter.",
        "Do not use it for slide-wide transitions, master-slide edits, or general object formatting that does not create or modify an animation entry."
      ],
      "failureModes": [
        "Applying the effect to the wrong object because the intended text box, image, or shape was not selected first.",
        "Using slide transition controls instead of the object Animation sidebar.",
        "Selecting the right effect but leaving the old duration, delay, direction, or trigger unchanged."
      ],
      "completenessScore": 35
    },
    {
      "id": "LIBREOFFICEIMPRESS_Apply_Slide_Transitions",
      "name": "Apply Slide Transitions",
      "description": "Configure slide-level transition effects, timing, sound, and apply-to-all scope without mixing in object animation steps.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Apply_Slide_Transitions",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-apply-slide-transitions.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings",
        "slides"
      ],
      "overview": "Use this skill when the task is about how one slide advances to the next in LibreOffice Impress: choosing a slide transition effect, setting its sound, adjusting duration or automatic advance timing, or applying the same transition to all slides.",
      "applicability": [],
      "failureModes": [
        "The wrong slide thumbnail is selected before editing the transition.",
        "The agent opens the animation sidebar for objects instead of the Slide Transition sidebar.",
        "The agent applies a transition to all slides when the task only asks for one slide."
      ],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Arrange_and_Format_Slide_Objects",
      "name": "Arrange and Format Slide Objects",
      "description": "Reposition, resize, rotate, layer, crop, or restyle an existing slide object without inserting a new one.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Arrange_and_Format_Slide_Objects",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-arrange-and-format-slide-objects.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formatting",
        "slides"
      ],
      "overview": "Keep the intended object selected, make geometry or appearance changes from the Properties sidebar, and verify the result directly on the slide before moving on.",
      "applicability": [
        "Use this skill when a slide object already exists and the task is to move it, resize it, rotate it, flip it, layer it, crop it, or restyle it.",
        "Use it when the requested result can be checked from the selected object on the canvas or from object-specific settings in the Properties sidebar.",
        "Do not use it for inserting a brand-new object or for slide-wide formatting that does not depend on a selected object."
      ],
      "failureModes": [
        "Editing the wrong object because selection changed on the canvas.",
        "Using slide or text properties when the task is object-specific.",
        "Applying an appearance effect when the task only asked for geometry changes, or the reverse."
      ],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICEIMPRESS_Configure_Impress_Preferences_Print_and_Slide_Show_Settings",
      "name": "Configure Impress Preferences, Print, and Slide Show Settings",
      "description": "Open the correct Options branch, change a persistent preference, and verify the final value on the right page before closing the dialog.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Configure_Impress_Preferences_Print_and_Slide_Show_Settings",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-configure-impress-preferences-print-and-slide-show-settings.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings",
        "slides"
      ],
      "overview": "Use this skill for persistent application-level preferences such as view settings, print defaults, grids, compatibility options, or other lasting Impress or LibreOffice controls.",
      "applicability": [],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "LIBREOFFICEIMPRESS_Configure_Presenter_Console_and_One_Monitor_Slide_Show",
      "name": "Configure Presenter Console and One-Monitor Slide Show",
      "description": "Choose the correct slideshow settings surface, change presenter or one-monitor playback options, and verify the requested control state before closing that surface.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Configure_Presenter_Console_and_One_Monitor_Slide_Show",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-configure-presenter-console-and-one-monitor-slide-show.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings",
        "slides"
      ],
      "overview": "Use this skill when the task changes presentation mode, presenter console behavior, one-monitor playback, pointer-as-pen, or related slide-show settings.",
      "applicability": [],
      "failureModes": [],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Configure_Slide_Backgrounds_and_Fill_Effects",
      "name": "Configure Slide Backgrounds and Fill Effects",
      "description": "Change the true slide background in LibreOffice Impress and verify the result on the slide canvas.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Configure_Slide_Backgrounds_and_Fill_Effects",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-configure-slide-backgrounds-and-fill-effects.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings",
        "slides"
      ],
      "overview": "Use this skill when the task changes the background of the slide itself: color, gradient, image, hatch, pattern, or transparency on the current slide surface.",
      "applicability": [],
      "failureModes": [
        "Opening object fill controls instead of the slide background surface.",
        "Losing the target slide selection during a multi-slide task.",
        "Treating a preview-only match as completion without checking the canvas."
      ],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Create_A_Summary_Slide_From_Existing_Content",
      "name": "Create A Summary Slide From Existing Content",
      "description": "Create or select a summary slide, add deck-derived recap text, and verify the finished slide on the canvas.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Create_A_Summary_Slide_From_Existing_Content",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-create-a-summary-slide-from-existing-content.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "slides",
        "text"
      ],
      "overview": "",
      "applicability": [
        "a summary slide",
        "a contents slide",
        "a recap slide"
      ],
      "failureModes": [
        "Creating a new slide but leaving another slide selected, so the recap text lands on the wrong slide.",
        "Typing summary text before confirming that the destination summary slide is active.",
        "Reusing example wording from a prior deck instead of summarizing the current presentation."
      ],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICEIMPRESS_Create_Presentations_from_Templates_and_Master_Slides",
      "name": "Create Presentations from Templates and Master Slides",
      "description": "Start a deck from a template or other deck-wide layout surface, build the requested slide structure, and verify that the resulting placeholders match the intended presentation structure.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Create_Presentations_from_Templates_and_Master_Slides",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-create-presentations-from-templates-and-master-slides.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "slides"
      ],
      "overview": "Use this skill for deck-level setup in LibreOffice Impress: starting from a named template, creating a template-based deck, or changing slide structure so the presentation begins with the right structure before content editing.",
      "applicability": [
        "The task starts a new presentation from a template or another deck-wide setup surface.",
        "The task asks for creating slides, changing slide layout, or establishing a reusable presentation structure.",
        "Success depends on the slide structure or placeholder arrangement, not on the final body text."
      ],
      "failureModes": [
        "Selecting a template that happens to be visible instead of the one requested by the current task.",
        "Applying layout changes to the wrong slide because the thumbnail selection changed.",
        "Treating a transient menu or preview as success without checking the final canvas state."
      ],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Edit_Slide_Number_and_Master_Slide_Elements",
      "name": "Edit Slide Number and Master Slide Elements",
      "description": "Switch into the master surface, edit persistent slide-number or footer elements, and verify the result on the master canvas before returning to normal slide work.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Edit_Slide_Number_and_Master_Slide_Elements",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-edit-slide-number-and-master-slide-elements.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "slides"
      ],
      "overview": "Use this skill when the task changes slide numbers, dates, footer text, or other elements that should persist through the master surface.",
      "applicability": [],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICEIMPRESS_Edit_Speaker_Notes_and_Notes_Views",
      "name": "Edit Speaker Notes and Notes Views",
      "description": "Enter Notes or Master Notes view, place focus in the notes region instead of the slide canvas, and verify the result inside the notes surface.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Edit_Speaker_Notes_and_Notes_Views",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-edit-speaker-notes-and-notes-views.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "slides"
      ],
      "overview": "Use this skill when the task explicitly targets notes, notes view, or master notes.",
      "applicability": [],
      "failureModes": [],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Format_Slide_Text_and_Paragraphs",
      "name": "Format Slide Text and Paragraphs",
      "description": "Reformat existing slide text at the character level and verify the change on the canvas before moving on.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Format_Slide_Text_and_Paragraphs",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-format-slide-text-and-paragraphs.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formatting",
        "slides",
        "text"
      ],
      "overview": "Use this skill for character-level formatting on existing slide text: font family, size, color, bold, italic, underline, highlight, outline, shadow, superscript, or similar effects.",
      "applicability": [],
      "failureModes": [],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Insert_Shapes_Text_Boxes_and_Diagram_Objects",
      "name": "Insert Shapes, Text Boxes, and Diagram Objects",
      "description": "Insert a new shape, text box, or simple diagram object on the current slide, adjust its basic geometry when needed, and verify that it remains on the canvas.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Insert_Shapes_Text_Boxes_and_Diagram_Objects",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-insert-shapes-text-boxes-and-diagram-objects.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "slides",
        "text"
      ],
      "overview": "",
      "applicability": [
        "Inserting a shape such as a circle, rectangle, line-derived shape, or callout.",
        "Adding a new text box.",
        "Adding a simple diagram-style object that starts from the same insert workflow."
      ],
      "failureModes": [
        "Opening the correct insert path on the wrong slide.",
        "Editing a pre-existing object instead of creating a new one.",
        "Changing geometry before the new object is actually selected."
      ],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICEIMPRESS_Insert_and_Configure_Images_Audio_and_Interactive_Media",
      "name": "Insert and Configure Images, Audio, and Interactive Media",
      "description": "Insert a media object on the intended slide, optionally configure click behavior, and verify the requested result before leaving the slide.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Insert_and_Configure_Images_Audio_and_Interactive_Media",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-insert-and-configure-images-audio-and-interactive-media.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings",
        "media",
        "slides",
        "images"
      ],
      "overview": "Use this skill when the task asks you to place an image, audio object, video object, or click-triggered media interaction onto a slide in LibreOffice Impress.",
      "applicability": [
        "the target slide is already known or can be identified in the slide pane",
        "the task needs a real media object, not a drawn shape or text-only edit",
        "the workflow may include selecting a file, placing the object, or opening the Interaction dialog"
      ],
      "failureModes": [
        "Starting from the wrong slide thumbnail, then inserting media onto the wrong slide.",
        "Treating the chooser checkpoint as a finished result.",
        "Opening the Interaction dialog before selecting the media object."
      ],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Insert_and_Edit_Charts",
      "name": "Insert and Edit Charts",
      "description": "Insert a chart, open chart-specific editing surfaces, and verify the resulting chart data state before leaving chart editing.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Insert_and_Edit_Charts",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-insert-and-edit-charts.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "charts"
      ],
      "overview": "",
      "applicability": [
        "insert a new chart from the slide editor",
        "open the chart data table for an existing chart",
        "change chart data and confirm the updated chart data state before finishing"
      ],
      "failureModes": [
        "Opening the wrong insert path and creating a non-chart object.",
        "Editing the slide or sidebar instead of the chart data table.",
        "Treating the example row values in the screenshot as required output for a different task."
      ],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Insert_and_Format_Tables",
      "name": "Insert and Format Tables",
      "description": "Insert a table, edit cells or headers while the table stays active, and verify the resulting structure on the slide canvas.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Insert_and_Format_Tables",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-insert-and-format-tables.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "tables",
        "formatting",
        "slides"
      ],
      "overview": "Use this skill for table insertion and table-specific edits: row or column counts, header rows, cell text, merged cells, table geometry, or on-slide placement.",
      "applicability": [],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "LIBREOFFICEIMPRESS_Manage_Slide_Structure_Ordering_and_Layouts",
      "name": "Manage Slide Structure, Ordering, and Layouts",
      "description": "Select the correct slide, use slide-level controls, and verify navigator or canvas changes before leaving the slide structure workflow.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Manage_Slide_Structure_Ordering_and_Layouts",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-manage-slide-structure-ordering-and-layouts.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "slides"
      ],
      "overview": "Use this skill for navigator-level work in LibreOffice Impress: restoring the slide pane, selecting slide thumbnails, inserting, deleting, duplicating, reordering slides, or applying a different slide layout. Use it when the left filmstrip and the slide shell are the important surfaces for the task and when success depends on slide order, slide count, slide ",
      "applicability": [
        "Use this skill for navigator-level work in LibreOffice Impress: restoring the slide pane, selecting slide thumbnails, inserting, deleting, duplicating, reordering slides, or applying a different slide layout.",
        "Use it when the left filmstrip and the slide shell are the important surfaces for the task and when success depends on slide order, slide count, slide identity, or placeholder layout.",
        "Do not use it as the main skill just because the instruction names `slide 2` or `page 3`. If the real operation is editing text, moving an object, changing a background, editing notes, or saving/exporting, use the conten"
      ],
      "failureModes": [
        "Acting on the wrong slide because the wrong thumbnail was selected.",
        "Opening a layout or delete control from the wrong thumbnail.",
        "Keeping this skill active for a task whose real work is inside the slide after the correct target slide is already known."
      ],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICEIMPRESS_Review_Summarize_and_Rewrite_Slide_Content",
      "name": "Review, Summarize, and Rewrite Slide Content",
      "description": "Read existing slide content, rewrite or summarize it on the target slide, and verify the visible result before leaving the slide.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Review_Summarize_and_Rewrite_Slide_Content",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-review-summarize-and-rewrite-slide-content.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "slides"
      ],
      "overview": "Use this skill when the task depends on existing slide content and asks you to rewrite, replace, condense, or summarize that content inside the current deck.",
      "applicability": [
        "Use it for exact word or phrase swaps, paragraph rewrites, and summary text inserted from material already present in the presentation.",
        "Prefer a different skill for pure formatting-only changes, object layout changes, or creating unrelated new content that does not come from the deck.",
        "Use it for exact word or phrase swaps, paragraph rewrites, and summary text inserted from material already present in the presentation."
      ],
      "failureModes": [
        "Editing the wrong slide because the selected thumbnail changed.",
        "Typing into the wrong textbox or placeholder.",
        "Using Find and Replace for a task that really needed direct local editing, or missing Find and Replace when the task is an exact term swap."
      ],
      "completenessScore": 34
    },
    {
      "id": "LIBREOFFICEIMPRESS_Save_Export_and_Convert_Presentation_Outputs",
      "name": "Save, Export, and Convert Presentation Outputs",
      "description": "Choose the correct save or export branch, set the requested folder, filename, and output format, and verify the commit-ready dialog state before finishing the output flow.",
      "domain": "libreoffice_impress",
      "domainLabel": "LibreOffice Impress",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_impress/LIBREOFFICEIMPRESS_Save_Export_and_Convert_Presentation_Outputs",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-impress--libreofficeimpress-save-export-and-convert-presentation-outputs.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formatting",
        "export",
        "save",
        "files"
      ],
      "overview": "",
      "applicability": [
        "saving to a specific folder",
        "saving under a requested name",
        "exporting to PDF or an image format"
      ],
      "failureModes": [
        "Opening the wrong branch from `File`, such as using a normal save path when the task requires a format-specific export flow.",
        "Leaving the dialog pointed at the wrong folder.",
        "Changing the name but not the format, or changing the format but not the destination."
      ],
      "completenessScore": 35
    },
    {
      "id": "LIBREOFFICEWRITER_Apply_Case_Transforms_and_Rule_Based_Text_Formatting",
      "name": "Apply Case Transforms and Rule-Based Text Formatting",
      "description": "Convert selected text between uppercase, lowercase, sentence case, or capitalize-each-word variants and verify the requested text form is visible on the page.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Apply_Case_Transforms_and_Rule_Based_Text_Formatting",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-apply-case-transforms-and-rule-based-text-formatting.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "text"
      ],
      "overview": "Use this skill when the Writer task is primarily about apply case transforms and rule-based text formatting. Use it only after the relevant document region or settings surface is already visible.",
      "applicability": [
        "Use this skill when the Writer task is primarily about apply case transforms and rule-based text formatting.",
        "Use it only after the relevant document region or settings surface is already visible.",
        "Use this skill when the Writer task is primarily about apply case transforms and rule-based text formatting."
      ],
      "failureModes": [
        "Applying the right operation on the wrong selection or wrong Writer surface.",
        "Leaving the surface before checking whether the requested state is actually visible."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Cleanup_Highlights_Markers_and_Sentence_Spacing",
      "name": "Cleanup Highlights, Markers, and Sentence Spacing",
      "description": "Remove stale highlighting or inline markers and use scope-aware replace workflows to clean spacing or split sentence blocks without collapsing unrelated text.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Cleanup_Highlights_Markers_and_Sentence_Spacing",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-cleanup-highlights-markers-and-sentence-spacing.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "text"
      ],
      "overview": "The task is about removing highlight, deleting spacing artifacts, or splitting sentence blocks with a search-driven cleanup workflow. The cleanup is broader than a single literal replace but narrower than a general regex classification family.",
      "applicability": [
        "The task is about removing highlight, deleting spacing artifacts, or splitting sentence blocks with a search-driven cleanup workflow.",
        "The cleanup is broader than a single literal replace but narrower than a general regex classification family.",
        "The task is about removing highlight, deleting spacing artifacts, or splitting sentence blocks with a search-driven cleanup workflow."
      ],
      "failureModes": [
        "Loading a visually similar surface that does not actually contain this skill's target control.",
        "Assuming the operation is complete before the document or settings surface shows the requested result."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Compose_Summarize_and_Rewrite_Document_Content",
      "name": "Compose, Summarize, and Rewrite Document Content",
      "description": "Draft or rewrite Writer document content directly on the page when the task is primarily about prose generation rather than formatting controls.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Compose_Summarize_and_Rewrite_Document_Content",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-compose-summarize-and-rewrite-document-content.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "documents"
      ],
      "overview": "Use this skill when the Writer task is primarily about compose, summarize, and rewrite document content. Use it only after the relevant document region or settings surface is already visible.",
      "applicability": [
        "Use this skill when the Writer task is primarily about compose, summarize, and rewrite document content.",
        "Use it only after the relevant document region or settings surface is already visible.",
        "Use this skill when the Writer task is primarily about compose, summarize, and rewrite document content."
      ],
      "failureModes": [
        "Applying the right operation on the wrong selection or wrong Writer surface.",
        "Leaving the surface before checking whether the requested state is actually visible."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Configure_Page_Style_and_Page_Level_Layout",
      "name": "Configure Page Style and Page-Level Layout",
      "description": "Adjust page style controls such as margins, orientation, columns, backgrounds, and borders without mixing them into paragraph or character formatting skills.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Configure_Page_Style_and_Page_Level_Layout",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-configure-page-style-and-page-level-layout.jpg",
      "imageCount": 7,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "settings"
      ],
      "overview": "Use this skill when the Writer task is primarily about configure page style and page-level layout. Use it only after the relevant document region or settings surface is already visible.",
      "applicability": [
        "Use this skill when the Writer task is primarily about configure page style and page-level layout.",
        "Use it only after the relevant document region or settings surface is already visible.",
        "Use this skill when the Writer task is primarily about configure page style and page-level layout."
      ],
      "failureModes": [
        "Applying the right operation on the wrong selection or wrong Writer surface.",
        "Leaving the surface before checking whether the requested state is actually visible."
      ],
      "completenessScore": 32
    },
    {
      "id": "LIBREOFFICEWRITER_Configure_Writer_Preferences_User_Data_Toolbar_and_Dictionaries",
      "name": "Configure Writer Preferences, User Data, Toolbar, and Dictionaries",
      "description": "Navigate persistent Writer options to edit user data, default fonts, and related settings, then confirm the requested values are visible before leaving the Options surface.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Configure_Writer_Preferences_User_Data_Toolbar_and_Dictionaries",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-configure-writer-preferences-user-data-toolbar-and-dictionaries.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "The task changes persistent Writer options instead of formatting only the current document selection. The matching surface is the Options dialog or a closely related settings dialog such as Customize or Extension Manager.",
      "applicability": [
        "The task changes persistent Writer options instead of formatting only the current document selection.",
        "The matching surface is the Options dialog or a closely related settings dialog such as Customize or Extension Manager.",
        "The task changes persistent Writer options instead of formatting only the current document selection."
      ],
      "failureModes": [
        "Loading a visually similar surface that does not actually contain this skill's target control.",
        "Assuming the operation is complete before the document or settings surface shows the requested result."
      ],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICEWRITER_Convert_Text_Lists_or_CSV_Style_Content_Into_Tables",
      "name": "Convert Text Lists or CSV-Style Content Into Tables",
      "description": "Convert delimiter-based document text into a Writer table, choose the intended separator, and verify the structured table appears on the page.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Convert_Text_Lists_or_CSV_Style_Content_Into_Tables",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-convert-text-lists-or-csv-style-content-into-tables.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "tables",
        "text",
        "documents"
      ],
      "overview": "The source content already exists as plain text in the document and should be converted into a table. The task talks about comma-separated, tab-separated, delimiter-based, or CSV-style text. The next step is `Table > Convert > Text to Table...`, not inserting a brand-new blank table.",
      "applicability": [
        "The source content already exists as plain text in the document and should be converted into a table.",
        "The task talks about comma-separated, tab-separated, delimiter-based, or CSV-style text.",
        "The next step is `Table > Convert > Text to Table...`, not inserting a brand-new blank table."
      ],
      "failureModes": [
        "Opening `Insert Table...` instead of converting the selected text.",
        "Forgetting to select the full text block before opening the conversion command.",
        "Accepting the wrong separator and leaving the data merged into incorrect columns."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Create_and_Format_Tables",
      "name": "Create and Format Tables",
      "description": "Insert new tables, change row or column structure, and apply table formatting such as fills, borders, or row height adjustments.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Create_and_Format_Tables",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-create-and-format-tables.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "tables",
        "formatting"
      ],
      "overview": "Use this skill when the Writer task is primarily about create and format tables. Use it only after the relevant document region or settings surface is already visible.",
      "applicability": [
        "Use this skill when the Writer task is primarily about create and format tables.",
        "Use it only after the relevant document region or settings surface is already visible.",
        "Use this skill when the Writer task is primarily about create and format tables."
      ],
      "failureModes": [
        "Applying the right operation on the wrong selection or wrong Writer surface.",
        "Leaving the surface before checking whether the requested state is actually visible."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Find_and_Replace_Text_or_Formatting",
      "name": "Find and Replace Text or Formatting",
      "description": "Open Writer's Find and Replace dialog, fill the search and replacement fields or replacement formatting, run the replacement, and verify the replace count or changed document state.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Find_and_Replace_Text_or_Formatting",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-find-and-replace-text-or-formatting.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "search",
        "formatting",
        "text",
        "documents"
      ],
      "overview": "The task explicitly needs repeated literal replacements or formatting replacement through Writer's Find and Replace surface. The task depends on the Find and Replace dialog, the replacement-formatting subdialog, or the replace-count confirmation message. This is the right skill for repeated-match replacement, not for a one-off direct edit on visible text.",
      "applicability": [
        "The task explicitly needs repeated literal replacements or formatting replacement through Writer's Find and Replace surface.",
        "The task depends on the Find and Replace dialog, the replacement-formatting subdialog, or the replace-count confirmation message.",
        "This is the right skill for repeated-match replacement, not for a one-off direct edit on visible text."
      ],
      "failureModes": [
        "Running `Replace All` with the wrong scope because a stale option such as selection-only or match-case was left enabled.",
        "Trusting the replace-count message alone when the task also requires formatting verification on the document canvas.",
        "Using Find and Replace as a default selection aid on tasks that should stay on the main document surface."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Format_Paragraph_Alignment_and_Spacing",
      "name": "Format Paragraph Alignment and Spacing",
      "description": "Open the paragraph controls, change alignment or spacing values, and verify the paragraph block visibly changes on the page.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Format_Paragraph_Alignment_and_Spacing",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-format-paragraph-alignment-and-spacing.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting"
      ],
      "overview": "The task changes paragraph-level alignment, line spacing, or paragraph spacing. The requested result is visible as a block-level layout change on the document canvas.",
      "applicability": [
        "The task changes paragraph-level alignment, line spacing, or paragraph spacing.",
        "The requested result is visible as a block-level layout change on the document canvas.",
        "The task changes paragraph-level alignment, line spacing, or paragraph spacing."
      ],
      "failureModes": [
        "Loading a visually similar surface that does not actually contain this skill's target control.",
        "Assuming the operation is complete before the document or settings surface shows the requested result."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Format_Selected_Text_Characters",
      "name": "Format Selected Text Characters",
      "description": "Apply character-level changes such as font family, size, bold, italic, underline, subscript, superscript, or highlighting to the current selection.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Format_Selected_Text_Characters",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-format-selected-text-characters.jpg",
      "imageCount": 7,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "text"
      ],
      "overview": "Use this skill when the Writer task is primarily about format selected text characters. Use it only after the relevant document region or settings surface is already visible.",
      "applicability": [
        "Use this skill when the Writer task is primarily about format selected text characters.",
        "Use it only after the relevant document region or settings surface is already visible.",
        "Use this skill when the Writer task is primarily about format selected text characters."
      ],
      "failureModes": [
        "Applying the right operation on the wrong selection or wrong Writer surface.",
        "Leaving the surface before checking whether the requested state is actually visible."
      ],
      "completenessScore": 32
    },
    {
      "id": "LIBREOFFICEWRITER_Insert_Bibliography_Entries_and_Citation_Sources",
      "name": "Insert Bibliography Entries and Citation Sources",
      "description": "Append or update bibliography entries at the document's reference block so the numbered source text is visibly present before any cross-reference is inserted.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Insert_Bibliography_Entries_and_Citation_Sources",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-insert-bibliography-entries-and-citation-sources.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "text",
        "documents"
      ],
      "overview": "The task is about adding or editing bibliography entry text in the document body or reference list. The goal is the numbered source block itself, not the separate cross-reference dialog. The current screenshot is still on the document canvas near the reference block rather than inside the Fields dialog.",
      "applicability": [
        "The task is about adding or editing bibliography entry text in the document body or reference list.",
        "The goal is the numbered source block itself, not the separate cross-reference dialog.",
        "The current screenshot is still on the document canvas near the reference block rather than inside the Fields dialog."
      ],
      "failureModes": [
        "Inserting the source text at the wrong place in the document body instead of the reference block.",
        "Moving to cross-reference insertion before the bibliography line is visibly present.",
        "Treating the example text from an image card as reusable content rather than using the task's actual citation."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Insert_Bookmarks_Comments_Hyperlinks_and_Notes",
      "name": "Insert Bookmarks, Comments, Hyperlinks, and Notes",
      "description": "Insert document anchors or review annotations in LibreOffice Writer and confirm that the requested result is visible in the document.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Insert_Bookmarks_Comments_Hyperlinks_and_Notes",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-insert-bookmarks-comments-hyperlinks-and-notes.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "documents"
      ],
      "overview": "The task asks for a bookmark, comment, hyperlink, or similar annotation tied to the current cursor position or selection. The goal is navigation, linking, or annotation inside the document, not bibliography or cross-reference numbering. The current surface is a bookmark dialog, hyperlink dialog, comment/note affordance, or the document canvas showing the ins",
      "applicability": [
        "The task asks for a bookmark, comment, hyperlink, or similar annotation tied to the current cursor position or selection.",
        "The goal is navigation, linking, or annotation inside the document, not bibliography or cross-reference numbering.",
        "The current surface is a bookmark dialog, hyperlink dialog, comment/note affordance, or the document canvas showing the inserted result."
      ],
      "failureModes": [
        "Using this skill for reference-number workflows that belong to the cross-reference skill.",
        "Confirming a dialog before the requested name, URL, or comment text is actually entered.",
        "Leaving the flow before checking the document canvas for the inserted marker or link result."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Insert_Charts_and_Embedded_Objects",
      "name": "Insert Charts and Embedded Objects",
      "description": "Insert charts or embedded document objects and adjust the object surface that appears after insertion.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Insert_Charts_and_Embedded_Objects",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-insert-charts-and-embedded-objects.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "charts",
        "documents"
      ],
      "overview": "Use this skill when the Writer task is primarily about insert charts and embedded objects. Use it only after the relevant document region or settings surface is already visible.",
      "applicability": [
        "Use this skill when the Writer task is primarily about insert charts and embedded objects.",
        "Use it only after the relevant document region or settings surface is already visible.",
        "Use this skill when the Writer task is primarily about insert charts and embedded objects."
      ],
      "failureModes": [
        "Applying the right operation on the wrong selection or wrong Writer surface.",
        "Leaving the surface before checking whether the requested state is actually visible."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Insert_Cross_References_and_Notes",
      "name": "Insert Cross-References and Notes",
      "description": "Insert cross-references through the Fields dialog and adjust footnote or endnote numbering settings when the task is about reference pointers rather than free-text bibliography entry.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Insert_Cross_References_and_Notes",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-insert-cross-references-and-notes.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "text"
      ],
      "overview": "The task is about inserting a cross-reference or changing footnote or endnote settings. The goal is a reference pointer or note-setting surface, not the free-text bibliography block itself. The current surface is the Fields dialog on Cross-references or the footnote/endnote settings dialog.",
      "applicability": [
        "The task is about inserting a cross-reference or changing footnote or endnote settings.",
        "The goal is a reference pointer or note-setting surface, not the free-text bibliography block itself.",
        "The current surface is the Fields dialog on Cross-references or the footnote/endnote settings dialog."
      ],
      "failureModes": [
        "Selecting the wrong destination row in the Fields dialog and inserting a valid but incorrect cross-reference.",
        "Leaving the note settings dialog without checking that the requested numbering or placement actually changed.",
        "Treating a document-local bookmark or plain hyperlink flow as if it were a cross-reference flow."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Insert_Page_Numbers_Headers_Footers_and_Blank_Pages",
      "name": "Insert Page Numbers, Headers, Footers, and Blank Pages",
      "description": "Enable page-style headers or footers, insert page numbers, add blank pages, and verify the structural result on the document canvas.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Insert_Page_Numbers_Headers_Footers_and_Blank_Pages",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-insert-page-numbers-headers-footers-and-blank-pages.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "documents"
      ],
      "overview": "The task changes page-level structure rather than ordinary paragraph formatting. The task asks for footer or header content, page numbering, a numbering scheme, a blank page, or a manual page break. The current surface is the Insert menu path, a Page Style dialog, or the document canvas showing the page-level result.",
      "applicability": [
        "The task changes page-level structure rather than ordinary paragraph formatting.",
        "The task asks for footer or header content, page numbering, a numbering scheme, a blank page, or a manual page break.",
        "The current surface is the Insert menu path, a Page Style dialog, or the document canvas showing the page-level result."
      ],
      "failureModes": [
        "Choosing the wrong page style in the footer path.",
        "Inserting a page break and assuming success without checking that the extra blank page exists.",
        "Changing numbering controls in a dialog without verifying the visible result on the document canvas."
      ],
      "completenessScore": 33
    },
    {
      "id": "LIBREOFFICEWRITER_Insert_Pictures_Shapes_and_Wrapped_Graphics",
      "name": "Insert Pictures, Shapes, and Wrapped Graphics",
      "description": "Insert images or shapes, then adjust wrapping, fill, border, or placement from the visible graphics controls.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Insert_Pictures_Shapes_and_Wrapped_Graphics",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-insert-pictures-shapes-and-wrapped-graphics.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "images"
      ],
      "overview": "Use this skill when the Writer task is primarily about insert pictures, shapes, and wrapped graphics. Use it only after the relevant document region or settings surface is already visible.",
      "applicability": [
        "Use this skill when the Writer task is primarily about insert pictures, shapes, and wrapped graphics.",
        "Use it only after the relevant document region or settings surface is already visible.",
        "Use this skill when the Writer task is primarily about insert pictures, shapes, and wrapped graphics."
      ],
      "failureModes": [
        "Applying the right operation on the wrong selection or wrong Writer surface.",
        "Leaving the surface before checking whether the requested state is actually visible."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Insert_Text_Boxes_Fontwork_and_Controls",
      "name": "Insert Text Boxes, Fontwork, and Controls",
      "description": "Insert drawing-layer content such as text boxes, Fontwork, and form controls, then format the inserted object directly.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Insert_Text_Boxes_Fontwork_and_Controls",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-insert-text-boxes-fontwork-and-controls.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "text"
      ],
      "overview": "Use this skill when the Writer task is primarily about insert text boxes, fontwork, and controls. Use it only after the relevant document region or settings surface is already visible.",
      "applicability": [
        "Use this skill when the Writer task is primarily about insert text boxes, fontwork, and controls.",
        "Use it only after the relevant document region or settings surface is already visible.",
        "Use this skill when the Writer task is primarily about insert text boxes, fontwork, and controls."
      ],
      "failureModes": [
        "Applying the right operation on the wrong selection or wrong Writer surface.",
        "Leaving the surface before checking whether the requested state is actually visible."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Manage_Lists_and_Outline_Numbering",
      "name": "Manage Lists and Outline Numbering",
      "description": "Create, remove, or restyle bulleted and numbered lists, including outline numbering controls.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Manage_Lists_and_Outline_Numbering",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-manage-lists-and-outline-numbering.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "libreoffice writer"
      ],
      "overview": "Use this skill when the Writer task is primarily about manage lists and outline numbering. Use it only after the relevant document region or settings surface is already visible.",
      "applicability": [
        "Use this skill when the Writer task is primarily about manage lists and outline numbering.",
        "Use it only after the relevant document region or settings surface is already visible.",
        "Use this skill when the Writer task is primarily about manage lists and outline numbering."
      ],
      "failureModes": [
        "Applying the right operation on the wrong selection or wrong Writer surface.",
        "Leaving the surface before checking whether the requested state is actually visible."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Open_Document_Sharing_and_Remote_Save_Surfaces",
      "name": "Open Document Sharing and Remote Save Surfaces",
      "description": "Reach Writer's remote save and file services surfaces that precede collaboration so the agent can stop guessing across File, Tools, and service-management branches.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Open_Document_Sharing_and_Remote_Save_Surfaces",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-open-document-sharing-and-remote-save-surfaces.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "save",
        "files",
        "documents"
      ],
      "overview": "The task is about sharing, remote save, collaboration, or file services rather than local document editing. The likely route goes through File menu entries such as Save Remote or through the Remote Files dialog.",
      "applicability": [
        "The task is about sharing, remote save, collaboration, or file services rather than local document editing.",
        "The likely route goes through File menu entries such as Save Remote or through the Remote Files dialog.",
        "The task is about sharing, remote save, collaboration, or file services rather than local document editing."
      ],
      "failureModes": [
        "Loading a visually similar surface that does not actually contain this skill's target control.",
        "Assuming the operation is complete before the document or settings surface shows the requested result."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Prepare_Structured_Text_For_Sorting_and_Deduplication",
      "name": "Prepare Structured Text for Sorting and Deduplication",
      "description": "Convert record-like text into a sortable table and reach the sort surface so duplicate-heavy records can be grouped or cleaned instead of being forced through text-to-table alone.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Prepare_Structured_Text_For_Sorting_and_Deduplication",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-prepare-structured-text-for-sorting-and-deduplication.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "tables",
        "text"
      ],
      "overview": "The task is about record-like text that must be sorted, deduplicated, or prepared for cleanup. The source content begins as lines of structured text rather than an existing sortable table.",
      "applicability": [
        "The task is about record-like text that must be sorted, deduplicated, or prepared for cleanup.",
        "The source content begins as lines of structured text rather than an existing sortable table.",
        "The task is about record-like text that must be sorted, deduplicated, or prepared for cleanup."
      ],
      "failureModes": [
        "Loading a visually similar surface that does not actually contain this skill's target control.",
        "Assuming the operation is complete before the document or settings surface shows the requested result."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Regex_Based_Text_Classification_and_Batch_Formatting",
      "name": "Regex-Based Text Classification and Batch Formatting",
      "description": "Use regular expressions inside Find and Replace to classify repeated text patterns, then apply formatting changes in controlled passes rather than one literal replacement.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Regex_Based_Text_Classification_and_Batch_Formatting",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-regex-based-text-classification-and-batch-formatting.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "text"
      ],
      "overview": "The task explicitly mentions regular expressions, word-start classes, vowels, consonants, or pattern-driven batch formatting. The workflow needs more than one literal match and replace step.",
      "applicability": [
        "The task explicitly mentions regular expressions, word-start classes, vowels, consonants, or pattern-driven batch formatting.",
        "The workflow needs more than one literal match and replace step.",
        "The task explicitly mentions regular expressions, word-start classes, vowels, consonants, or pattern-driven batch formatting."
      ],
      "failureModes": [
        "Loading a visually similar surface that does not actually contain this skill's target control.",
        "Assuming the operation is complete before the document or settings surface shows the requested result."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Save_Export_and_Template_Writer_Documents",
      "name": "Save, Export, and Template Writer Documents",
      "description": "Use Writer's output surfaces to save a copy, confirm an export target such as PDF, or store the current document as a reusable template.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Save_Export_and_Template_Writer_Documents",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-save-export-and-template-writer-documents.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "export",
        "save",
        "documents"
      ],
      "overview": "The document edits are already complete and the remaining work is to send the document through the correct output surface. The task explicitly asks to save a copy, export to another format such as PDF, or save the current document as a reusable template. The current screenshot already shows either the File menu route, a save/export file chooser, or the dedic",
      "applicability": [
        "The document edits are already complete and the remaining work is to send the document through the correct output surface.",
        "The task explicitly asks to save a copy, export to another format such as PDF, or save the current document as a reusable template.",
        "The current screenshot already shows either the File menu route, a save/export file chooser, or the dedicated template dialog."
      ],
      "failureModes": [
        "Using `Save` when the task required `Save a Copy...`, which can overwrite the source file.",
        "Clicking `Save` in the chooser before checking that the file-type control matches the requested format.",
        "Treating a generic file chooser as proof that the template flow is correct."
      ],
      "completenessScore": 31
    },
    {
      "id": "LIBREOFFICEWRITER_Tab_Stops_and_Mixed_Paragraph_Alignment",
      "name": "Tab Stops and Mixed Paragraph Alignment",
      "description": "Configure ruler units and paragraph tab stops, then verify the paragraph shows the expected tab marker layout or mixed alignment result.",
      "domain": "libreoffice_writer",
      "domainLabel": "LibreOffice Writer",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/libreoffice_writer/LIBREOFFICEWRITER_Tab_Stops_and_Mixed_Paragraph_Alignment",
      "thumbnail": "assets/skill-library/thumbnails/libreoffice-writer--libreofficewriter-tab-stops-and-mixed-paragraph-alignment.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "The task explicitly mentions tab stops, ruler units, decimal tabs, centered tabs, or mixed left/right alignment on a single line. The task is not merely general paragraph alignment or spacing.",
      "applicability": [
        "The task explicitly mentions tab stops, ruler units, decimal tabs, centered tabs, or mixed left/right alignment on a single line.",
        "The task is not merely general paragraph alignment or spacing.",
        "The task explicitly mentions tab stops, ruler units, decimal tabs, centered tabs, or mixed left/right alignment on a single line."
      ],
      "failureModes": [
        "Loading a visually similar surface that does not actually contain this skill's target control.",
        "Assuming the operation is complete before the document or settings surface shows the requested result."
      ],
      "completenessScore": 31
    },
    {
      "id": "MULTIAPP_Add_Or_Adjust_Recurring_Timetable_Slots_In_Calc",
      "name": "Add Or Adjust Recurring Timetable Slots In Calc",
      "description": "Place a recurring lecture or class block into the correct timetable slot in Calc and verify the finished block inside the schedule grid.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Add_Or_Adjust_Recurring_Timetable_Slots_In_Calc",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-add-or-adjust-recurring-timetable-slots-in-calc.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "tables"
      ],
      "overview": "Use this skill when a weekly timetable is open in Calc and the task ends only after the requested class block is visibly present in the correct day-time slot. The reusable pattern is: anchor on the target slot, verify the full lecture span, then finish on the formatted block inside the timetable grid.",
      "applicability": [
        "The task names a weekly timetable slot such as Wednesday at 12 PM.",
        "The schedule is stored in LibreOffice Calc and the finish condition is a visible lecture or class block."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "MULTIAPP_Capture_Browser_Downloads_In_A_Target_Folder",
      "name": "Capture Browser Downloads In A Target Folder",
      "description": "Capture browser downloads or saved web artifacts into the requested local folder, then verify that the local endpoint really contains the requested deliverable.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Capture_Browser_Downloads_In_A_Target_Folder",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-capture-browser-downloads-in-a-target-folder.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "web",
        "save",
        "files"
      ],
      "overview": "Use this skill when the browser is only an intermediate surface and the real finish condition is a downloaded or saved output landing in the requested local folder. It now explicitly covers single-file saves, batch downloads into an opened folder, and browser-to-filesystem verification after the download step.",
      "applicability": [
        "The task asks for a browser file, screenshot, PDF, article, or local saved copy to be placed in a named local folder.",
        "The browser may use either a dedicated download button or a save/export flow, but the real endpoint is still local storage.",
        "The task may require more than one file; finish only after the requested count is present in the destination folder."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "MULTIAPP_Capture_Terminal_Output_Into_A_Writer_Report",
      "name": "Capture Terminal Output Into A Writer Report",
      "description": "Capture terminal output into a Writer report and preserve the saved report output as the endpoint.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Capture_Terminal_Output_Into_A_Writer_Report",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-capture-terminal-output-into-a-writer-report.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "save",
        "terminal"
      ],
      "overview": "Use this skill when terminal output is only intermediate evidence and the task ends when that output is preserved inside a saved Writer report.",
      "applicability": [
        "The terminal generates process output, command output, or other text that must be placed into Writer.",
        "The result must remain in a saved Writer output rather than only in the terminal window."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "MULTIAPP_Commit_And_Push_Project_Changes_From_Terminal",
      "name": "Commit And Push Project Changes From Terminal",
      "description": "Stage changes, commit them with the requested message, and verify the remote push in Terminal before finishing.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Commit_And_Push_Project_Changes_From_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-commit-and-push-project-changes-from-terminal.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "terminal",
        "email"
      ],
      "overview": "Use this skill when the task is a Terminal-based git workflow that ends only after the remote branch update succeeds. The key reusable pattern is: verify the repository prompt, review the commit-and-push command, then finish on the remote success output rather than on the act of typing.",
      "applicability": [
        "The task explicitly names a commit message and a branch or remote such as `origin main`.",
        "The work already starts in Terminal and the result is a successful push, not a later browser or file-manager step."
      ],
      "failureModes": [],
      "completenessScore": 31
    },
    {
      "id": "MULTIAPP_Compare_Files_Statements_Or_Records_And_Write_A_Result",
      "name": "Compare Files Statements Or Records And Write A Result",
      "description": "Compare records or statements across files, then write the computed finding into the requested report output.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Compare_Files_Statements_Or_Records_And_Write_A_Result",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-compare-files-statements-or-records-and-write-a-result.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "files"
      ],
      "overview": "Use this skill when the task compares records or computed values across files and only ends after the result is written into the requested report output. It is a narrow compare-then-write workflow, not a generic fallback for other multi-app tasks.",
      "applicability": [
        "The workflow compares rows, values, or rankings across one or more files or web sources.",
        "The compared result must appear in a final chart, table, or numeric report output.",
        "Do not use this skill for Git repository sync, timetable editing, citation-format cleanup, bulk paper metadata extraction, or subtitle export tasks."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "MULTIAPP_Convert_A_Local_Office_Document_And_Upload_It_To_Drive",
      "name": "Convert A Local Office Document And Upload It To Drive",
      "description": "Convert or export a local office document and upload the produced output into the requested Google Drive folder.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Convert_A_Local_Office_Document_And_Upload_It_To_Drive",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-convert-a-local-office-document-and-upload-it-to-drive.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "export",
        "files",
        "documents"
      ],
      "overview": "Use this skill when the task starts from a local office file, requires a format conversion or export, and only finishes once the uploaded output is visible in Google Drive.",
      "applicability": [
        "A local Writer or Calc file must be converted or exported before uploading.",
        "The task names a Drive folder and expects the uploaded output to be the endpoint."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "MULTIAPP_Convert_Or_Export_Local_Files_And_Verify_Output",
      "name": "Convert Or Export Local Files And Verify Output",
      "description": "Convert, export, or batch-transform a local file or current app output, then verify the produced output in the filesystem or target app.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Convert_Or_Export_Local_Files_And_Verify_Output",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-convert-or-export-local-files-and-verify-output.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "export",
        "files"
      ],
      "overview": "Use this skill when the workflow begins from a local file or already-open document, performs a format conversion or export, and ends only after the produced output is visible in the expected local location or target app. This skill is the this release replacement for tasks that were previously forced into the Drive-upload skill even though the real endpoint ",
      "applicability": [
        "A local office, media, image, text, or document output must be converted or exported into another format.",
        "The workflow may run through a GUI export dialog or a command-line batch conversion, but the finish condition is still a local output output.",
        "The task may also ask you to open or preview the result after export."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "MULTIAPP_Export_Thunderbird_Content_Into_A_Calc_Report",
      "name": "Export Thunderbird Content Into A Calc Report",
      "description": "Save Thunderbird-sourced records or exports, then carry them into a Calc sheet and verify the completed spreadsheet-side report.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Export_Thunderbird_Content_Into_A_Calc_Report",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-export-thunderbird-content-into-a-calc-report.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "export",
        "save"
      ],
      "overview": "Use this skill when Thunderbird provides the source records but the verification really cares about a Calc spreadsheet or report. The critical handoff is not merely saving the mail content locally; it is preserving the Thunderbird-side records and then landing them in Calc.",
      "applicability": [
        "The task starts from Thunderbird folders, messages, contacts, or mail metadata.",
        "The final deliverable is a Calc spreadsheet, `.xlsx` file, or tabular report.",
        "The workflow may save a Thunderbird export locally first, but the mail-side save is only intermediate work."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "MULTIAPP_Extract_Web_Listings_Into_A_Calc_Table",
      "name": "Extract Web Listings Into A Calc Table",
      "description": "Extract browser listings or web references into Calc cells and finish with the completed Calc table.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Extract_Web_Listings_Into_A_Calc_Table",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-extract-web-listings-into-a-calc-table.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "web",
        "tables"
      ],
      "overview": "Use this skill when the browser is the source of structured listings and the real endpoint is a populated Calc table.",
      "applicability": [
        "The task asks for browser listing data such as names, addresses, phone numbers, or links to be entered into Calc.",
        "Calc cells are the finish condition rather than the source page staying open in the browser."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "MULTIAPP_Force_Quit_A_Frozen_Desktop_App_From_Terminal",
      "name": "Force Quit A Frozen Desktop App From Terminal",
      "description": "Identify the target process, force quit the frozen app from Terminal, and when required verify the relaunched app returns in a ready state.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Force_Quit_A_Frozen_Desktop_App_From_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-force-quit-a-frozen-desktop-app-from-terminal.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "terminal"
      ],
      "overview": "Use this skill when a desktop app has frozen and the task explicitly calls for a Terminal-based force quit. The reusable pattern is: confirm the frozen app surface, identify the PID or process, send the kill command, then finish on a returned prompt or on the relaunched app if recovery continues.",
      "applicability": [
        "The task explicitly asks for a command-line force quit.",
        "A frozen app remains visible and Terminal is available to recover it.",
        "The task may continue by reopening the app after the kill step."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "MULTIAPP_Insert_VLC_Captured_Media_Into_An_Impress_Slide",
      "name": "Insert VLC-Captured Media Into An Impress Slide",
      "description": "Capture the requested VLC audio or frame and place it onto the target Impress slide.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Insert_VLC_Captured_Media_Into_An_Impress_Slide",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-insert-vlc-captured-media-into-an-impress-slide.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "media",
        "slides"
      ],
      "overview": "Use this skill when VLC provides the source frame or audio and the task only ends after the captured media is visible on the target Impress slide.",
      "applicability": [
        "The task captures a VLC frame or converts VLC audio for insertion into Impress.",
        "The final verification happens in the slide deck rather than inside VLC."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "MULTIAPP_Install_Add_on_Or_Extension_Across_Browser_And_Desktop_App",
      "name": "Install Add-on Or Extension Across Browser And Desktop App",
      "description": "Install the requested browser or desktop extension, including manual Chrome Load unpacked flows, then return the target application to a ready state.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Install_Add_on_Or_Extension_Across_Browser_And_Desktop_App",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-install-add-on-or-extension-across-browser-and-desktop-app.jpg",
      "imageCount": 12,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "multi-app workflows"
      ],
      "overview": "Use this skill when the task installs a browser extension or desktop add-on and only ends after the target app returns in a ready post-install state. This skill covers both catalog installs and manual local-extension handoffs such as Chrome `Load unpacked`.",
      "applicability": [
        "The workflow installs an extension, plugin, theme, or add-on into Chrome, LibreOffice, or VS Code.",
        "The task points to a local unpacked Chrome extension folder and the install must happen from `chrome://extensions`.",
        "The task expects restart or post-install verification rather than stopping at the download page."
      ],
      "failureModes": [],
      "completenessScore": 39
    },
    {
      "id": "MULTIAPP_Read_Document_Then_Edit_Run_And_Save_Code_Output",
      "name": "Read Document Then Edit Run And Save Code Output",
      "description": "Read requirements from a document or browser source, edit and run code, then save the requested output output.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Read_Document_Then_Edit_Run_And_Save_Code_Output",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-read-document-then-edit-run-and-save-code-output.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "save",
        "documents"
      ],
      "overview": "Use this skill only for requirement-driven coding tasks. It begins from a document or browser requirement source and ends only after code is written, run, and reflected in a saved output output. It is not a generic fallback for local conversions, metadata extraction, or document-only transformations.",
      "applicability": [
        "The task begins from written requirements and continues through code editing or execution.",
        "The endpoint is a saved code file, log, report, screenshot, or other visible output that confirms the code work.",
        "The task explicitly depends on writing, fixing, or running code rather than only organizing existing files."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "MULTIAPP_Save_Thunderbird_Messages_Or_Attachments_In_A_Local_Folder",
      "name": "Save Thunderbird Messages Or Attachments In A Local Folder",
      "description": "Save Thunderbird messages or attachments into the requested local folder, with stronger verification for folder choice, output naming, and downstream reuse.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Save_Thunderbird_Messages_Or_Attachments_In_A_Local_Folder",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-save-thunderbird-messages-or-attachments-in-a-local-folder.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "save",
        "files",
        "email"
      ],
      "overview": "Use this skill when Thunderbird is the source and the task truly ends when saved messages or attachments are visible inside the requested local folder. The this revision makes the local rename pattern and the post-save handoff more explicit.",
      "applicability": [
        "A Thunderbird message or attachment must be stored into a named local folder.",
        "The task may require a filename pattern, a receipts-style archive folder, or a saved file that will be opened by another app afterward.",
        "The local filesystem endpoint matters more than the mail view itself."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "MULTIAPP_Transfer_Browser_Research_Into_Writer",
      "name": "Transfer Browser Research Into Writer",
      "description": "Transfer browser research, citations, or structured reference details into a Writer document and verify the Writer-side result.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Transfer_Browser_Research_Into_Writer",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-transfer-browser-research-into-writer.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "search",
        "documents"
      ],
      "overview": "Use this skill when browser research is only the source and the task truly ends when the requested note, citation, or reference block is visible inside Writer. The this revision emphasizes preserving the requested field order and matching any existing Writer entry pattern.",
      "applicability": [
        "The task collects facts, citations, paper metadata, or reference text in the browser and writes the result in Writer.",
        "The browser content must be transferred into an opened or saved Writer document instead of remaining in the source page.",
        "The destination document may already contain example rows or example paragraphs that the new entry should follow."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "MULTIAPP_Transfer_Calc_Results_Into_A_Writer_Report",
      "name": "Transfer Calc Results Into A Writer Report",
      "description": "Copy a prepared Calc chart, table, range, or named result block into the required Writer report location and verify the inserted report-side result.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Transfer_Calc_Results_Into_A_Writer_Report",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-transfer-calc-results-into-a-writer-report.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "charts",
        "tables"
      ],
      "overview": "Use this skill when the task is not finished in Calc alone and the required endpoint is a Writer report that contains the copied chart, range, or result-table block. The this revision strengthens the header-plus-row case, the destination-section check inside Writer, and the final save verification.",
      "applicability": [
        "A chart or cell range is prepared in Calc and must appear inside Writer.",
        "The task asks for a named result row, table header, or small result table to move from Calc into a Writer report.",
        "The task names a Writer section, merged cell, report table, or filename that determines where the copied result should land."
      ],
      "failureModes": [],
      "completenessScore": 37
    },
    {
      "id": "MULTIAPP_Transfer_Other_App_Content_Into_A_Writer_Output",
      "name": "Transfer Other App Content Into A Writer Output",
      "description": "Move content from a non-browser desktop app into Writer, then verify the Writer-side result rather than stopping on the source app.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Transfer_Other_App_Content_Into_A_Writer_Output",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-transfer-other-app-content-into-a-writer-output.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "multi-app workflows"
      ],
      "overview": "Use this skill when the source material comes from another desktop app such as Impress, GIMP, a mail attachment flow, or a local viewer, but the real endpoint is a Writer document. The goal is to preserve the cross-app handoff and verify the result on the Writer side.",
      "applicability": [
        "The source app is not primarily a browser listing task and not a Calc-to-Writer table transfer.",
        "The task asks you to move notes, slide text, extracted content, or another source output into a Writer document.",
        "The destination Writer document may already have existing content or section structure that the inserted result should follow."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "MULTIAPP_Turn_A_Thunderbird_Attachment_Into_A_Writer_Update",
      "name": "Turn A Thunderbird Attachment Into A Writer Update",
      "description": "Download a Thunderbird attachment, open it in Writer, and apply the requested document update before saving.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Turn_A_Thunderbird_Attachment_Into_A_Writer_Update",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-turn-a-thunderbird-attachment-into-a-writer-update.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "documents"
      ],
      "overview": "Use this skill when Thunderbird is the source of a document attachment and the task only finishes after the attachment has been updated inside Writer.",
      "applicability": [
        "A Thunderbird email attachment must be opened in Writer and edited there.",
        "The finish condition is the updated Writer document rather than the email source."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "MULTIAPP_Upload_Thunderbird_Attachments_Or_Message_Exports_To_Drive",
      "name": "Upload Thunderbird Attachments Or Message Exports To Drive",
      "description": "Move Thunderbird attachments or saved message exports into the requested Google Drive folder and verify the uploaded file there.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Upload_Thunderbird_Attachments_Or_Message_Exports_To_Drive",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-upload-thunderbird-attachments-or-message-exports-to-drive.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "export",
        "save",
        "files",
        "email"
      ],
      "overview": "Use this skill when Thunderbird provides the source attachment or exported message and the workflow only finishes once the file is visible inside the requested Drive folder.",
      "applicability": [
        "A Thunderbird attachment or saved message file must be uploaded into Google Drive.",
        "The task expects Drive folder creation or upload confirmation after the mail-side save step."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "MULTIAPP_Use_Document_Text_As_A_GIMP_Watermark_And_Export_PNGs",
      "name": "Use Document Text As A GIMP Watermark And Export PNGs",
      "description": "Take text from a document, apply it in GIMP as the requested watermark, and export the finished image as a PNG.",
      "domain": "multi_apps",
      "domainLabel": "Multi-App Workflows",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/multi_apps/MULTIAPP_Use_Document_Text_As_A_GIMP_Watermark_And_Export_PNGs",
      "thumbnail": "assets/skill-library/thumbnails/multi-apps--multiapp-use-document-text-as-a-gimp-watermark-and-export-pngs.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 6,
      "tags": [
        "export",
        "images",
        "text",
        "documents"
      ],
      "overview": "Use this skill when document text must be carried into GIMP as the visible watermark and the task only ends after the exported PNG shows the text applied on the image.",
      "applicability": [
        "A Writer document provides the text that should become a GIMP watermark or overlay.",
        "The requested output is a PNG image with the transferred text already visible."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "OS_Adjust_Terminal_Window_and_Preferences",
      "name": "Adjust Terminal Window and Preferences",
      "description": "Open Terminal preferences, change profile settings, and verify the updated configuration from the visible UI or terminal output.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Adjust_Terminal_Window_and_Preferences",
      "thumbnail": "assets/skill-library/thumbnails/os--os-adjust-terminal-window-and-preferences.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings",
        "terminal",
        "files"
      ],
      "overview": "Use this skill for Ubuntu Terminal preference tasks: opening Terminal Preferences, selecting the requested profile, changing profile options such as initial size, cursor behavior, font, colors, or login-shell behavior, and verifying that the requested value is visibly saved.",
      "applicability": [
        "Use when the task asks for a Terminal profile or Terminal window preference change.",
        "Use when the task can be completed through Terminal Preferences, a task-approved settings command, or a visible query of the saved Terminal profile value.",
        "Use when completion depends on seeing the changed value, not merely on reaching a menu."
      ],
      "failureModes": [
        "Changing a nearby Terminal preference but not the exact requested profile setting.",
        "Copying the example screenshot's values instead of the current task's values.",
        "Getting distracted by an unrelated foreground Ubuntu Settings page."
      ],
      "completenessScore": 34
    },
    {
      "id": "OS_Adjust_Text_Scaling_Or_Large_Text_Accessibility",
      "name": "Adjust Large Text Accessibility",
      "description": "Navigate to Accessibility, toggle Large Text when that exact control is requested, and verify the final visible Large Text state on the same page.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Adjust_Text_Scaling_Or_Large_Text_Accessibility",
      "thumbnail": "assets/skill-library/thumbnails/os--os-adjust-text-scaling-or-large-text-accessibility.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "text"
      ],
      "overview": "The task is specifically about Large Text or a closely related accessibility text-size control on the Accessibility page. The final state can be read directly from the Large Text row in Settings.",
      "applicability": [
        "The task is specifically about Large Text or a closely related accessibility text-size control on the Accessibility page.",
        "The final state can be read directly from the Large Text row in Settings.",
        "The task is specifically about Large Text or a closely related accessibility text-size control on the Accessibility page."
      ],
      "failureModes": [
        "Clicking a nearby accessibility row such as Screen Keyboard or High Contrast instead of Large Text.",
        "Finishing before the Large Text row is visible again with the requested final toggle state."
      ],
      "completenessScore": 31
    },
    {
      "id": "OS_Archive_Extract_and_Convert_Files_in_Terminal",
      "name": "Archive Extract and Convert Files in Terminal",
      "description": "Create archives, extract compressed files, or convert document outputs in Terminal and verify the produced file or folder exists at the expected path.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Archive_Extract_and_Convert_Files_in_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/os--os-archive-extract-and-convert-files-in-terminal.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal",
        "files",
        "documents"
      ],
      "overview": "Use this skill for text-first Ubuntu tasks where the main work happens in Terminal: creating an archive, extracting a compressed file, or producing a converted output from a shell command. It is a fit when success must be shown through visible terminal state such as a completed command, a returned prompt, or output that names the produced file or folder.",
      "applicability": [],
      "failureModes": [
        "Running the right kind of command in the wrong directory.",
        "Reusing example filenames from the screenshots instead of the live task values.",
        "Treating a typed command as success without checking visible output."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Change_Permissions_and_Ownership_in_Terminal",
      "name": "Change Permissions and Ownership in Terminal",
      "description": "Use chmod or chown style terminal workflows to change file or directory permissions and then verify the exact resulting mode or owner.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Change_Permissions_and_Ownership_in_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/os--os-change-permissions-and-ownership-in-terminal.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal",
        "files"
      ],
      "overview": "Use this skill for Terminal-first tasks that change Unix file or directory permissions or ownership and require visible confirmation of the resulting mode, owner, or executable behavior.",
      "applicability": [
        "The task explicitly requires `chmod`, `chown`, or an equivalent permission or ownership change in Terminal.",
        "The target is a concrete file, directory, pattern, or account that can be named exactly in a command.",
        "Completion depends on visible terminal evidence such as `ls -l`, `stat`, ownership output, or successful execution after a permission change."
      ],
      "failureModes": [
        "Running the right command on the wrong path, file, or account.",
        "Reusing a path or filename from the example image instead of the current task.",
        "Treating shell history as the current command without re-reading the task."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Change_Wallpaper_and_Appearance_Theme",
      "name": "Change Wallpaper and Appearance Theme",
      "description": "Change wallpaper, style, accent color, or theme mode in Ubuntu Appearance and verify the requested state remains selected.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Change_Wallpaper_and_Appearance_Theme",
      "thumbnail": "assets/skill-library/thumbnails/os--os-change-wallpaper-and-appearance-theme.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "ubuntu os"
      ],
      "overview": "Use this skill for Ubuntu Settings tasks that explicitly target `Appearance`, wallpaper selection, accent color, style, or light/dark theme mode. Use it when success must be confirmed by a persistent visual state such as a selected wallpaper thumbnail, active style chip, highlighted accent swatch, or retained theme toggle.",
      "applicability": [
        "Use this skill for Ubuntu Settings tasks that explicitly target `Appearance`, wallpaper selection, accent color, style, or light/dark theme mode.",
        "Use it when success must be confirmed by a persistent visual state such as a selected wallpaper thumbnail, active style chip, highlighted accent swatch, or retained theme toggle.",
        "Use this skill for Ubuntu Settings tasks that explicitly target `Appearance`, wallpaper selection, accent color, style, or light/dark theme mode."
      ],
      "failureModes": [
        "Acting on the wrong Settings page, especially `Users` or `About`.",
        "Changing a nearby row because the label was not checked against the task.",
        "Treating a legacy red or green annotation as a coordinate instead of a cue."
      ],
      "completenessScore": 35
    },
    {
      "id": "OS_Configure_Accessibility_Visual_and_Assistive_Features",
      "name": "Configure Accessibility Visual and Assistive Features",
      "description": "Change Ubuntu accessibility features such as screen reader, zoom, cursor aids, or visual alerts and verify the exact toggle, selector, or dialog value before leaving Settings.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Configure_Accessibility_Visual_and_Assistive_Features",
      "thumbnail": "assets/skill-library/thumbnails/os--os-configure-accessibility-visual-and-assistive-features.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "",
      "applicability": [],
      "failureModes": [
        "Never reaching `Accessibility` and acting on the desktop or another Settings section.",
        "Selecting a nearby row because the control shape looked familiar but the label was not re-read.",
        "Changing a value inside a dialog and leaving before checking the persistent result on the parent surface."
      ],
      "completenessScore": 35
    },
    {
      "id": "OS_Configure_Dock_and_Desktop_Layout",
      "name": "Configure Dock and Desktop Layout",
      "description": "Change dock visibility, dock placement behavior, desktop icon presentation, or Files desktop-click behavior, then verify the requested state remains active.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Configure_Dock_and_Desktop_Layout",
      "thumbnail": "assets/skill-library/thumbnails/os--os-configure-dock-and-desktop-layout.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings",
        "files",
        "slides"
      ],
      "overview": "",
      "applicability": [
        "dock visibility or edge behavior",
        "desktop icon size or desktop item visibility",
        "Files behavior that changes how folders or items open from the desktop"
      ],
      "failureModes": [
        "Acting on the wrong Settings page because an unrelated page happened to be open already.",
        "Clicking a neighboring toggle or selector without confirming the row label.",
        "Treating a shell-level screenshot or generic desktop screenshot as proof that the requested preference was set."
      ],
      "completenessScore": 35
    },
    {
      "id": "OS_Configure_Keyboard_Input_Sources_and_Shortcuts",
      "name": "Configure Keyboard Input Sources and Shortcuts",
      "description": "Manage keyboard input sources, ordering, custom shortcuts, launcher shortcuts, or shortcut restoration and verify the exact binding or source order.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Configure_Keyboard_Input_Sources_and_Shortcuts",
      "thumbnail": "assets/skill-library/thumbnails/os--os-configure-keyboard-input-sources-and-shortcuts.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "Use this skill when the task is inside Ubuntu Settings and the target surface is `Keyboard` or `Keyboard Shortcuts`, including:",
      "applicability": [
        "adding, removing, or reordering input sources",
        "switching an input-source behavior option",
        "restoring or changing a keyboard shortcut"
      ],
      "failureModes": [
        "Never opening Settings and mistaking a desktop-only screenshot for a usable Keyboard state.",
        "Editing a neighboring shortcut row because the live row label was not re-checked.",
        "Treating example values from the images as the requested values for a new task."
      ],
      "completenessScore": 35
    },
    {
      "id": "OS_Configure_Mouse_and_Touchpad_Behavior",
      "name": "Configure Mouse and Touchpad Behavior",
      "description": "Change mouse speed, natural scrolling, primary button behavior, or touchpad options in Ubuntu Settings and verify the exact visible control state.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Configure_Mouse_and_Touchpad_Behavior",
      "thumbnail": "assets/skill-library/thumbnails/os--os-configure-mouse-and-touchpad-behavior.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "Use Ubuntu Settings to reach `Mouse & Touchpad`, change the requested control on the correct row, and verify that the final toggle, selector, dropdown, or slider state remains visible before leaving the panel.",
      "applicability": [
        "The task explicitly names a mouse, touchpad, scrolling, handedness, click, tap, or pointer-speed setting handled from Ubuntu `Settings` -> `Mouse & Touchpad`.",
        "Success depends on the visible state of a control after the change, not just on opening Settings.",
        "The target setting can be confirmed directly from the live `Mouse & Touchpad` panel by row label and control state."
      ],
      "failureModes": [
        "Opening Settings but staying on the wrong panel and then treating that as completion.",
        "Changing a nearby control because the row label was not re-checked first.",
        "Assuming the click succeeded without confirming the persisted control state."
      ],
      "completenessScore": 35
    },
    {
      "id": "OS_Configure_Multitasking_and_Hot_Corner",
      "name": "Configure Multitasking and Hot Corner",
      "description": "Change Ubuntu Multitasking controls such as Hot Corner, workspace mode, or workspace count and verify the final visible state.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Configure_Multitasking_and_Hot_Corner",
      "thumbnail": "assets/skill-library/thumbnails/os--os-configure-multitasking-and-hot-corner.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "Use this skill for Ubuntu Settings tasks that explicitly target the `Multitasking` panel. Typical requests include enabling or disabling `Hot Corner`, switching between dynamic and fixed workspaces, adjusting workspace count, or changing another control that remains visible on the same panel. Use it when success depends on a visible state that can be checked",
      "applicability": [
        "Use this skill for Ubuntu Settings tasks that explicitly target the `Multitasking` panel.",
        "Typical requests include enabling or disabling `Hot Corner`, switching between dynamic and fixed workspaces, adjusting workspace count, or changing another control that remains visible on the same panel.",
        "Use it when success depends on a visible state that can be checked directly in Settings before exiting."
      ],
      "failureModes": [
        "Acting on a nearby control because the row label was not re-read before clicking.",
        "Copying the example state from an image instead of the state requested by the current task.",
        "Treating the desktop-only entry cards as proof that Settings or `Multitasking` is already open."
      ],
      "completenessScore": 36
    },
    {
      "id": "OS_Configure_Remote_Sharing",
      "name": "Configure Remote Sharing",
      "description": "Work inside Ubuntu Settings > Sharing to configure Remote Desktop or Remote Login, including Legacy VNC, password requirements, on/off states, and visible final summaries.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Configure_Remote_Sharing",
      "thumbnail": "assets/skill-library/thumbnails/os--os-configure-remote-sharing.jpg",
      "imageCount": 18,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "The task explicitly targets Ubuntu Sharing, Remote Desktop, Remote Login, Legacy VNC, password-required remote control, or turning remote access on or off. The requested result can be verified from the Sharing page or from the matching Remote Desktop or Remote Login dialog before it is dismissed.",
      "applicability": [
        "The task explicitly targets Ubuntu Sharing, Remote Desktop, Remote Login, Legacy VNC, password-required remote control, or turning remote access on or off.",
        "The requested result can be verified from the Sharing page or from the matching Remote Desktop or Remote Login dialog before it is dismissed.",
        "The task explicitly targets Ubuntu Sharing, Remote Desktop, Remote Login, Legacy VNC, password-required remote control, or turning remote access on or off."
      ],
      "failureModes": [
        "Mistaking another Sharing row such as Media Sharing for the requested Remote Desktop or Remote Login row.",
        "Leaving the Remote Desktop dialog before verifying that the checkbox, password mode, or on/off toggle really changed.",
        "Treating the Sharing page alone as proof that password-required remote control is set, even though that requirement is only visible inside the Remote Desktop dialog."
      ],
      "completenessScore": 43
    },
    {
      "id": "OS_Configure_Removable_Media",
      "name": "Configure Removable Media",
      "description": "Adjust Ubuntu Settings > Removable Media behavior and verify that the requested row or checkbox remains visibly set.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Configure_Removable_Media",
      "thumbnail": "assets/skill-library/thumbnails/os--os-configure-removable-media.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings",
        "media"
      ],
      "overview": "Use this skill when the task asks for a change inside Ubuntu Settings on the `Removable Media` page. Use it for media-type dropdown rows, the insertion-policy checkbox, or controls inside `Other Media...` when the result must still be visible in Settings. Use it when success depends on reading the final value from the panel, not on assuming the click succeed",
      "applicability": [
        "Use this skill when the task asks for a change inside Ubuntu Settings on the `Removable Media` page.",
        "Use it for media-type dropdown rows, the insertion-policy checkbox, or controls inside `Other Media...` when the result must still be visible in Settings.",
        "Use it when success depends on reading the final value from the panel, not on assuming the click succeeded."
      ],
      "failureModes": [
        "Stopping on the Ubuntu desktop and assuming the target Settings surface has already been reached.",
        "Opening Settings but editing a neighboring row because several dropdowns look alike.",
        "Verifying the wrong row because the selected value looks plausible."
      ],
      "completenessScore": 35
    },
    {
      "id": "OS_Configure_Search_Results",
      "name": "Configure Search Results",
      "description": "Change Search Locations, search-provider visibility, or search-result ordering from Ubuntu Settings > Search and verify the visible row state before leaving the page.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Configure_Search_Results",
      "thumbnail": "assets/skill-library/thumbnails/os--os-configure-search-results.jpg",
      "imageCount": 14,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "search",
        "settings"
      ],
      "overview": "The live task explicitly mentions Ubuntu Search settings, Search Locations, Activities Overview results, or the order of search providers. The requested result can be verified from the Search page itself or from the Search Locations dialog before it is dismissed.",
      "applicability": [
        "The live task explicitly mentions Ubuntu Search settings, Search Locations, Activities Overview results, or the order of search providers.",
        "The requested result can be verified from the Search page itself or from the Search Locations dialog before it is dismissed.",
        "The live task explicitly mentions Ubuntu Search settings, Search Locations, Activities Overview results, or the order of search providers."
      ],
      "failureModes": [
        "Treating another Settings panel as a valid Search match without confirming the Search sidebar row and the Search page title.",
        "Closing the Search Locations dialog before verifying that the requested folder toggle changed to the requested state.",
        "Changing a nearby provider row because the agent followed the example box instead of the live row label."
      ],
      "completenessScore": 39
    },
    {
      "id": "OS_Configure_Sound_Output_and_Alerts",
      "name": "Configure Sound Output And Alerts",
      "description": "Adjust Ubuntu Sound settings by matching the exact sound row, changing only that control, and verifying the final visible state on the Sound page.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Configure_Sound_Output_and_Alerts",
      "thumbnail": "assets/skill-library/thumbnails/os--os-configure-sound-output-and-alerts.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "The task explicitly targets the Sound page in Ubuntu Settings. The final state can be verified from a visible slider, toggle, device row, or selector on the Sound page.",
      "applicability": [
        "The task explicitly targets the Sound page in Ubuntu Settings.",
        "The final state can be verified from a visible slider, toggle, device row, or selector on the Sound page.",
        "The task explicitly targets the Sound page in Ubuntu Settings."
      ],
      "failureModes": [
        "Changing quick settings or another nearby control instead of the requested Sound row.",
        "Leaving the Sound page before verifying the requested slider or toggle state."
      ],
      "completenessScore": 31
    },
    {
      "id": "OS_Configure_Time_and_Date_Preferences",
      "name": "Configure Time and Date Preferences",
      "description": "Change Ubuntu time, date, format, timezone, or automatic time controls and verify the exact requested state remains visible on the Date & Time page.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Configure_Time_and_Date_Preferences",
      "thumbnail": "assets/skill-library/thumbnails/os--os-configure-time-and-date-preferences.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "settings"
      ],
      "overview": "Use this skill when the task explicitly asks for a change inside Ubuntu `Settings > Date & Time`, including time format, timezone, automatic date and time, automatic timezone, manual date, or manual time.",
      "applicability": [],
      "failureModes": [
        "Staying on the desktop and assuming the task has already reached Settings.",
        "Opening the wrong Settings category because the sidebar row label was not checked.",
        "Changing a nearby control with a similar switch or dropdown shape."
      ],
      "completenessScore": 35
    },
    {
      "id": "OS_Control_Processes_and_Application_Sessions_in_Terminal",
      "name": "Control Processes and Application Sessions in Terminal",
      "description": "Use Terminal to start, stop, inspect, or confirm application sessions and processes, then verify the requested state from visible shell output.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Control_Processes_and_Application_Sessions_in_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/os--os-control-processes-and-application-sessions-in-terminal.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal"
      ],
      "overview": "",
      "applicability": [],
      "failureModes": [
        "Running a plausible command against the wrong process, application, path, or shell context.",
        "Treating a typed command as success before checking the resulting output.",
        "Reusing example literals from a screenshot instead of the target named in the current task."
      ],
      "completenessScore": 34
    },
    {
      "id": "OS_Copy_Matching_Files_Or_Directory_Hierarchy_In_Terminal",
      "name": "Copy Matching Files In Terminal",
      "description": "Flat-copy matching files into a destination directory from Terminal and verify the copied file set without accidentally preserving the whole source tree.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Copy_Matching_Files_Or_Directory_Hierarchy_In_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/os--os-copy-matching-files-or-directory-hierarchy-in-terminal.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal",
        "files"
      ],
      "overview": "The task asks for copying files that match a pattern into one destination folder. The destination should contain the matching files themselves rather than a replicated directory hierarchy. Success must be confirmed by a destination listing, file manager view, or an explicit follow-up terminal check.",
      "applicability": [
        "The task asks for copying files that match a pattern into one destination folder.",
        "The destination should contain the matching files themselves rather than a replicated directory hierarchy.",
        "Success must be confirmed by a destination listing, file manager view, or an explicit follow-up terminal check."
      ],
      "failureModes": [
        "Accidentally preserving the source hierarchy when the task wants only the matching files in one folder.",
        "Forgetting to create the destination first or copying to the wrong target path.",
        "Marking success before reading the destination listing that proves the copied files are present."
      ],
      "completenessScore": 31
    },
    {
      "id": "OS_Edit_and_Save_Text_in_Text_Editor",
      "name": "Edit and Save Text in Text Editor",
      "description": "Use Ubuntu Text Editor to enter or revise requested text, save it to the requested file, and verify the visible saved filename.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Edit_and_Save_Text_in_Text_Editor",
      "thumbnail": "assets/skill-library/thumbnails/os--os-edit-and-save-text-in-text-editor.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "save",
        "files",
        "text"
      ],
      "overview": "",
      "applicability": [],
      "failureModes": [
        "Typing correct content into the wrong window because the editor canvas was never focused.",
        "Saving the document with the wrong filename or in the wrong location.",
        "Treating the example screenshot's filename or text as reusable content."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_File_Content_Transform_And_Writeback",
      "name": "File Content Transform And Writeback",
      "description": "Transform file contents and write the result back to a target file from Terminal, then read the written file back before finishing.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_File_Content_Transform_And_Writeback",
      "thumbnail": "assets/skill-library/thumbnails/os--os-file-content-transform-and-writeback.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal",
        "files"
      ],
      "overview": "The task asks for a text transform such as appending markup, replacing content, or rewriting lines into a new output file. Success depends on the transformed file contents, not only on terminal output from the transform command.",
      "applicability": [
        "The task asks for a text transform such as appending markup, replacing content, or rewriting lines into a new output file.",
        "Success depends on the transformed file contents, not only on terminal output from the transform command.",
        "The task asks for a text transform such as appending markup, replacing content, or rewriting lines into a new output file."
      ],
      "failureModes": [
        "Stopping after the transform command without ever reading the written file back.",
        "Transforming the content in stdout only and forgetting to write or overwrite the requested output file.",
        "Writing to the wrong destination path or using shell escaping that changes the intended text."
      ],
      "completenessScore": 31
    },
    {
      "id": "OS_Inspect_and_Filter_File_Content_in_Terminal",
      "name": "Inspect And Filter File Content In Terminal",
      "description": "Read, count, search, sort, or filter file content in Terminal when the workflow stays read-only and the verification signal is visible shell output.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Inspect_and_Filter_File_Content_in_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/os--os-inspect-and-filter-file-content-in-terminal.jpg",
      "imageCount": 6,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "search",
        "terminal",
        "files"
      ],
      "overview": "The task asks for `cat`, `grep`, `wc`, `head`, `tail`, `cut`, `sort`, or similar read-only content inspection in Terminal. Success depends on the visible terminal output rather than saving a transformed file.",
      "applicability": [
        "The task asks for `cat`, `grep`, `wc`, `head`, `tail`, `cut`, `sort`, or similar read-only content inspection in Terminal.",
        "Success depends on the visible terminal output rather than saving a transformed file.",
        "The task asks for `cat`, `grep`, `wc`, `head`, `tail`, `cut`, `sort`, or similar read-only content inspection in Terminal."
      ],
      "failureModes": [
        "Using a writeback transform when the task only asked for inspection or counting.",
        "Stopping at command entry without reading the resulting output.",
        "Reading the wrong file or wrong directory because the current shell path was never checked."
      ],
      "completenessScore": 31
    },
    {
      "id": "OS_Install_App_Via_Snap_Flatpak_And_AppCenter",
      "name": "Install App Via Snap Flatpak And App Center",
      "description": "Install desktop applications through Ubuntu Software or a Snap-first path, with explicit visual states for search results, app details, install start, and store authentication.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Install_App_Via_Snap_Flatpak_And_AppCenter",
      "thumbnail": "assets/skill-library/thumbnails/os--os-install-app-via-snap-flatpak-and-appcenter.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "search"
      ],
      "overview": "The task names an end-user app and the live environment routes installation through Ubuntu Software, Snap Store, or another app-center style surface. The workflow needs visual confirmation that the correct app page or install state is visible before the install is considered in progress.",
      "applicability": [
        "The task names an end-user app and the live environment routes installation through Ubuntu Software, Snap Store, or another app-center style surface.",
        "The workflow needs visual confirmation that the correct app page or install state is visible before the install is considered in progress.",
        "The task names an end-user app and the live environment routes installation through Ubuntu Software, Snap Store, or another app-center style surface."
      ],
      "failureModes": [
        "Clicking the wrong search result because only the app name fragment was checked.",
        "Assuming an install succeeded before the button changed or the store actually began preparing the install.",
        "Ignoring an authentication dialog that blocks the install from proceeding."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Install_Remove_and_Verify_Packages_in_Terminal",
      "name": "Install Remove And Verify Packages In Terminal",
      "description": "Run apt or dpkg style package workflows in Terminal and verify the exact package state from shell output, including decisive package-not-found or authentication failures.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Install_Remove_and_Verify_Packages_in_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/os--os-install-remove-and-verify-packages-in-terminal.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal"
      ],
      "overview": "The package task is meant to be completed in Terminal with `apt`, `dpkg`, `apt-cache`, `apt search`, or a package command check. Success or failure must be proved by visible shell output rather than by a later desktop cleanup view.",
      "applicability": [
        "The package task is meant to be completed in Terminal with `apt`, `dpkg`, `apt-cache`, `apt search`, or a package command check.",
        "Success or failure must be proved by visible shell output rather than by a later desktop cleanup view.",
        "The package task is meant to be completed in Terminal with `apt`, `dpkg`, `apt-cache`, `apt search`, or a package command check."
      ],
      "failureModes": [
        "Treating a typed package command as success before reading the shell output.",
        "Treating a sudo or auth prompt as if it already proved the package install or removal happened.",
        "Reusing the wrong credential, or repeatedly submitting an empty password, when the shell is clearly still blocked on authentication."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Manage_Bluetooth_Settings",
      "name": "Manage Bluetooth Settings",
      "description": "Navigate Ubuntu Settings to the Bluetooth page, reason about adapter status, toggle the Bluetooth master switch when available, and verify the visible final Bluetooth state.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Manage_Bluetooth_Settings",
      "thumbnail": "assets/skill-library/thumbnails/os--os-manage-bluetooth-settings.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "ubuntu os"
      ],
      "overview": "The task explicitly targets Bluetooth settings, Bluetooth state, or the Bluetooth master switch in Ubuntu Settings. The result can be verified from the Bluetooth page itself rather than from a generic quick-settings popover.",
      "applicability": [
        "The task explicitly targets Bluetooth settings, Bluetooth state, or the Bluetooth master switch in Ubuntu Settings.",
        "The result can be verified from the Bluetooth page itself rather than from a generic quick-settings popover.",
        "The task explicitly targets Bluetooth settings, Bluetooth state, or the Bluetooth master switch in Ubuntu Settings."
      ],
      "failureModes": [
        "Treating the Bluetooth status text as if it were the toggle itself.",
        "Looping on a disabled switch even after the page already says no adapter is available.",
        "Forcing a battery or power workflow onto the Bluetooth page."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Manage_Calendar_Events",
      "name": "Manage Calendar Events",
      "description": "Create or edit calendar events in Ubuntu Calendar and verify that the saved event appears with the requested details.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Manage_Calendar_Events",
      "thumbnail": "assets/skill-library/thumbnails/os--os-manage-calendar-events.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "save"
      ],
      "overview": "Use Ubuntu Calendar to create or edit an event, save it, and verify that the requested details are visible on the correct date before you finish.",
      "applicability": [
        "Use this skill when the task asks you to add, edit, or confirm a calendar event in Ubuntu Calendar.",
        "The task should already specify the details you need to enter, such as title, date, time, location, or notes.",
        "This skill is for the Calendar workflow itself, not for unrelated system settings changes that may appear in source screenshots."
      ],
      "failureModes": [
        "You are still on the Ubuntu desktop and have not opened Calendar yet.",
        "Another window, such as Settings, is covering Calendar when you should be editing or verifying the event.",
        "The event was saved without checking that it appears on the intended date."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Manage_Files_and_Archives_in_Files",
      "name": "Manage Files and Archives in Files",
      "description": "Use Ubuntu Files or the desktop file surface to open the right location, manipulate visible items, and verify the requested file result.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Manage_Files_and_Archives_in_Files",
      "thumbnail": "assets/skill-library/thumbnails/os--os-manage-files-and-archives-in-files.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "files"
      ],
      "overview": "",
      "applicability": [
        "opening Files and navigating to the correct folder, Home view, or Trash",
        "creating, moving, copying, restoring, compressing, or deleting visible files or folders in Files",
        "emptying Trash or checking whether files are present or absent after a GUI file action"
      ],
      "failureModes": [
        "Opening Files but never reaching the requested folder, Home surface, or Trash before acting.",
        "Acting on the wrong selected item because the example filenames were treated as instructions.",
        "Verifying success from the wrong surface, such as checking the desktop when the task expects a Files folder view, or the reverse."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Manage_Notifications",
      "name": "Manage Notifications",
      "description": "Change Do Not Disturb, lock-screen notification visibility, or per-app notification toggles and verify the exact notification state.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Manage_Notifications",
      "thumbnail": "assets/skill-library/thumbnails/os--os-manage-notifications.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "ubuntu os"
      ],
      "overview": "",
      "applicability": [],
      "failureModes": [
        "Staying on the desktop or another panel because a grounded image highlighted the wrong region.",
        "Changing the wrong app row because multiple notification toggles look similar.",
        "Verifying on the wrong Settings page, especially a different panel that also has switches."
      ],
      "completenessScore": 35
    },
    {
      "id": "OS_Manage_Power_Blanking_And_Battery_Indicators",
      "name": "Manage Power Blanking And Battery Indicators",
      "description": "Work on Ubuntu Power settings such as screen blanking, automatic suspend, or related indicator-facing controls, and explicitly recognize when the battery-percentage row is absent from the visible Power surface.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Manage_Power_Blanking_And_Battery_Indicators",
      "thumbnail": "assets/skill-library/thumbnails/os--os-manage-power-blanking-and-battery-indicators.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "ubuntu os"
      ],
      "overview": "The task targets Ubuntu Power settings such as screen blanking, automatic suspend, or battery-indicator related behavior. The result must be verified from the Power page itself or from a clearly visible follow-up indicator state.",
      "applicability": [
        "The task targets Ubuntu Power settings such as screen blanking, automatic suspend, or battery-indicator related behavior.",
        "The result must be verified from the Power page itself or from a clearly visible follow-up indicator state.",
        "The task targets Ubuntu Power settings such as screen blanking, automatic suspend, or battery-indicator related behavior."
      ],
      "failureModes": [
        "Drifting to Appearance or Dock controls during a Power task.",
        "Treating a general Power page screenshot as if it proved a specific row value without reading the live label.",
        "Staying in a GUI search loop after the requested row is missing even though a direct `gsettings` fallback would give a decisive answer."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Manage_Privacy_Location_Proxy_and_Connectivity",
      "name": "Manage Privacy Location Proxy and Connectivity",
      "description": "Change privacy or connectivity-adjacent controls such as location services, network proxy, file history, automatic screen lock, connectivity checking, or similar Ubuntu Settings controls and verify the exact resulting state.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Manage_Privacy_Location_Proxy_and_Connectivity",
      "thumbnail": "assets/skill-library/thumbnails/os--os-manage-privacy-location-proxy-and-connectivity.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "files"
      ],
      "overview": "",
      "applicability": [
        "Use this skill for Ubuntu Settings tasks that change a privacy, search, notifications, network, proxy, connectivity, or closely related system control and then require the final state to remain visible.",
        "It fits best when the task names a specific row, toggle, selector, or mode that can be verified directly in the Settings content pane.",
        "Keep the workflow text-first: open Settings, navigate by sidebar or Settings search, change the named row only, and confirm that the resulting state persists on the main page."
      ],
      "failureModes": [
        "Matching one of the generic desktop cards even though the screenshot already shows a Settings page.",
        "Changing a neighboring row because the label was not re-read after scrolling.",
        "Reusing example values from the cards instead of the task's actual requested state."
      ],
      "completenessScore": 36
    },
    {
      "id": "OS_Manage_Users_Avatars_and_System_Identity_in_Settings",
      "name": "Manage Users Avatars and System Identity in Settings",
      "description": "Use Ubuntu Settings to open the Users surface, adjust identity-related controls, and verify the resulting account state from visible cues.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Manage_Users_Avatars_and_System_Identity_in_Settings",
      "thumbnail": "assets/skill-library/thumbnails/os--os-manage-users-avatars-and-system-identity-in-settings.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "ubuntu os"
      ],
      "overview": "Use this skill when the task is about Ubuntu `Settings > Users`: opening the Users surface, selecting a user account, changing an identity-related control such as avatar or login behavior, creating a user, or checking a user-status result that must remain visible on the page.",
      "applicability": [],
      "failureModes": [
        "Mistaking a desktop-only screenshot for proof that the Users surface is already open.",
        "Changing the wrong row because similar controls appear close together in the account detail pane.",
        "Forgetting to unlock the page before trying to modify a protected setting."
      ],
      "completenessScore": 35
    },
    {
      "id": "OS_Manage_Users_and_Groups_in_Terminal",
      "name": "Manage Users and Groups in Terminal",
      "description": "Create, rename, delete, or inspect Linux users and groups in Terminal, and verify the final account, group membership, ownership, or permission view from visible shell output.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Manage_Users_and_Groups_in_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/os--os-manage-users-and-groups-in-terminal.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal"
      ],
      "overview": "Use this skill when the task is primarily a Terminal workflow involving Linux users, groups, admin membership, ownership, or permission inspection and the completion condition must be confirmed from visible shell output.",
      "applicability": [
        "list users, groups, or the current user's identity",
        "add, rename, or remove a user or group from Terminal",
        "change admin or sudo membership from Terminal"
      ],
      "failureModes": [
        "Running the right kind of command against the wrong user, group, or path.",
        "Treating a typed command as completion before checking the resulting shell output.",
        "Copying example literals from the screenshots instead of the task's requested values."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Modify_Files_and_Folders_in_Terminal",
      "name": "Modify Files and Folders in Terminal",
      "description": "Create, move, copy, rename, or delete files and folders in Terminal and verify the resulting path or directory contents explicitly.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Modify_Files_and_Folders_in_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/os--os-modify-files-and-folders-in-terminal.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal",
        "files"
      ],
      "overview": "",
      "applicability": [
        "Use this skill when the task is primarily a shell workflow: create, copy, move, rename, or delete files or folders from Terminal.",
        "Use it when the completion condition should be proven from terminal state, such as the current path, a returned listing, or a direct command result.",
        "Do not use it for tasks that are mainly GUI file-manager work unless Terminal is still the execution and verification surface."
      ],
      "failureModes": [
        "Running the right-looking command in the wrong directory.",
        "Reusing example names or patterns instead of the live task values.",
        "Treating the typed command as completion without checking output."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Navigate_and_Inspect_Directories_in_Terminal",
      "name": "Navigate and Inspect Directories in Terminal",
      "description": "Use Terminal to navigate directories, inspect paths, list contents, or show trees and verify the exact current location or listing result.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Navigate_and_Inspect_Directories_in_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/os--os-navigate-and-inspect-directories-in-terminal.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal"
      ],
      "overview": "",
      "applicability": [
        "Use this skill when the task is mainly a Terminal workflow: open or focus Terminal, move to the correct directory, inspect the current path, list directory contents, or show a tree.",
        "Use it when success must be verified from visible shell output such as the current working directory, a directory listing, or tree output.",
        "Do not use it for Terminal appearance or preferences tasks unless another skill explicitly covers those settings."
      ],
      "failureModes": [
        "Running a correct-looking command from the wrong directory.",
        "Reading stale output from earlier commands instead of the newest result.",
        "Stopping after typing a command without checking the resulting shell output."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Query_System_State_in_Terminal",
      "name": "Query System State in Terminal",
      "description": "Inspect Ubuntu system state from Terminal, run the exact query command the task asks for, and verify the requested result from visible shell output.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Query_System_State_in_Terminal",
      "thumbnail": "assets/skill-library/thumbnails/os--os-query-system-state-in-terminal.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal"
      ],
      "overview": "Use this skill when the task asks for Ubuntu system facts that are best retrieved in Terminal and the success condition depends on visible shell output. Typical targets include the active shell, installed shells, release details, package or Python environment state, resource usage, device status, module status, or a file or path check that must be confirmed ",
      "applicability": [],
      "failureModes": [
        "Running a plausible command in the wrong directory or against the wrong target.",
        "Reading only the command text and not the output.",
        "Accepting an unrelated app window as evidence that the terminal workflow is complete."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Recursive_Pattern_Copy_And_Directory_Replication",
      "name": "Recursive Pattern Copy And Directory Replication",
      "description": "Replicate directory trees or copy matching files recursively while preserving the requested hierarchy, and verify the resulting tree from terminal output instead of guessing from unset variables.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Recursive_Pattern_Copy_And_Directory_Replication",
      "thumbnail": "assets/skill-library/thumbnails/os--os-recursive-pattern-copy-and-directory-replication.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal",
        "files"
      ],
      "overview": "The task asks for copying an entire folder hierarchy or preserving parent directories for matching files. The destination may need `mkdir -p`, `cp -a`, `cp --parents`, or `rsync -a` style behavior. The success proof is a directory tree, recursive listing, or explicit terminal output that shows the copied structure.",
      "applicability": [
        "The task asks for copying an entire folder hierarchy or preserving parent directories for matching files.",
        "The destination may need `mkdir -p`, `cp -a`, `cp --parents`, or `rsync -a` style behavior.",
        "The success proof is a directory tree, recursive listing, or explicit terminal output that shows the copied structure."
      ],
      "failureModes": [
        "Copying files flat into one folder when the task asked for the directory hierarchy to remain intact.",
        "Looping on empty `sourceDir` or `targetDir` guesses instead of reading the real source and destination from the live task state.",
        "Skipping the final recursive verification and assuming the hierarchy exists because a copy command was typed."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Restore_Items_From_Trash_And_Verify_Recovery_Path",
      "name": "Restore Items From Trash And Verify Recovery Path",
      "description": "Inspect Trash metadata or entries, restore the right file or folder, and verify that it returns to the intended destination.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Restore_Items_From_Trash_And_Verify_Recovery_Path",
      "thumbnail": "assets/skill-library/thumbnails/os--os-restore-items-from-trash-and-verify-recovery-path.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "files"
      ],
      "overview": "Use this skill when a task is about recovering a file or folder from Trash and success depends on restoring the correct item to the correct destination. It fits both terminal-driven and Files-driven restores as long as the agent must confirm the recovered path after the restore.",
      "applicability": [],
      "failureModes": [
        "Restoring the wrong item because the metadata or original path was never confirmed.",
        "Treating the restore action as success without checking the recovered destination.",
        "Verifying the wrong location because the example screenshot's path was copied instead of deriving the destination from the current task."
      ],
      "completenessScore": 33
    },
    {
      "id": "OS_Set_Default_Applications",
      "name": "Set Default Applications",
      "description": "Change Ubuntu default applications and verify the requested selection remains visible in the Default Applications panel.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_Set_Default_Applications",
      "thumbnail": "assets/skill-library/thumbnails/os--os-set-default-applications.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "ubuntu os"
      ],
      "overview": "Use this skill to open Ubuntu Settings, reach `Default Applications`, change the requested default-app row, and verify that the chosen app remains visible on the settled panel.",
      "applicability": [
        "The task asks to change a default app such as the web browser, mail app, calendar, music player, video app, or photo app.",
        "Success depends on the final selected value staying visible in the `Default Applications` panel.",
        "Ubuntu Settings is available from the current desktop or can be brought into focus."
      ],
      "failureModes": [
        "Opening Settings but stopping on the wrong category.",
        "Changing the wrong row because nearby dropdowns look similar.",
        "Assuming the click succeeded without checking the final visible selected value."
      ],
      "completenessScore": 36
    },
    {
      "id": "OS_User_Provisioning_With_Home_Scoping_And_SSH_Readiness",
      "name": "User Provisioning With Home Scoping And SSH Readiness",
      "description": "Create or scope a user from Terminal, verify identity and home-path state with shell commands, and treat a drift into the GUI Users dialog as a failure cue unless the task explicitly wants the GUI path.",
      "domain": "os",
      "domainLabel": "Ubuntu OS",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/os/OS_User_Provisioning_With_Home_Scoping_And_SSH_Readiness",
      "thumbnail": "assets/skill-library/thumbnails/os--os-user-provisioning-with-home-scoping-and-ssh-readiness.jpg",
      "imageCount": 8,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "terminal"
      ],
      "overview": "The task is about creating a user, adjusting a home path, checking account identity, or preparing a user for SSH-style access from Terminal. The decisive verification should come from `id`, `getent`, `groups`, `ls -ld`, or other shell output rather than from the Settings Users page.",
      "applicability": [
        "The task is about creating a user, adjusting a home path, checking account identity, or preparing a user for SSH-style access from Terminal.",
        "The decisive verification should come from `id`, `getent`, `groups`, `ls -ld`, or other shell output rather than from the Settings Users page.",
        "The task is about creating a user, adjusting a home path, checking account identity, or preparing a user for SSH-style access from Terminal."
      ],
      "failureModes": [
        "Confusing the current account's sudo credential with the password that should be assigned to the new user.",
        "Repeating blank-password submissions at a sudo prompt and treating the stalled prompt as progress.",
        "Switching into the GUI Users page after a terminal permission or SSH task already started."
      ],
      "completenessScore": 33
    },
    {
      "id": "THUNDERBIRD_Add_or_Remove_Thunderbird_Chat_Accounts",
      "name": "Add or Remove Thunderbird Chat Accounts",
      "description": "Use Thunderbird Account Settings and the chat account wizard to remove existing chat accounts or add a new IRC, XMPP, Matrix, or similar entry.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Add_or_Remove_Thunderbird_Chat_Accounts",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-add-or-remove-thunderbird-chat-accounts.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "thunderbird"
      ],
      "overview": "Handle Thunderbird chat-account lifecycle work by removing an existing chat account from Account Settings or creating a new chat account from the built-in wizard.",
      "applicability": [
        "Use this skill when the task explicitly names IRC, XMPP, Matrix, Odonklasniki, or another chat account type inside Thunderbird.",
        "Do not use this skill for ordinary mail-account setup."
      ],
      "failureModes": [
        "Removing the wrong account because the selected row was not verified before opening Account Actions.",
        "Picking the wrong chat protocol when the wizard shows multiple account types at once."
      ],
      "completenessScore": 36
    },
    {
      "id": "THUNDERBIRD_Apply_Automatic_Filters_To_Subfolders",
      "name": "Apply Automatic Filters To Subfolders",
      "description": "Create or edit concrete Thunderbird rules that target visible subfolders and stay enabled for automatic runs; do not use this skill for prefs-only subfolder auto-apply tasks.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Apply_Automatic_Filters_To_Subfolders",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-apply-automatic-filters-to-subfolders.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "files"
      ],
      "overview": "Work inside Thunderbird's filter workflow when a concrete rule already needs to target an account or local subfolder and stay enabled for automatic runs. Do not use this skill as the primary plan for global prefs-only tasks about whether Thunderbird can auto-apply filters to subfolders at all.",
      "applicability": [
        "Use this skill when a concrete message filter must move or copy mail into a local or account subfolder automatically from inside the normal filter workflow.",
        "Prefer this skill only after the task has clearly reached a real rule or subfolder-target workflow; for prefs-only questions about subfolder auto-apply behavior, prefer the server or advanced-prefs skill first."
      ],
      "failureModes": [
        "Saving the rule against the wrong mailbox tree because the destination subfolder was not verified first.",
        "Creating the filter action correctly but leaving automatic runs disabled.",
        "Opening a brand-new rule editor for a prefs-only task that really asks whether Thunderbird can auto-apply existing filters on subfolders."
      ],
      "completenessScore": 33
    },
    {
      "id": "THUNDERBIRD_Apply_Tags_Stars_and_Junk_Status_to_Messages",
      "name": "Apply Tags Stars and Junk Status to Messages",
      "description": "Create or edit tags and change visible Thunderbird message status markers such as star state or junk classification.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Apply_Tags_Stars_and_Junk_Status_to_Messages",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-apply-tags-stars-and-junk-status-to-messages.jpg",
      "imageCount": 11,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "email"
      ],
      "overview": "Handle mailbox-state edits that stay on existing messages: manage Thunderbird tags, then change visible message markers such as star or junk status and verify the result.",
      "applicability": [
        "Use this skill when the task changes tags, stars, junk state, or similar visible message status markers.",
        "Do not use this skill for moving messages into folders unless status change is the main goal."
      ],
      "failureModes": [
        "Editing the wrong tag because the target tag row was not verified in Manage Tags.",
        "Marking the wrong message because the selected mailbox row changed before the state action was opened."
      ],
      "completenessScore": 38
    },
    {
      "id": "THUNDERBIRD_Compose_Format_and_Send_Thunderbird_Emails",
      "name": "Compose Format and Send Thunderbird Emails",
      "description": "Create a new Thunderbird message, fill headers and body content, optionally format the body, and send it.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Compose_Format_and_Send_Thunderbird_Emails",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-compose-format-and-send-thunderbird-emails.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "email"
      ],
      "overview": "Handle the standard new-message workflow in Thunderbird: open a fresh composer, fill the headers and body, apply visible formatting when required, and send the message.",
      "applicability": [
        "Use this skill for fresh outgoing emails rather than replies, forwards, or draft edits.",
        "This skill ends when the compose window is ready to send or the send action is executed."
      ],
      "failureModes": [
        "Opening a reply or draft flow instead of a fresh message window.",
        "Sending before the visible body formatting matches the task."
      ],
      "completenessScore": 35
    },
    {
      "id": "THUNDERBIRD_Configure_Quote_Prefix_And_Reply_Formatting",
      "name": "Configure Quote Prefix And Reply Formatting",
      "description": "Configure Thunderbird reply quoting with the account-level auto-quote control first, and use Config Editor only for explicitly named advanced reply preferences.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Configure_Quote_Prefix_And_Reply_Formatting",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-configure-quote-prefix-and-reply-formatting.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "settings"
      ],
      "overview": "Control Thunderbird reply-formatting behavior by first checking the account-level Composition and Addressing controls. When the task says quoted text should have no indentation or `>` at all, disable automatic quoting on the identity page. Use Config Editor only for explicitly named reply-header or quote-prefix preferences.",
      "applicability": [
        "Use this skill when the task is about reply indentation, quote prefix characters, reply placement, or reply and forward signature rules.",
        "Do not use this skill for general autosave or spellcheck defaults unless the task explicitly talks about reply formatting."
      ],
      "failureModes": [
        "Opening Config Editor for a simple \"remove the > and indentation\" task that only needs the account-level automatic-quote checkbox.",
        "Editing the wrong Config Editor preference row because the named reply preference was not verified first.",
        "Searching generic `quote` or `prefix` strings instead of the concrete `mailnews.reply_header_type` row when the task uses the shorthand `mailnews.reply_head_type`."
      ],
      "completenessScore": 35
    },
    {
      "id": "THUNDERBIRD_Configure_Send_Only_SMTP_Accounts",
      "name": "Configure Send Only SMTP Accounts",
      "description": "Configure Thunderbird outgoing SMTP accounts or profiles for send-only use cases without broad incoming-mail setup guidance.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Configure_Send_Only_SMTP_Accounts",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-configure-send-only-smtp-accounts.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings",
        "files"
      ],
      "overview": "Reach Thunderbird’s outgoing-only mail-account path, expose manual outgoing settings when needed, and verify that the intended SMTP profile is the active default without broad incoming-mail guidance.",
      "applicability": [
        "Use this skill when the task is about send-only mail setup, manual outgoing server exposure, or choosing the default SMTP profile.",
        "Do not use this skill for general identity text edits once the account already exists."
      ],
      "failureModes": [
        "Falling into ordinary incoming-mail configuration instead of staying on the outgoing-only path.",
        "Choosing the wrong SMTP row when multiple similarly named profiles exist."
      ],
      "completenessScore": 33
    },
    {
      "id": "THUNDERBIRD_Configure_Server_Retrieval_Retention_and_Cache_Settings",
      "name": "Configure Server Retrieval Retention and Cache Settings",
      "description": "Change Thunderbird server retrieval or closely related persisted account prefs, including incoming-filter auto-apply behavior, and verify the saved values.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Configure_Server_Retrieval_Retention_and_Cache_Settings",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-configure-server-retrieval-retention-and-cache-settings.jpg",
      "imageCount": 5,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "save",
        "settings"
      ],
      "overview": "Adjust Thunderbird server retrieval cadence, deletion policy, per-account Synchronization & Storage retention, General > Disk Space cache limits, or closely related persisted account prefs such as incoming-filter auto-apply behavior, then verify the value from the same scoped surface.",
      "applicability": [
        "Use this skill when the task changes startup retrieval, deletion semantics, retention, cache sizing, or advanced persisted account prefs such as incoming-filter auto-apply behavior.",
        "Do not use this skill for composition defaults or reply formatting."
      ],
      "failureModes": [
        "Editing global preferences instead of the target account’s server or storage page.",
        "Editing account storage settings when the task actually targets global General > Disk Space cache controls.",
        "Leaving the page before verifying the final numeric or checkbox value that proves the setting persisted."
      ],
      "completenessScore": 32
    },
    {
      "id": "THUNDERBIRD_Configure_Thunderbird_Calendar_Views_and_Workweek",
      "name": "Configure Thunderbird Calendar Views and Workweek",
      "description": "Use Thunderbird Calendar preferences to change date format, visible week span, working days, or other calendar display settings.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Configure_Thunderbird_Calendar_Views_and_Workweek",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-configure-thunderbird-calendar-views-and-workweek.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "settings"
      ],
      "overview": "Change Thunderbird Calendar display defaults such as week span, previous-week display, working days, and short-date presentation from Calendar preferences.",
      "applicability": [
        "Use this skill when the task is about Calendar view spans, workweek days, or date-format display values.",
        "Do not use this skill for creating or editing calendar events."
      ],
      "failureModes": [
        "Editing event content instead of Calendar display preferences.",
        "Changing one display control but not confirming the rest of the requested workweek or span values."
      ],
      "completenessScore": 33
    },
    {
      "id": "THUNDERBIRD_Configure_Thunderbird_Layout_And_Visible_Chrome",
      "name": "Configure Thunderbird Layout And Visible Chrome",
      "description": "Adjust visible Thunderbird chrome such as panes, bars, toolbars, tab cleanup, and layout arrangement.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Configure_Thunderbird_Layout_And_Visible_Chrome",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-configure-thunderbird-layout-and-visible-chrome.jpg",
      "imageCount": 5,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "Change Thunderbird pane layout and visible chrome such as the status bar, space toolbar, or related bars from the View path, then confirm the visible shell state.",
      "applicability": [
        "Use this skill for pane layout, visible bars, toolbar visibility, straight-view style changes, and similar shell-level Thunderbird chrome adjustments.",
        "Do not use this skill for theme, font-color, or display-color changes that belong to the theme and display skill."
      ],
      "failureModes": [
        "Toggling the wrong bar because the submenu entry was not verified first.",
        "Stopping at the menu without confirming the visible shell state on the actual Thunderbird surface."
      ],
      "completenessScore": 32
    },
    {
      "id": "THUNDERBIRD_Configure_Thunderbird_Mail_Composition_Preferences",
      "name": "Configure Thunderbird Mail Composition Preferences",
      "description": "Configure Thunderbird global composition defaults such as autosave, spellcheck, link previews, sending format, and address-handling behavior.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Configure_Thunderbird_Mail_Composition_Preferences",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-configure-thunderbird-mail-composition-preferences.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "formatting",
        "save",
        "settings"
      ],
      "overview": "Change Thunderbird’s global composition defaults such as autosave, spellcheck, link previews, sending format, and address handling from the Composition settings page.",
      "applicability": [
        "Use this skill when the task changes general authoring defaults that apply to new compose windows.",
        "Do not use this skill for reply quote behavior, which now lives in the dedicated quote-formatting skill."
      ],
      "failureModes": [
        "Using the account-level reply-formatting page instead of the global Composition defaults page.",
        "Changing autosave or spellcheck values without verifying the final visible setting state."
      ],
      "completenessScore": 35
    },
    {
      "id": "THUNDERBIRD_Configure_Thunderbird_Themes_And_Display_Colors",
      "name": "Configure Thunderbird Themes And Display Colors",
      "description": "Change Thunderbird theme, visible colors, contrast behavior, and related display defaults from Add-ons Manager or Settings.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Configure_Thunderbird_Themes_And_Display_Colors",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-configure-thunderbird-themes-and-display-colors.jpg",
      "imageCount": 5,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "Change Thunderbird theme and display colors from Add-ons Manager or the Fonts & Colors settings path, and verify the visible reading surface after the change.",
      "applicability": [
        "Use this skill for dark or light theme changes, custom text or background colors, high-contrast behavior, and font-size or visible display-color adjustments.",
        "Do not use this skill for layout or bar visibility changes that belong to the visible-chrome skill."
      ],
      "failureModes": [
        "Changing only the theme row or only the color dialog when the task explicitly asked for both.",
        "Leaving auxiliary settings tabs open without checking the actual mail surface that the user will see afterward."
      ],
      "completenessScore": 32
    },
    {
      "id": "THUNDERBIRD_Create_Calendar_Events_and_Send_Invitations",
      "name": "Create Calendar Events and Send Invitations",
      "description": "Open the Thunderbird event editor, set event details, add attendees when needed, and save or send the event.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Create_Calendar_Events_and_Send_Invitations",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-create-calendar-events-and-send-invitations.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "save"
      ],
      "overview": "Create Thunderbird calendar events, fill their core details, and add attendees or invitation behaviors when the task explicitly requires meeting invites.",
      "applicability": [
        "Use this skill for event creation, editing core event fields, or adding attendees inside Thunderbird Calendar.",
        "Do not use this skill for calendar subscriptions or display preferences."
      ],
      "failureModes": [
        "Opening a task editor instead of the calendar event editor.",
        "Editing core event fields but forgetting to verify invitation settings or attendee list state."
      ],
      "completenessScore": 37
    },
    {
      "id": "THUNDERBIRD_Create_and_Maintain_Thunderbird_Message_Filters",
      "name": "Create and Maintain Thunderbird Message Filters",
      "description": "Create, edit, reorder, delete, and run Thunderbird message filters without specializing to subfolder automation.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Create_and_Maintain_Thunderbird_Message_Filters",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-create-and-maintain-thunderbird-message-filters.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "files",
        "email"
      ],
      "overview": "Create, edit, reorder, delete, and run Thunderbird message filters while keeping the standard filter-management workflow separate from specialized subfolder automation.",
      "applicability": [
        "Use this skill for standard rule creation, deletion, reordering, enabling, disabling, or manual runs in Message Filters.",
        "Prefer the dedicated subfolder-automation skill when the task explicitly depends on automatic runs into a mailbox subfolder."
      ],
      "failureModes": [
        "Creating a standard rule in the wrong account because the Message Filters dialog scope was not checked.",
        "Deleting or reordering the wrong rule from the filter list because the selected row changed."
      ],
      "completenessScore": 33
    },
    {
      "id": "THUNDERBIRD_Export_Messages_To_Individual_EML_Files",
      "name": "Export Messages To Individual EML Files",
      "description": "Save Thunderbird messages as separate .eml files, including backup-like exports to a local directory.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Export_Messages_To_Individual_EML_Files",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-export-messages-to-individual-eml-files.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "export",
        "save",
        "files",
        "email"
      ],
      "overview": "Use Thunderbird’s message export surface to save selected messages into local files, with an emphasis on the result-facing path that produces separate `.eml` files in a chosen directory.",
      "applicability": [
        "Use this skill when the task backs up or exports selected messages to local files.",
        "Prefer this skill over compose or folder-management guidance when the goal is the exported file output itself."
      ],
      "failureModes": [
        "Using a compose or attachment-save path instead of the message-export surface.",
        "Choosing the wrong destination directory and losing the result-facing local output."
      ],
      "completenessScore": 35
    },
    {
      "id": "THUNDERBIRD_Find_Target_Messages_in_Thunderbird_Mailboxes",
      "name": "Find Target Messages in Thunderbird Mailboxes",
      "description": "Open the relevant mailbox and isolate the correct existing message before a downstream action.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Find_Target_Messages_in_Thunderbird_Mailboxes",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-find-target-messages-in-thunderbird-mailboxes.jpg",
      "imageCount": 5,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "email"
      ],
      "overview": "Open the correct mailbox or folder and isolate the intended Thunderbird message row before a downstream action changes it.",
      "applicability": [
        "Use this skill when the main challenge is locating the right existing message by sender, subject, folder, or recency.",
        "Pair it with another skill when the task only starts after the correct message row is selected."
      ],
      "failureModes": [
        "Opening the wrong mailbox branch when multiple accounts expose similar folder names.",
        "Acting on a visually similar message row without checking sender, subject, or recency."
      ],
      "completenessScore": 32
    },
    {
      "id": "THUNDERBIRD_Install_and_Configure_Thunderbird_Add_ons",
      "name": "Install and Configure Thunderbird Add-ons",
      "description": "Open Add-ons Manager, install a Thunderbird extension or theme, and adjust extension settings when the task asks for a post-install change.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Install_and_Configure_Thunderbird_Add_ons",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-install-and-configure-thunderbird-add-ons.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "settings"
      ],
      "overview": "Open Thunderbird Add-ons Manager, install the requested extension or theme, and verify any post-install option changes from the add-on’s own settings surface.",
      "applicability": [
        "Use this skill for extension or theme installation plus immediate add-on-specific settings changes.",
        "Do not use this skill for built-in appearance settings that do not require Add-ons Manager."
      ],
      "failureModes": [
        "Installing the wrong add-on because the card title was not verified.",
        "Changing a built-in Thunderbird setting when the task explicitly targets an add-on’s own options."
      ],
      "completenessScore": 36
    },
    {
      "id": "THUNDERBIRD_Manage_Email_Attachments_in_Thunderbird",
      "name": "Manage Email Attachments in Thunderbird",
      "description": "Download attachments from existing messages or rename attachments inside the compose window before sending.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Manage_Email_Attachments_in_Thunderbird",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-manage-email-attachments-in-thunderbird.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "email"
      ],
      "overview": "Handle Thunderbird attachment work from two entry points: save attachments from existing messages, or rename and manage attachments inside the compose window before sending.",
      "applicability": [
        "Use this skill when the task is about attachments rather than the full email body workflow.",
        "Choose the existing-message branch for downloads and the compose branch for renaming or adding attachments before send."
      ],
      "failureModes": [
        "Using the compose attachment workflow for a received-message download task.",
        "Renaming the wrong attachment because the selected attachment chip was not verified first."
      ],
      "completenessScore": 36
    },
    {
      "id": "THUNDERBIRD_Manage_Thunderbird_Address_Book_Contacts",
      "name": "Manage Thunderbird Address Book Contacts",
      "description": "Open Thunderbird Address Book or Edit Card, select the right person, update fields, and save the changes.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Manage_Thunderbird_Address_Book_Contacts",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-manage-thunderbird-address-book-contacts.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "save"
      ],
      "overview": "Open Thunderbird Address Book or account-linked card editing surfaces, select the intended person, change the requested fields, and verify the saved contact values.",
      "applicability": [
        "Use this skill for address-book contacts and personal card edits.",
        "Do not use this skill for mail-account identity text that lives in Account Settings rather than a contact card."
      ],
      "failureModes": [
        "Editing the wrong contact because the selected Address Book row was not verified.",
        "Opening a personal-card editor when the task only targets a normal contact, or vice versa."
      ],
      "completenessScore": 37
    },
    {
      "id": "THUNDERBIRD_Manage_Thunderbird_Home_Surfaces_Profiles_And_Unified_Inbox",
      "name": "Manage Thunderbird Home Surfaces Profiles And Unified Inbox",
      "description": "Return to Thunderbird home surfaces, clean up auxiliary tabs, and route profile-related internal-page tasks through a grounded in-app surface before guessing at startup dialogs.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Manage_Thunderbird_Home_Surfaces_Profiles_And_Unified_Inbox",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-manage-thunderbird-home-surfaces-profiles-and-unified-inbox.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "files"
      ],
      "overview": "Return Thunderbird from auxiliary tabs back to the main mail home surface, and route profile-related internal-page requests through the in-app Troubleshooting Information surface instead of guessing at startup dialogs. Unified-folder guidance is retained only as low-confidence supplemental advice until stronger visual evidence is available.",
      "applicability": [
        "Use this skill when the task says to return to Thunderbird's initial or home surface, clean up extra tabs, or open a profile-related internal page from inside Thunderbird.",
        "Use unified-folder guidance only when the folder-mode control or combined Inbox entry is already visible on screen; otherwise treat that branch as low-confidence.",
        "Do not use this skill for ordinary theme or layout changes once the user is already on the correct surface."
      ],
      "failureModes": [
        "Closing the whole Thunderbird window instead of only closing the blocking tab.",
        "Opening the startup profile chooser dialog when the task explicitly needs an in-app profile-related page.",
        "Treating unified-folder work as menu-guessing when the folder-mode control is not yet visible on screen."
      ],
      "completenessScore": 33
    },
    {
      "id": "THUNDERBIRD_Manage_Thunderbird_Identity_Fields",
      "name": "Manage Thunderbird Identity Fields",
      "description": "Edit saved identity fields such as reply-to, signature text, account display name, organization, and business-card values.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Manage_Thunderbird_Identity_Fields",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-manage-thunderbird-identity-fields.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "save",
        "text"
      ],
      "overview": "Edit saved Thunderbird identity fields such as reply-to, signature text, account display name, organization, and business-card details without treating normal account onboarding as the same workflow.",
      "applicability": [
        "Use this skill when the task edits saved identity values on an existing Thunderbird mail account.",
        "Do not use this skill for send-only SMTP defaults or for account-creation work that primarily belongs to the onboarding flow."
      ],
      "failureModes": [
        "Editing the wrong account because the identity page was not verified before typing.",
        "Changing signature or reply-to values but leaving the business-card edit unsaved in the modal dialog."
      ],
      "completenessScore": 33
    },
    {
      "id": "THUNDERBIRD_Manage_Thunderbird_Tasks_and_Task_Conversions",
      "name": "Manage Thunderbird Tasks and Task Conversions",
      "description": "Create Thunderbird tasks, convert emails into tasks, and adjust reminders, recurrence, postpone actions, progress, or deletion filters.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Manage_Thunderbird_Tasks_and_Task_Conversions",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-manage-thunderbird-tasks-and-task-conversions.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "email"
      ],
      "overview": "Create Thunderbird tasks, convert emails into tasks, and adjust reminders, recurrence, postpone actions, progress, or deletion flows from the task editor and task list.",
      "applicability": [
        "Use this skill for task creation, email-to-task conversion, and task-list maintenance actions.",
        "Do not use this skill for calendar events unless the task explicitly targets Thunderbird Tasks."
      ],
      "failureModes": [
        "Creating a calendar event when the task explicitly needs a Thunderbird task.",
        "Applying a task-list action without first verifying the filter or selected task row."
      ],
      "completenessScore": 37
    },
    {
      "id": "THUNDERBIRD_Onboard_And_Remove_Thunderbird_Mail_Accounts",
      "name": "Onboard And Remove Thunderbird Mail Accounts",
      "description": "Open Thunderbird's existing-mail onboarding flow, keep the filled setup page visible for manual review, and use the matching removal path when the task is about account membership.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Onboard_And_Remove_Thunderbird_Mail_Accounts",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-onboard-and-remove-thunderbird-mail-accounts.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "thunderbird"
      ],
      "overview": "Use Thunderbird's regular mail-account onboarding path for existing-mail accounts, stop on the filled setup page when the task is only to prepare access for manual review, surface the manual-configuration branch when IMAP or server details must remain visible, and verify the Remove Account and Data dialog before confirming deletion.",
      "applicability": [
        "Use this skill for regular Thunderbird mail-account membership changes such as opening the existing-mail wizard, filling account credentials, stopping on the review page for manual checking, or removing a normal mail acc",
        "Do not use this skill for chat-account lifecycle tasks or for outgoing-only SMTP-default tasks that belong to the dedicated send-only skill."
      ],
      "failureModes": [
        "Stopping at the generic new-account chooser without opening the actual existing-mail setup form.",
        "Using chat-account removal cues when the task is about a normal mail account.",
        "Confirming deletion without checking that the Remove Account and Data dialog names the intended mail account."
      ],
      "completenessScore": 36
    },
    {
      "id": "THUNDERBIRD_Organize_Mail_Folders_and_Move_Messages",
      "name": "Organize Mail Folders and Move Messages",
      "description": "Create or rename Thunderbird folders and route selected messages into the requested destination.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Organize_Mail_Folders_and_Move_Messages",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-organize-mail-folders-and-move-messages.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "files",
        "email"
      ],
      "overview": "Create or rename Thunderbird folders, then move or copy selected messages into the requested destination folder once the folder tree is ready.",
      "applicability": [
        "Use this skill when the task changes folder structure or routes messages into a named Thunderbird folder.",
        "Do not use this skill for filesystem export of messages, which belongs to the dedicated export skill."
      ],
      "failureModes": [
        "Creating the folder under the wrong parent mailbox.",
        "Moving or copying the wrong message because the selected row was not rechecked before opening Move To."
      ],
      "completenessScore": 36
    },
    {
      "id": "THUNDERBIRD_Reply_Forward_and_Send_Draft_Messages",
      "name": "Reply Forward and Send Draft Messages",
      "description": "Start from an existing message or saved draft, open the right reuse flow, edit the content, and send it.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Reply_Forward_and_Send_Draft_Messages",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-reply-forward-and-send-draft-messages.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "save",
        "email"
      ],
      "overview": "Reuse an existing Thunderbird message or saved draft by opening the correct reply, forward, or draft-editing path and then sending the updated message.",
      "applicability": [
        "Use this skill when the task starts from an existing message thread or a saved draft.",
        "Do not use this skill for brand-new outgoing emails that do not depend on existing mail state."
      ],
      "failureModes": [
        "Replying to or forwarding the wrong source message because the opened thread was not verified.",
        "Editing the wrong draft from the Drafts folder because the selected row changed before opening it."
      ],
      "completenessScore": 36
    },
    {
      "id": "THUNDERBIRD_Subscribe_and_View_Holiday_Calendars_in_Thunderbird",
      "name": "Subscribe and View Holiday Calendars in Thunderbird",
      "description": "Import a holiday calendar file or focus a subscribed holiday calendar and confirm its visible entries.",
      "domain": "thunderbird",
      "domainLabel": "Thunderbird",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/thunderbird/THUNDERBIRD_Subscribe_and_View_Holiday_Calendars_in_Thunderbird",
      "thumbnail": "assets/skill-library/thumbnails/thunderbird--thunderbird-subscribe-and-view-holiday-calendars-in-thunderbird.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 7,
      "tags": [
        "files"
      ],
      "overview": "Import a holiday calendar file into Thunderbird Calendar and confirm that the subscribed holiday calendar appears in the visible calendar list.",
      "applicability": [
        "Use this skill when the task imports a holiday calendar file or verifies a holiday calendar entry in the sidebar.",
        "Do not use this skill for ordinary event creation or calendar display preferences."
      ],
      "failureModes": [
        "Importing the wrong file from the chooser because the selected calendar file was not verified.",
        "Assuming the calendar was subscribed without checking the visible calendar row in the sidebar."
      ],
      "completenessScore": 36
    },
    {
      "id": "VLC_Adjust_Video_Color_Overlay_And_Artistic_Filters",
      "name": "Adjust Video Color Overlay And Artistic Filters",
      "description": "Use VLC's Video Effects panels for color, overlay, grain, noise, and related filter operations, with visible verification on the enabled effect controls.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Adjust_Video_Color_Overlay_And_Artistic_Filters",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-adjust-video-color-overlay-and-artistic-filters.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "media"
      ],
      "overview": "",
      "applicability": [
        "Open or navigate the Video Effects panels in `Adjustments and Effects`.",
        "Change visual filters such as reverse colors, grain, banding removal, blur, sharpen, or overlay properties.",
        "Verify that the final filter checkbox or effect region visibly matches the requested state."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Adjust_Video_Geometry_Crop_Aspect_Ratio_Deinterlace_And_Display_Modes",
      "name": "Adjust Video Geometry Crop Aspect Ratio Deinterlace And Display Modes",
      "description": "Use VLC's Video menu and Video Effects Geometry controls for crop, aspect ratio, wall, transform, and deinterlace related operations.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Adjust_Video_Geometry_Crop_Aspect_Ratio_Deinterlace_And_Display_Modes",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-adjust-video-geometry-crop-aspect-ratio-deinterlace-and-display-modes.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "media"
      ],
      "overview": "",
      "applicability": [
        "Open crop, aspect ratio, deinterlace, or transform controls in VLC.",
        "Change geometry or display-mode settings such as wall, transpose, aspect ratio, or deinterlace mode.",
        "Verify that the visible geometry menu or transform choice matches the request."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Capture_Snapshots_Recordings_And_Verify_Saved_Artifacts",
      "name": "Capture Snapshots Recordings And Verify Saved Artifacts",
      "description": "Use VLC's shortest snapshot, recording, or wallpaper path from the current frame, and finish on a visible output or desktop wallpaper result. Open Preferences only when a persistent destination or format change is explicitly needed.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Capture_Snapshots_Recordings_And_Verify_Saved_Artifacts",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-capture-snapshots-recordings-and-verify-saved-artifacts.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "formatting",
        "save",
        "settings"
      ],
      "overview": "",
      "applicability": [
        "Trigger a one-off snapshot, recording, or wallpaper action from the current VLC frame.",
        "Configure VLC snapshot directory or image format only when the task explicitly requires a persistent saved destination or format change.",
        "Verify that the saved image or recording output is visible in the requested destination."
      ],
      "failureModes": [],
      "completenessScore": 37
    },
    {
      "id": "VLC_Configure_Advanced_Streaming_Conversion_And_VLM_Outputs",
      "name": "Configure Advanced Streaming Conversion And VLM Outputs",
      "description": "Use VLC's VLM configurator and advanced output-definition surfaces for streaming, broadcasting, or non-MP3 conversion workflows.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Configure_Advanced_Streaming_Conversion_And_VLM_Outputs",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-configure-advanced-streaming-conversion-and-vlm-outputs.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings"
      ],
      "overview": "",
      "applicability": [
        "Configure VLM input or output definitions inside VLC.",
        "Prepare advanced conversion or streaming output surfaces outside the MP3-only flow.",
        "Verify that a persistent output definition or source field is visibly retained before finishing."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Configure_Audio_Effects_Equalizer_Spatializer_And_Visualization",
      "name": "Configure Audio Effects Equalizer Spatializer And Visualization",
      "description": "Use VLC Audio Effects and Audio menu visualization controls for equalizer, spatializer, and visualization work that applies to the current playback session.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Configure_Audio_Effects_Equalizer_Spatializer_And_Visualization",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-configure-audio-effects-equalizer-spatializer-and-visualization.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings",
        "media"
      ],
      "overview": "",
      "applicability": [
        "Edit the equalizer, preamp, or other Audio Effects panels tied to the current playback.",
        "Change the Spatializer sliders or audio visualization mode.",
        "Verify that the visible effect or visualization state matches the request before leaving playback."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Configure_Audio_Normalization_Amplification_And_Volume_Defaults",
      "name": "Configure Audio Normalization Amplification And Volume Defaults",
      "description": "Use VLC Audio preferences and Advanced Preferences to change persistent audio defaults such as normalization, volume-step values, or the maximum displayed volume.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Configure_Audio_Normalization_Amplification_And_Volume_Defaults",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-configure-audio-normalization-amplification-and-volume-defaults.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings",
        "media"
      ],
      "overview": "",
      "applicability": [
        "Change audio normalization or replay-related default audio behavior.",
        "Edit the persistent audio output volume step or related advanced audio defaults.",
        "Verify that the saved audio-default field visibly matches the requested value."
      ],
      "failureModes": [],
      "completenessScore": 37
    },
    {
      "id": "VLC_Configure_Preferences_Hotkeys_Paths_And_Persisted_Defaults",
      "name": "Configure Preferences Hotkeys Paths And Persisted Defaults",
      "description": "Use VLC Preferences only for persistent paths, hotkeys, and saved defaults that must survive restart or later playback sessions. Do not load this skill for one-off open, snapshot, wallpaper, fullscreen, or convert tasks.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Configure_Preferences_Hotkeys_Paths_And_Persisted_Defaults",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-configure-preferences-hotkeys-paths-and-persisted-defaults.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "save",
        "settings"
      ],
      "overview": "",
      "applicability": [
        "Change a saved screenshot or recording destination in VLC Preferences.",
        "Edit a persistent hotkey assignment in the Hotkeys table.",
        "Verify that the visible saved path or hotkey row matches the request before leaving Preferences."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "VLC_Configure_Startup_Interface_Modules_Appearance_And_Instance_Behavior",
      "name": "Configure Startup Interface Modules Appearance And Instance Behavior",
      "description": "Use VLC Interface preferences only for persistent startup, appearance, or instance-behavior changes that must survive restart. Do not load this skill for short playback tasks like open, play, fullscreen, snapshot, or network streaming.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Configure_Startup_Interface_Modules_Appearance_And_Instance_Behavior",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-configure-startup-interface-modules-appearance-and-instance-behavior.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "settings"
      ],
      "overview": "",
      "applicability": [
        "Change media-change popup behavior, continue-playback behavior, or one-instance rules.",
        "Switch VLC appearance between native style and a custom skin or interface module.",
        "Verify the visible saved interface state or restarted skin appearance before stopping."
      ],
      "failureModes": [],
      "completenessScore": 37
    },
    {
      "id": "VLC_Control_Playback_Position_Looping_Speed_And_Volume",
      "name": "Control Playback Position Looping Speed And Volume",
      "description": "Use VLC playback menus and on-player controls to jump, loop, bookmark, or adjust active playback without drifting into unrelated preference work.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Control_Playback_Position_Looping_Speed_And_Volume",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-control-playback-position-looping-speed-and-volume.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings"
      ],
      "overview": "",
      "applicability": [
        "Jump forward or backward, pause, change speed, or reach a requested timestamp.",
        "Create or manage bookmarks during active playback.",
        "Toggle loop or similar per-playback controls and verify the current playback state."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Convert_Or_Extract_Audio_To_MP3",
      "name": "Convert Or Extract Audio To MP3",
      "description": "Use VLC's Convert/Save flow to extract MP3 with the exact requested destination path and filename. Avoid drifting into Preferences unless a persistent saved default is explicitly required.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Convert_Or_Extract_Audio_To_MP3",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-convert-or-extract-audio-to-mp3.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "save",
        "settings",
        "files",
        "media"
      ],
      "overview": "",
      "applicability": [
        "Convert a source media file to the `Audio - MP3` profile.",
        "Edit or confirm MP3-specific profile settings in VLC.",
        "Verify that the final Convert dialog shows the correct MP3 destination path before starting or finishing."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Customize_Toolbars_Status_Bar_Advanced_Controls_And_Fullscreen_Controller",
      "name": "Customize Toolbars Status Bar Advanced Controls And Fullscreen Controller",
      "description": "Use the View menu and Toolbars Editor for persistent layout work such as status bar, advanced controls, big buttons, and fullscreen-controller visibility. Do not use this skill for the ordinary act of making the current video fullscreen.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Customize_Toolbars_Status_Bar_Advanced_Controls_And_Fullscreen_Controller",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-customize-toolbars-status-bar-advanced-controls-and-fullscreen-controller.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "media"
      ],
      "overview": "",
      "applicability": [
        "Toggle the status bar or advanced controls from VLC's View menu.",
        "Rearrange toolbar rows or enable large buttons in the Toolbars Editor.",
        "Change fullscreen-controller visibility or related layout chrome, not simple fullscreen playback itself."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Inspect_Codec_Information_Shortcuts_Support_And_Plugins",
      "name": "Inspect Codec Information Shortcuts Support And Plugins",
      "description": "Use VLC information panels, shortcut views, plugin windows, and support pages when the task is about inspection rather than editing settings or playback.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Inspect_Codec_Information_Shortcuts_Support_And_Plugins",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-inspect-codec-information-shortcuts-support-and-plugins.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "formatting"
      ],
      "overview": "",
      "applicability": [
        "Open VLC information or codec panels from the Tools menu.",
        "Inspect plugins, extensions, or shortcut references.",
        "Open support or contribution resources and verify that the information surface is visible."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Load_Subtitles_And_Configure_Subtitle_Presentation",
      "name": "Load Subtitles And Configure Subtitle Presentation",
      "description": "Use VLC subtitle preferences and synchronization panels to load subtitles, adjust font and outline presentation, or change subtitle timing fields.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Load_Subtitles_And_Configure_Subtitle_Presentation",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-load-subtitles-and-configure-subtitle-presentation.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "settings",
        "slides"
      ],
      "overview": "",
      "applicability": [
        "Attach a subtitle file or switch to a requested subtitle source.",
        "Edit subtitle font, size, color, outline, or subtitle position.",
        "Change subtitle timing fields such as subtitle speed or duration factor and verify the saved state."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Manage_Playlists_And_Media_Library",
      "name": "Manage Playlists And Media Library",
      "description": "Use VLC's playlist and media-library surfaces for list organization, directory creation, sorting, and saved playlist artifacts.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Manage_Playlists_And_Media_Library",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-manage-playlists-and-media-library.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "save",
        "media"
      ],
      "overview": "",
      "applicability": [
        "Add media to the playlist, sort the playlist, or save the current playlist.",
        "Create or reorganize media-library folders and directory entries inside VLC.",
        "Verify that a playlist output or reorganized list state is visibly present."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Open_Local_Media_And_Verify_Playback_Surface",
      "name": "Open Local Media And Verify Playback Surface",
      "description": "Use VLC's shortest local-open path to bring a Desktop or filesystem file onto the VLC playback surface, then verify by visible title, frame, or timeline instead of drifting into preferences or unrelated dialogs.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Open_Local_Media_And_Verify_Playback_Surface",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-open-local-media-and-verify-playback-surface.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "settings",
        "files",
        "media"
      ],
      "overview": "",
      "applicability": [
        "Open a video or audio file from the desktop, Downloads, or another local folder.",
        "Pick one requested file from the VLC system chooser.",
        "Verify that the requested local title or real media frame is the one already playing or paused in VLC."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Open_Managed_Media_And_Start_Playback",
      "name": "Open Managed Media And Start Playback",
      "description": "Use VLC's built-in library surfaces to locate a managed media item, start playback, and verify that the requested managed entry is the one on the playback surface.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Open_Managed_Media_And_Start_Playback",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-open-managed-media-and-start-playback.jpg",
      "imageCount": 6,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "media"
      ],
      "overview": "",
      "applicability": [
        "Open media from VLC's playlist, media library, or `My Computer` navigation tree.",
        "Switch library views before opening a managed file tile or row.",
        "Verify that the selected managed entry is the item now playing in VLC."
      ],
      "failureModes": [],
      "completenessScore": 33
    },
    {
      "id": "VLC_Open_Network_Stream_And_Verify_Playback",
      "name": "Open Network Stream And Verify Playback",
      "description": "Use VLC's shortest network-stream path: open the Network tab, submit the exact URL, and verify playback in VLC without detouring into local-open or preference flows.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Open_Network_Stream_And_Verify_Playback",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-open-network-stream-and-verify-playback.jpg",
      "imageCount": 4,
      "stateCardCount": 5,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "settings"
      ],
      "overview": "",
      "applicability": [
        "Open a remote stream URL or network-media source in VLC.",
        "Use VLC's `Open Media` network tab rather than a local file picker.",
        "Verify that the VLC title or playback canvas reflects the requested remote stream."
      ],
      "failureModes": [],
      "completenessScore": 29
    },
    {
      "id": "VLC_Rotate_Flip_And_Save_A_Transformed_Video",
      "name": "Rotate Flip And Save A Transformed Video",
      "description": "Use VLC Advanced Preferences and Convert surfaces when a transform or rotate filter has to be paired with a saved exported video output.",
      "domain": "vlc",
      "domainLabel": "VLC",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vlc/VLC_Rotate_Flip_And_Save_A_Transformed_Video",
      "thumbnail": "assets/skill-library/thumbnails/vlc--vlc-rotate-flip-and-save-a-transformed-video.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 8,
      "tags": [
        "export",
        "save",
        "settings",
        "media"
      ],
      "overview": "",
      "applicability": [
        "Enable the rotate or similar transform filter in VLC's advanced Video filters.",
        "Choose a saved export profile for transformed video output.",
        "Verify that the final transformed-video destination path is visible before starting or finishing the export."
      ],
      "failureModes": [],
      "completenessScore": 35
    },
    {
      "id": "VSCODE_Add_Remove_and_Save_Multi_Root_Workspaces",
      "name": "Add Remove and Save Multi Root Workspaces",
      "description": "Modify or persist the workspace root set itself. Save the current shell when needed, add or remove roots inside the same window, and stop only after Explorer or the saved workspace shell confirms the intended result. Treat workspace-root editing as a different workflow from opening a plain folder or loading one saved `.code-workspace` shell, and treat multiple saved workspaces in one window as a boundary case rather than ordinary multi-root editing.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Add_Remove_and_Save_Multi_Root_Workspaces",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-add-remove-and-save-multi-root-workspaces.jpg",
      "imageCount": 15,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "save",
        "files"
      ],
      "overview": "The user wants to save the current window as a reusable `.code-workspace` file. The user wants multiple folders in the same VS Code window. A root should be removed from an existing multi-root workspace. The updated root set must be saved as a .code-workspace file. The task is about the root set itself, not just opening one folder or one saved workspace.",
      "applicability": [
        "The user wants to save the current window as a reusable `.code-workspace` file.",
        "The user wants multiple folders in the same VS Code window.",
        "A root should be removed from an existing multi-root workspace."
      ],
      "failureModes": [
        "Saving the workspace shell and then drifting into an unnecessary add/remove flow even though the task only asked for a saved workspace file.",
        "Replacing the current folder instead of adding another root to the same workspace.",
        "Changing the root set but forgetting to save the updated workspace shell."
      ],
      "completenessScore": 42
    },
    {
      "id": "VSCODE_Bulk_Edit_And_Block_Transformations",
      "name": "Bulk Edit And Block Transformations",
      "description": "Handle editor transforms that operate on a selected block or structurally repeated region, and verify the whole transformed range rather than one token.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Bulk_Edit_And_Block_Transformations",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-bulk-edit-and-block-transformations.jpg",
      "imageCount": 5,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "formatting"
      ],
      "overview": "The task asks for indentation, outdent, block comment, or a region-wide code transform. The live screenshot shows a selected multi-line range that should be changed together.",
      "applicability": [
        "The task asks for indentation, outdent, block comment, or a region-wide code transform.",
        "The live screenshot shows a selected multi-line range that should be changed together.",
        "The task asks for indentation, outdent, block comment, or a region-wide code transform."
      ],
      "failureModes": [
        "Pressing Tab or comment once without confirming the intended multi-line region was selected first.",
        "Stopping after a single-line change when the task named a range of lines."
      ],
      "completenessScore": 32
    },
    {
      "id": "VSCODE_Configure_Editor_Workspace_and_JSON_Settings",
      "name": "Configure Editor Workspace and JSON Settings",
      "description": "Change built-in VS Code settings without drifting into extensions, themes, or Python diagnostics. Use the Settings UI when visible controls exist, switch scope when the task is workspace-specific, and fall back to settings.json only when the task clearly requires direct JSON editing. The task is not complete when a search result appears; it is complete when the requested value is visibly applied in the correct scope or the saved JSON shows the requested key.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Configure_Editor_Workspace_and_JSON_Settings",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-configure-editor-workspace-and-json-settings.jpg",
      "imageCount": 15,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "search",
        "save",
        "settings"
      ],
      "overview": "The task changes built-in editor, workbench, or workspace behavior. The task explicitly asks for settings.json editing or JSON formatting.",
      "applicability": [
        "The task changes built-in editor, workbench, or workspace behavior.",
        "The task explicitly asks for settings.json editing or JSON formatting.",
        "The task changes built-in editor, workbench, or workspace behavior."
      ],
      "failureModes": [
        "Editing the right setting in the wrong scope.",
        "Changing a visible control but never verifying the final persisted value in User versus Workspace scope.",
        "Opening settings.json and forgetting to save or format the final file."
      ],
      "completenessScore": 42
    },
    {
      "id": "VSCODE_Configure_Keyboard_Shortcuts",
      "name": "Configure Keyboard Shortcuts",
      "description": "Modify VS Code keyboard shortcuts through the dedicated shortcuts surfaces. Search for the exact target command, assign or remove the necessary binding, and verify the final binding state instead of stopping after opening the editor. Search by command name first, fall back to keybindings.json when row-level editing stays ambiguous, and treat editor-focus or terminal-focus commands as exact-name matching work rather than approximate search hits.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Configure_Keyboard_Shortcuts",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-configure-keyboard-shortcuts.jpg",
      "imageCount": 11,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "search",
        "settings",
        "terminal"
      ],
      "overview": "The task is about command keybindings rather than general settings. The task names a specific command such as focus-editor, focus-terminal, inline chat, or another command-row level shortcut target.",
      "applicability": [
        "The task is about command keybindings rather than general settings.",
        "The task names a specific command such as focus-editor, focus-terminal, inline chat, or another command-row level shortcut target.",
        "The task is about command keybindings rather than general settings."
      ],
      "failureModes": [
        "Editing the wrong command row.",
        "Accepting a nearby command name instead of the exact focus or editor command the task asked for.",
        "Entering capture mode but never confirming the final binding state."
      ],
      "completenessScore": 38
    },
    {
      "id": "VSCODE_Configure_Python_Diagnostics_and_Analysis_Settings",
      "name": "Configure Python Diagnostics and Analysis Settings",
      "description": "Handle Python-analysis and diagnostics controls separately from general settings. Search directly for the Python setting, change the requested engine or diagnostic control, and verify the final state on the targeted Python setting row. Use this skill whenever the task mentions Pylance, missing imports, language server, type checking, or Python-specific diagnostics so the workflow does not drift back into generic settings.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Configure_Python_Diagnostics_and_Analysis_Settings",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-configure-python-diagnostics-and-analysis-settings.jpg",
      "imageCount": 9,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "search",
        "settings"
      ],
      "overview": "The task mentions Python analysis, diagnostic severity, Pylance, or missing-import behavior.",
      "applicability": [
        "The task mentions Python analysis, diagnostic severity, Pylance, or missing-import behavior.",
        "The task mentions Python analysis, diagnostic severity, Pylance, or missing-import behavior."
      ],
      "failureModes": [
        "Editing a general setting that looks similar but is not Python-scoped.",
        "Changing the dropdown or checkbox without verifying the final Python row state.",
        "Routing a Python diagnostics task through the generic settings skill and never reaching the Python row family."
      ],
      "completenessScore": 36
    },
    {
      "id": "VSCODE_Configure_Terminal_and_Debug_Preferences",
      "name": "Configure Terminal and Debug Preferences",
      "description": "Handle terminal and debug preferences as a focused settings family. Search for the requested terminal or debug control, change it through the visible UI, and verify the final control values rather than stopping at an open settings panel. Keep terminal/debug settings separate from live run and inspect workflows, but explicitly cover debug session visibility settings such as lazy variables, breakpoints everywhere, and shell-integration rows.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Configure_Terminal_and_Debug_Preferences",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-configure-terminal-and-debug-preferences.jpg",
      "imageCount": 12,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "search",
        "settings",
        "terminal"
      ],
      "overview": "The task changes integrated terminal behavior or debug-console behavior.",
      "applicability": [
        "The task changes integrated terminal behavior or debug-console behavior.",
        "The task changes integrated terminal behavior or debug-console behavior."
      ],
      "failureModes": [
        "Editing only one requested value when the task asks for several terminal or debug controls.",
        "Never checking the final value on the targeted settings rows.",
        "Opening a live run/debug session when the task only asks for persistent terminal or debug preferences."
      ],
      "completenessScore": 39
    },
    {
      "id": "VSCODE_Create_and_Save_Project_Files",
      "name": "Create and Save Project Files",
      "description": "Create a new project file from within VS Code and save it under the correct name and location. The task is not done when the editor opens; it is done when the saved filename is visibly tied to the requested project context or the file is visibly present in the target directory. Separate creation and save-path work from in-place editor edits, and verify the saved filename or workspace placement before switching to any later editing or run flow.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Create_and_Save_Project_Files",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-create-and-save-project-files.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "save",
        "files",
        "text"
      ],
      "overview": "The user asks for a new file to be created inside VS Code. The file extension or language mode matters before saving. The completion condition includes a specific save location or Explorer presence.",
      "applicability": [
        "The user asks for a new file to be created inside VS Code.",
        "The file extension or language mode matters before saving.",
        "The completion condition includes a specific save location or Explorer presence."
      ],
      "failureModes": [
        "Creating the file but never saving it to disk.",
        "Saving under the wrong extension or wrong directory.",
        "Stopping after the tab name changes without checking Explorer placement."
      ],
      "completenessScore": 37
    },
    {
      "id": "VSCODE_Create_and_Use_Custom_Snippets",
      "name": "Create and Use Custom Snippets",
      "description": "Configure reusable snippets rather than one-off code edits. Open the right snippet file, make the requested prefix or body change, and stop only after the snippet suggestion or saved snippet definition visibly confirms the update. Verify both the saved snippet definition and the triggered prefix or autocomplete suggestion when the task asks for reusable snippet behavior.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Create_and_Use_Custom_Snippets",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-create-and-use-custom-snippets.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "save",
        "settings",
        "files"
      ],
      "overview": "The task is about VS Code user snippets or snippet prefixes.",
      "applicability": [
        "The task is about VS Code user snippets or snippet prefixes.",
        "The task is about VS Code user snippets or snippet prefixes."
      ],
      "failureModes": [
        "Editing the wrong file instead of the intended snippet configuration.",
        "Changing the snippet JSON but never verifying the prefix suggestion.",
        "Saving the snippet file without checking that the prefix still triggers in an editor."
      ],
      "completenessScore": 37
    },
    {
      "id": "VSCODE_Customize_Appearance_Themes_Layout_and_Display_Language",
      "name": "Customize Appearance Themes Layout and Display Language",
      "description": "Change how VS Code looks rather than what it edits. Use theme or icon-theme pickers for visual appearance changes, use the language flow when the task mentions localization, and verify the visible workbench state rather than stopping after a menu opens. Keep theme, icon-theme, layout, and display-language changes here, while routing background-photo or workbench image customization into the dedicated background skill. If the requested language is not available without installing a language pack extension, keep that boundary explicit instead of looping through irrelevant settings.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Customize_Appearance_Themes_Layout_and_Display_Language",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-customize-appearance-themes-layout-and-display-language.jpg",
      "imageCount": 11,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "images"
      ],
      "overview": "The task changes theme, icon theme, display language, or another visible workbench appearance setting.",
      "applicability": [
        "The task changes theme, icon theme, display language, or another visible workbench appearance setting.",
        "The task changes theme, icon theme, display language, or another visible workbench appearance setting."
      ],
      "failureModes": [
        "Opening a theme menu but never choosing the requested option.",
        "Stopping before the final workbench state visibly changes.",
        "Stopping after opening the language picker without verifying a relaunch or visibly localized workbench state."
      ],
      "completenessScore": 38
    },
    {
      "id": "VSCODE_Customize_Workbench_Background_and_Wallpaper",
      "name": "Customize Workbench Background and Wallpaper",
      "description": "Change VS Code background visuals through either workbench color customizations or a background extension, and verify a persistent visible result before stopping. A wallpaper task normally requires extension-backed support; do not confuse it with ordinary theme changes or stop on the extension search surface before a persistent background result exists.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Customize_Workbench_Background_and_Wallpaper",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-customize-workbench-background-and-wallpaper.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "search"
      ],
      "overview": "The task asks for a title bar, status bar, or other workbench background-like color change. The task asks for a wallpaper, photo, or background image inside VS Code.",
      "applicability": [
        "The task asks for a title bar, status bar, or other workbench background-like color change.",
        "The task asks for a wallpaper, photo, or background image inside VS Code.",
        "The task asks for a title bar, status bar, or other workbench background-like color change."
      ],
      "failureModes": [
        "Stopping after the file chooser opens without returning to a persistent VS Code background setting or result state.",
        "Treating a photo-backed background request as if it were only a theme or icon-theme change.",
        "Searching for generic appearance settings when the task actually needs an extension-backed background image workflow."
      ],
      "completenessScore": 35
    },
    {
      "id": "VSCODE_Edit_Existing_Files_in_the_Editor",
      "name": "Edit Existing Files in the Editor",
      "description": "Work inside an already opened file. Make a precise edit at the requested location, save when the task requires persistence or a new filename, and keep a separate branch for focused rename or refactor flows that never leave the editor context. Keep this skill for precise in-place edits, Save As, and focused refactors. Route large selection-based indent/comment transforms into the bulk-edit sibling skill.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Edit_Existing_Files_in_the_Editor",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-edit-existing-files-in-the-editor.jpg",
      "imageCount": 12,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "save",
        "files",
        "text"
      ],
      "overview": "The file already exists and the task is about changing its contents. The edit is line-level, token-level, or a local rename/refactor.",
      "applicability": [
        "The file already exists and the task is about changing its contents.",
        "The edit is line-level, token-level, or a local rename/refactor.",
        "The file already exists and the task is about changing its contents."
      ],
      "failureModes": [
        "Editing the wrong line because the cursor was not placed at the intended location.",
        "Stopping after opening a rename/refactor input without confirming the result in code.",
        "Treating a block transform as if it were a one-line edit and never verifying the whole selected region."
      ],
      "completenessScore": 39
    },
    {
      "id": "VSCODE_Inspect_Runtime_Variables_And_Data_View",
      "name": "Inspect Runtime Variables And Data View",
      "description": "Inspect live Python objects inside VS Code after code execution reaches a useful runtime state. The skill is complete only when a variables or data-viewer surface visibly exposes the requested object for inspection. Make the paused-debug-to-variables chain explicit, prefer the built-in debugger and Variables/Data Viewer surfaces over Jupyter detours, and treat runtime-object visibility as the actual completion condition rather than only launching debug.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Inspect_Runtime_Variables_And_Data_View",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-inspect-runtime-variables-and-data-view.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "vs code"
      ],
      "overview": "The task asks to inspect arrays, variables, or live Python objects in VS Code. The user-facing goal is a visible Variables or Data Viewer result, not merely running the file.",
      "applicability": [
        "The task asks to inspect arrays, variables, or live Python objects in VS Code.",
        "The user-facing goal is a visible Variables or Data Viewer result, not merely running the file.",
        "The task asks to inspect arrays, variables, or live Python objects in VS Code."
      ],
      "failureModes": [
        "Launching a run or debug flow without reaching the runtime point where the object exists.",
        "Opening the debugger but never confirming the variables or viewer surface shows the requested object.",
        "Routing runtime inspection into extension or general debug flows without opening the variables surface."
      ],
      "completenessScore": 35
    },
    {
      "id": "VSCODE_Install_Local_VSIX_and_Verify_Extension_Installed",
      "name": "Install Local VSIX and Verify Extension Installed",
      "description": "Install a local VSIX package through the Extensions menu and stop only when the extension is visibly installed in VS Code. Treat any explicit .vsix path as a hard routing boundary. Do not drift into marketplace search or recommended-extension flows once the task says local package installation, and do not stop on a toast or a closed file chooser without an installed-state check.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Install_Local_VSIX_and_Verify_Extension_Installed",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-install-local-vsix-and-verify-extension-installed.jpg",
      "imageCount": 8,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "search",
        "files"
      ],
      "overview": "The task explicitly references a local .vsix file path.",
      "applicability": [
        "The task explicitly references a local .vsix file path.",
        "The task explicitly references a local .vsix file path."
      ],
      "failureModes": [
        "Opening the marketplace search instead of Install from VSIX.",
        "Selecting the wrong file from the chooser.",
        "Stopping after closing the chooser without checking the installed extension state."
      ],
      "completenessScore": 35
    },
    {
      "id": "VSCODE_Manage_Extensions_and_Configure_Extension_Settings",
      "name": "Manage Extensions and Configure Extension Settings",
      "description": "Work through the normal Extensions sidebar, not a local VSIX chooser. Install or inspect the target extension, open its detail or settings surfaces, and verify the requested installed or configured state from within VS Code. Keep this skill for marketplace installs, extension detail inspection, workspace recommendations, commands, changelogs, and settings. Do not load this skill just because the task config preinstalled an extension; use it when the user-facing goal is actually extension-centric.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Manage_Extensions_and_Configure_Extension_Settings",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-manage-extensions-and-configure-extension-settings.jpg",
      "imageCount": 11,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "settings"
      ],
      "overview": "The task searches for or installs an extension from the normal Extensions view. The task asks to open extension settings, commands, changelog, or other extension detail surfaces. The success condition depends on an installed badge, detail page, or extension setting inside VS Code.",
      "applicability": [
        "The task searches for or installs an extension from the normal Extensions view.",
        "The task asks to open extension settings, commands, changelog, or other extension detail surfaces.",
        "The success condition depends on an installed badge, detail page, or extension setting inside VS Code."
      ],
      "failureModes": [
        "Using the local VSIX menu when the task expects a marketplace extension.",
        "Installing the extension but never opening the requested detail or settings surface.",
        "Trying to use this skill for a local .vsix path instead of routing to the local-VSIX skill."
      ],
      "completenessScore": 38
    },
    {
      "id": "VSCODE_Manage_Startup_And_Default_File_Behavior",
      "name": "Manage Startup And Default File Behavior",
      "description": "Configure built-in VS Code startup prompts and new-file defaults, and keep the boundary explicit when the task demands automatic named-file creation that would require an extension or external automation. Built-in VS Code can set startup editor and default language for untitled files, but it cannot guarantee automatic creation of a specifically named file like `test.py` on every launch without extensions.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Manage_Startup_And_Default_File_Behavior",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-manage-startup-and-default-file-behavior.jpg",
      "imageCount": 7,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 9,
      "tags": [
        "settings",
        "files"
      ],
      "overview": "The task asks about startup prompts, startup editor behavior, or default language for new files. The task asks for startup-time file behavior and the built-in VS Code boundary itself matters.",
      "applicability": [
        "The task asks about startup prompts, startup editor behavior, or default language for new files.",
        "The task asks for startup-time file behavior and the built-in VS Code boundary itself matters.",
        "The task asks about startup prompts, startup editor behavior, or default language for new files."
      ],
      "failureModes": [
        "Claiming full completion for automatic named-file creation even though the built-in settings surface only exposes startup editor and default-language controls.",
        "Searching for startup settings but verifying an unrelated settings row instead of the startup prompt or default language field.",
        "Treating default language for untitled files as if it were equivalent to automatic creation of a saved, pre-named file."
      ],
      "completenessScore": 34
    },
    {
      "id": "VSCODE_Manage_Workspaces_and_Project_Roots",
      "name": "Manage Workspaces and Project Roots",
      "description": "Enter the correct VS Code project shell before any later editing. Distinguish opening a plain folder root from opening a saved workspace file, then verify the resulting Explorer root or workspace shell. Use this skill only for opening a plain folder root or loading one saved workspace shell. Multi-root editing, saving workspace shells, and attempts to keep two separate `.code-workspace` shells active in one window stay outside this boundary.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Manage_Workspaces_and_Project_Roots",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-manage-workspaces-and-project-roots.jpg",
      "imageCount": 12,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "save",
        "files"
      ],
      "overview": "The task starts by opening a folder as the project root. The user gives a .code-workspace file that should become the active shell. The goal is to switch the current shell, not to merge or persist multiple roots.",
      "applicability": [
        "The task starts by opening a folder as the project root.",
        "The user gives a .code-workspace file that should become the active shell.",
        "The goal is to switch the current shell, not to merge or persist multiple roots."
      ],
      "failureModes": [
        "Opening a plain folder when a saved workspace file was required.",
        "Continuing before Explorer visibly switches to the intended root or workspace shell.",
        "Opening a plain folder when the task explicitly named a saved .code-workspace file."
      ],
      "completenessScore": 39
    },
    {
      "id": "VSCODE_Run_and_Debug_Code",
      "name": "Run and Debug Code",
      "description": "Execute code from VS Code and verify a runtime outcome. Keep running and debugging as separate branches: normal runs should end in visible terminal output or generated artifacts, while debugging should end in a visible paused or active debug state rather than only opening the Run view. Keep live execution and paused-debug verification here, but route object-inspection and data-view work into the runtime-inspection sibling when the task is explicitly about variables or arrays, and avoid drifting into Jupyter or notebook flows unless the task explicitly names them.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Run_and_Debug_Code",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-run-and-debug-code.jpg",
      "imageCount": 13,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "terminal"
      ],
      "overview": "The task asks to run the active file or launch a debug session.",
      "applicability": [
        "The task asks to run the active file or launch a debug session.",
        "The task asks to run the active file or launch a debug session."
      ],
      "failureModes": [
        "Clicking a run control without checking terminal output or output creation.",
        "Opening the debug configuration surface but never verifying the session state.",
        "Stopping at an open Run view or debugger picker without verifying terminal output, a generated output, or a paused debug state."
      ],
      "completenessScore": 40
    },
    {
      "id": "VSCODE_Search_and_Replace_Project_Content",
      "name": "Search and Replace Project Content",
      "description": "Search for the requested text through VS Code's search UI or find widget, then replace only the intended value and verify the post-replacement state rather than stopping at an open search panel. Use this when the search surface itself matters: search panel, results tree, find widget, and replace verification. Do not collapse these flows into generic editor editing.",
      "domain": "vs_code",
      "domainLabel": "VS Code",
      "platform": "Ubuntu",
      "category": "GUI Tasks",
      "sourcePath": "ubuntu/vs_code/VSCODE_Search_and_Replace_Project_Content",
      "thumbnail": "assets/skill-library/thumbnails/vs-code--vscode-search-and-replace-project-content.jpg",
      "imageCount": 10,
      "stateCardCount": 6,
      "runtimeCardCount": 5,
      "planStepCount": 10,
      "tags": [
        "search",
        "text"
      ],
      "overview": "The task is fundamentally about locating text before editing it. The user asks for a find-and-replace operation or for project search results to be inspected.",
      "applicability": [
        "The task is fundamentally about locating text before editing it.",
        "The user asks for a find-and-replace operation or for project search results to be inspected.",
        "The task is fundamentally about locating text before editing it."
      ],
      "failureModes": [
        "Stopping after opening the search panel without confirming the correct matches.",
        "Failing to verify the final edited state after the replace action.",
        "Stopping after opening the Search view without verifying a changed value in the editor or results tree."
      ],
      "completenessScore": 37
    }
  ]
};
