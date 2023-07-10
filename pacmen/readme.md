<h1><img src="" alt="Simulation - Pacmen" width="50%"></h1>

> Version 1.0

Simulation - Pacmen; este es un desarrollo en Javascript que permite utilizar objetos e instrucciones de código para generar su movimiento y rebote.

## Documentation

Aprenda a como codificar en JavaScript para hacer simulaciones de movimiento de objetos y realizar rebotes cuando llegan al borde de los limites definidos en el browser.

[Docs for version 1](https://jh-lopezmoreno.github.io/pacmen/docs)

### Para mayor información se describe a cada archivo considerado en este desarrollo, los elementos utilizados, objetos y funciones javascript para generar movimiento:

I. En el archivo index.html
   
   a) Se ha definido el elemento que hace referencia al codigo javascript para generar los movimientos de "Pacmen".
   b) Asismismo, se han incluido a evento para los botones ( onclick='makeOne()' | onclick='update()' ), tanto para generar los "Pacmen" como para generar 
      la simulación de los movimientos y de los rebotes.

II. En el archivo pacmen.js
   
   Se ha escrito varias funciones para realizar la simulación de "Pacmen" como son las principales:

   a) makePac(); crear las figuras de "Pacmen" de forma aleatoria.
   b) update(); logica que permite simular mover "Pacmen" en el DOM.
   c) checkCollisions(item); logica que permite simular el choque en los bordes y se produzca un rebote aleatorio.
   a) Se han definido todas la variables que se han considerado en la logica del programa.
   
   b) Se ha creado la funcion moveBall() para cambiar la posición del elemento HTML "ball".

   c) Finalmente, con setInterval se invoca a la función moveBall() cada 100ms para simular el movimiento.

III. En el archivo style.css
   
   En este se definen los distintos objetos que seran utilizados desde el HTML, a cada "ball" se le ha considerado sus propiedades iniciales.


## License

Simulation - ball movement es código libre para aprendizaje inicial de JavaScript y no requiere de ninguna contribución económica, su filosofía es compartir para beneficio de todos en el proceso de aprendizaje.

## URL del simulador de pelotas en rebote.

https://jh-lopezmoreno.github.io/ball/index.html
