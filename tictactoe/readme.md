<h1><img src="" alt="Tic-tac-Toe" width="50%"></h1>

> Version 1.0

Simulation - Tic-Tac-Toe; este es un desarrollo en Javascript que permite simular a un juego clasico de tres en raya o tambien llamado "Michi" o "Tic-Tac-Toe". Este juego consiste en que el primer jugador que realize tres "X" o "O" de manera vertical o en diagonal consecutiva gana, tambien pueden empatar, luego puede reiniciar el juego otra vez.

## Documentation

Aprenda a como codificar en JavaScript con REACT para hacer simulaciones de Juegos.

[Docs for version 1](https://jh-lopezmoreno.github.io/eye%20movement/docs)

### Para mayor información se describe a cada archivo considerado en este desarrollo, los elementos utilizados, Style, objetos y funciones javascript para generar movimiento:

I. En el archivo index.html
   
   a) Aqui se han invocado a los elementos de Style en donde estan definidos los objetos/clases para "Eyes" considerados.
      "<link rel="stylesheet" type="text/css" href="./styles.css">"

   b) Tambien, se ha definido el elemento que hace referencia al codigo javascript para generar los movimientos de "Eyes" como sigue:
      <script src="./eyes.js"></script>

II. En el archivo style.css
   
   Este archivo de Style es clave y principal para realizar la simulación del movimiento de "Eyes" con esto se ha dibujado los ojos (parpado y conjuntiva) 
   y la iris, no sido necesario realizarlo a traves de imagenes.

III. En el archivo eyes.js
   
   En este se ha escrito el código de la solución de los movimientos de los "Eyes" y se puede resaltar algunas instrucciones utilizadas:

   a) Sobre el objeto document.getElementsByClassName('ball') se ha definido la funcion fecha document.onmousemove = (event) para capturar el "evento" del
      movimiento de mouse bajo los margenes de los definido para el ojo (parpados y conjuntiva) en Style.
      
   b) Con la función "for" se logra simular el movimiento a traves de las propiedades ".style.top, .style.left, .transform".
   
   c) Se han definido todas la variables que se han considerado en la logica del programa.

## Hoja de ruta de futuras mejoras para Tic-Tac-Toe

   Sobre lo realizado por el Dr. Williams las oportunidades de mejoras/ajustes que se pueden hacer son los siguientes:

   1. Cuando se completen las casillas se finalize el juego, se indique si hay ganador o es empate y se active un boton para reiniciar nuevamente el juego.
   2. No debe permitir sobre-marcar una casilla si ya esta elegida, que emita un sonido o se alerte dado que ya esta utilizada esa casilla.

   Para su implementación se tendria que considerar lo siguiente:
   
   Se tendria que guardar las casillas utilizadas de cada jugador en un array, cada vez que se marque la casilla se tendria que comparar con este array para determinar si ya esta usado o esta libre, asimismo, se debe determinar si todas las casillas ya estan marcadas/guardadas, si ya estan completadas se terminaria si hay ganador o empate y tambien permitiria activar un boton para reiniciar el juego.

## License

Simulation - Tic-Tac-Toe es código libre para aprendizaje inicial de JavaScript/REACT y no requiere de ninguna contribución económica, su filosofía es compartir para beneficio de todos en el proceso de aprendizaje.

## URL del simulador de Juego Tic-Tac-Toe.

https://jh-lopezmoreno.github.io/eye%20movement/index.html
