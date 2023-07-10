<h1><img src="" alt="Real Time Bus Tracker" width="50%"></h1>

> Version 1.0

Real Time Bus Tracker; este es un desarrollo en Javascript que permite utilizar objetos e instrucciones de código para el manejo de DOM para "incrustar" mapas y marcadores. Proyecto donde consumimos API para crear un mapa y hacer tracking del recorrido de un objeto de un lugar a otro.

## Documentation

Aprenda a como codificar en JavaScript para incrustar mapas, rutas y marcadores, asimismo, nos permite consumir datos publicos a traves de API para obtener las direcciones que se usaran en el mapa para trazar su ruta y simular las paradas que ha realizado el Bus durante su recorrido.

[Docs for version 1](https://jh-lopezmoreno.github.io/eye%20movement/docs)

### Para mayor información se describe a cada archivo considerado en este desarrollo, los elementos utilizados, objetos y funciones javascript para generar movimiento:

I. En el archivo index.html
   
   a) Aqui se han invocado a los elementos de Style en donde estan definidos los objetos para los distintos "ball" considerados.
      <link rel="stylesheet" href="./style.css">

   b) Tambien, se ha definido el elemento que hace referencia al codigo javascript para generar los movimientos.

II. En el archivo ball.js
   
   En este se ha escrito el código de la solución de los movimientos del elemento "ball" y se puede resaltar algunas instrucciones utilizadas:

   a) Se han definido todas la variables que se han considerado en la logica del programa.
   
   b) Se ha creado la funcion moveBall() para cambiar la posición del elemento HTML "ball".

   c) Finalmente, con setInterval se invoca a la función moveBall() cada 100ms para simular el movimiento.

III. En el archivo style.css
   
   En este se definen los distintos objetos que seran utilizados desde el HTML, a cada "ball" se le ha considerado sus propiedades iniciales.


## License

Simulation - ball movement es código libre para aprendizaje inicial de JavaScript y no requiere de ninguna contribución económica, su filosofía es compartir para beneficio de todos en el proceso de aprendizaje.

## URL del simulador de pelotas en rebote.

https://jh-lopezmoreno.github.io/ball/index.html
