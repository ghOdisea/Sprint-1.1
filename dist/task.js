export default class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
    check() {
        this.completed = !this.completed;
    }
}
