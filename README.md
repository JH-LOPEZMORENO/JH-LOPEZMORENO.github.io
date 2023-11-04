# Getting Started with Create React App

Este projecto fue creado con bootstrapped [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

En el directorio del proyecto, puede ejecutar:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

La página se recargará cuando realice cambios.
También es posible que vea errores en la consola.
Tambien en el Browser puedes estar en modo Desarrollador, en Chrome o Edge se pone en ese modo con la tecla de funcion F12.

### Codificación realizada
Para que "Todo-List JHLM" funcione tuve que entender y realizar lo siguiente:

1. Las llamadas entre los HTML y programas JS tienen una secuencia y es como sigue:
    1ro. index.html
    2do. index.js
    3ro. App.js
    4to. todo.js o form.js

2. Para usar las funciones de los programas todo.js y form.js tuve que usar la sentencia export e import, con esto logre hacer las llamadas a las funciones "Todo()" y "TodoForm()" respectivamente.

3. Se adiciono separadores de lineas para separar el titulo de las actividades con "<hr></hr>"

### Funcionalidades del lado del Usuario

1. En el campo "Add Todo..." escribir la actividad que haras y dar Enter para grabar.
2. Para eliminar una actividad solo se tiene que hacer "Click".

### License

Estos archivos son libre en su uso y son Open Source. Puedes usarlo para proyectos comerciales, proyectos de código abierto o casi lo que quieras.
