<h1><img src="" alt="Simulation - Moving Eyes" width="50%"></h1>

> Version 1.0

Simulation - Ayes movement; este es un desarrollo en Javascript que permite utilizar objetos e instrucciones de código para generar su movimiento a evento del mouse, es decir al mover el mouse se mueve la imagen (ojos) dentro de un área especifica de las figuras o imagenes.

## Documentation

Aprenda a como codificar en JavaScript para hacer simulaciones de movimiento de objetos dado un movimiento del mouse y dentro los los limites de estos.

[Docs for version 1](https://jh-lopezmoreno.github.io/eye%20movement/docs)

### Para mayor información se describe a cada archivo considerado en este desarrollo, los elementos utilizados, objetos y funciones javascript para generar movimiento:

I. En el archivo index.html
   
   a) Aqui se han invocado a los elementos de Style en donde estan definidos los objetos para los distintos "Eyes" considerados.
      "<link rel="stylesheet" type="text/css" href="./styles.css">"

   b) Tambien, se ha definido el elemento que hace referencia al codigo javascript para generar los movimientos de "Eyes" como sigue:
      <script src="./eyes.js"></script>

II. En el archivo eyes.js
   
   En este se ha escrito el código de la solución de los movimientos de los "Eyes" y se puede resaltar algunas instrucciones utilizadas:

   a) Se han definido todas la variables que se han considerado en la logica del programa.
   
   b) Se ha creado la funcion moveBall() para cambiar la posición del elemento HTML "ball".

   c) Finalmente, con setInterval se invoca a la función moveBall() cada 100ms para simular el movimiento.

III. En el archivo style.css
   
   En este se definen los distintos objetos que seran utilizados desde el HTML, a cada "ball" se le ha considerado sus propiedades iniciales.


## License

Simulation - ball movement es código libre para aprendizaje inicial de JavaScript y no requiere de ninguna contribución económica, su filosofía es compartir para beneficio de todos en el proceso de aprendizaje.

## URL del simulador de pelotas en rebote.

https://jh-lopezmoreno.github.io/ball/index.html
