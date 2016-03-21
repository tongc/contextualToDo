var ToDo = (function () {
    function ToDo() {
    }
    return ToDo;
}());
var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
function getContext() {
    return window.location.hostname;
}
chrome.runtime.sendMessage({ context: getContext() }, function (response) {
});
//# sourceMappingURL=main.js.map