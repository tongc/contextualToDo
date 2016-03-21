function getSelection(info, tab) {
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({
        url: "http://www.iciba.com/" + info.selectionText
    });
}
chrome.contextMenus.create({
    title: "词霸: %s",
    contexts: ["selection"],
    onclick: getSelection
});
chrome.contextMenus.create({
    title: "Add TODO: %s",
    contexts: ["selection"],
    onclick: getSelection
});
//# sourceMappingURL=bk.js.map