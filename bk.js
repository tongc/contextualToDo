var context;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.context != undefined) {
        context = request.context;
        chrome.storage.sync.set({ 'context': request.context }, function () {
            console.log("context set to ", request.context);
        });
    }
});
function getSelection(info, tab) {
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({
        url: "http://" + context + "/" + info.selectionText
    });
}
chrome.contextMenus.create({
    title: "Add TODO: %s",
    contexts: ["selection"],
    onclick: getSelection
});
//# sourceMappingURL=bk.js.map