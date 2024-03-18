import * as readline from 'node:readline';
import Task from '../dist/task.js'
import List from '../dist/list.js'
const ListaDeTareas = []

const rl = readline.createInterface(process.stdin, process.stdout);
const LIST = new List()
const TASK1 = new Task('Soy una primera tarea creada automaticamente.')
ListaDeTareas.push(TASK1)

    console.log('- TO DO List -')
    rl.setPrompt(`Opciones: add / remove / check / viewAll:  `);
    rl.prompt();
    rl.on('line', (choice) => {
            switch(choice){
                case 'add':
                    // rl.setPrompt(`Descripcion de tu tarea: `);
                    // let Descripcion = rl.prompt();
                    // rl.on('line', input => console.log(input));
                    
                    const TASK2 = new Task('Nueva tarea creada. Descripcion automatica')
                    ListaDeTareas.push(TASK2)
                    console.log('Tarea creada')
                    console.log(ListaDeTareas)
                    break
                    case 'remove':
                    console.log(ListaDeTareas)
                    LIST.removeTask(ListaDeTareas[ListaDeTareas.length - 1])
                    console.log('Ultima tarea eliminada. Asi queda la lista: ')
                    console.log(ListaDeTareas)
                    break
                case 'check':
                    console.log('Chequeando primera tarea')
                    TASK1.check()
                    console.log(ListaDeTareas)   
                    break
                case 'viewAll':
                    console.log(ListaDeTareas)
                    break
                default:
                    rl.close();
                    break
                }
            rl.prompt();
    });
    rl.on('SIGINT', () => {
        rl.question('Exit (y or n)? ', (input) => {
            if (input.match(/^y(es)?$/i)) { rl.pause(); }
        });
    });
        
        
        // rl.on('line', (input) => {
            //     console.log(`Input Received: ${input}`);
            //     rl.close();
            // });
            
            // rl.on('pause', () => {
                //     console.log('Paused Event is invoked');
                // });
        