import List from "./list";
import Task from "./task";

const LIST = new List
const LIST2 = new List

const TASK1 = new Task('Tarea 1')
const TASK2 = new Task('Tarea 2')
const TASK3 = new Task('Tarea 3')
const TASK4 = new Task('Tarea 4')
const TASK5 = new Task('Tarea 5')
const TASK6 = new Task('Tarea 6')

LIST.addTask(TASK1)
LIST.addTask(TASK3)
LIST.addTask(TASK5)

LIST2.addTask(TASK2)
LIST2.addTask(TASK4)
LIST2.addTask(TASK6)

TASK1.check()
TASK2.check()

console.log('Lista 1:')
console.log(LIST)
console.log('Lista 2:')
console.log(LIST2)

LIST.removeTask(TASK5)
LIST2.removeTask(TASK6)

console.log('Lista 1:')
console.log(LIST)
console.log('Lista 2:')
console.log(LIST2)


