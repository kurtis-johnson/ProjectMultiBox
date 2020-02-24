chrome.runtime.onStartup.addListener(function (args) {
    console.log(args);
});

function muteTab(tab) {
    chrome.tabs.update(tab.id, {muted: true});
}

function unmuteTab(tab) {
    chrome.tabs.update(tab.id, {muted: false});
}

// https://github.com/ludiosarchive/mute-new-tabs TODO: MUTE ALL THE TABS