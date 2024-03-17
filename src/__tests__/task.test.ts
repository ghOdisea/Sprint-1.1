import Task from "../task"

describe ('task creator', () => {
    const TASK = new Task('Soy una tarea')

    it('should create a task with its description', () => {
        expect(TASK.description).toBe('Soy una tarea')
    })
    it('should create a new Task with complete property, set to false', () => {
        expect(TASK.completed).toBe(false)
    })
    it('should change completed property with a function Check', () => {
        TASK.check()
        expect(TASK.completed).toBe(true)
        TASK.check()
        expect(TASK.completed).toBe(false)
    })
})
