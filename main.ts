class ToDo {
	private toDoItems: ToDoItem[];
}

class ToDoItem {
	private item: String;
	private createDate: Date;
	private dueDate: Date;
}

function getContext() {
	return window.location.hostname;
}

console.info(getContext());