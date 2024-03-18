# Sprint 1.1 Gonzalo Fourtané

---

Testing:

```sh
npm run test
```
Ejecuta los test

Running:

```sh
npm run run
```
Corre el programa y muestra las dos listas de ejemplo con sus respectivas tareas añadidas. 
Muestra tareas 1 y 2 marcadas como completadas,
y también elimina tareas 5 y 6 de las listas.


Building:

```sh
npm run build
```

Transpila el proyecto en dist/
(En caso de transpilación chequear de poner los ".js" en los import antes de correr programa. De caso contrario da error de módulo.)



Para el frontEnd

// npm create vite@latest nombredeldirectorio

Para el CLI

//Uso de modulo Readline

```sh
node cmd/app.js
```
Inicia el To Do list con las siguientes opciones:

 add / remove / check / viewAll

 add - Agrega una tarea a una lista existente
 remove - Elimina la ultima tarea de la lista 
 check - Marca la primera tarea como completada (true)
 viewAll - Muestra el listado con todas las tareas

Para salir del programa: CTRL + C