export default class List {
    constructor() {
        this.tasksList = [];
    }
    addTask(task) {
        this.tasksList.push(task);
        return task;
    }
    removeTask(task) {
        if (!task.completed) {
            task.check();
        }
        if (task.completed) {
            let actualTask = this.tasksList.findIndex((tarea) => {
                task.description == tarea.description;
            });
            this.tasksList.splice(actualTask, 1);
        }
    }
}
