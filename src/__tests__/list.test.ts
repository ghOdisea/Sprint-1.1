import List from "../list"
import Task from "../task"

describe('list maker', () => {
    const LIST = new List()
    const TASK = new Task('Soy una tarea')

    it('should create a List', () => {
        expect(LIST).toBeDefined()
    })
    it('should create a list with an array of tasks', () => {
        expect(LIST.tasksList).toBeTruthy()
    })
    it('should have a method to add Task', () => {
        expect(LIST.addTask).toBeDefined()
    })
    it('should add a task to the list', () => {
        LIST.addTask(TASK)
        expect(LIST.tasksList.length).toBe(1)
    })
    it('should remove the task from the list', () => {
        LIST.removeTask(TASK)
        expect(LIST.tasksList.length).toBe(0)
    })
})