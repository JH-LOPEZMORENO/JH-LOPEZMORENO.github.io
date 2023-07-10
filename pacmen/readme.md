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
   d) Se han definido todas la variables que se han considerado en la logica del programa.
   e) Con las funcion nativa de Javascript "setTimeout(update, 20)" logra simular el movimiento cada 20ms y con "game.appendChild(newimg)" 
      se logra adicionar nuevos "Pacmen" en el DOM.
   f) Finalmente, para iniciar la simulación se invoca a la función del objeto pacMen.push(makePac()) de "Pacmen". 

III. Los archivos o imagenes: PacMan1.png, PacMan2.png, PacMan3.png, PacMan4.png
   
   Estas imagenes .PNG son utilizadas para hacer la simulación de "Pacmen", son las que se simulan el movimiento y rebote en el DOM. 

## License

Simulation - Pacmen es código libre para aprendizaje inicial de JavaScript y no requiere de ninguna contribución económica, su filosofía es compartir para beneficio de todos en el proceso de aprendizaje de javascript, html y css.

## URL del simulador Pacmen.

https://jh-lopezmoreno.github.io/pacmen/index.html
