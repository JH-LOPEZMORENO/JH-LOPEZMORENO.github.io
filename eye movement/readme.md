<h1><img src="" alt="Simulation - Moving Eyes" width="50%"></h1>

> Version 1.0

Simulation - Ayes movement; este es un desarrollo en Javascript que permite utilizar Style, objetos e instrucciones de código para generar su movimiento a evento del mouse, es decir al mover el mouse se mueve la imagen (iris del ojo) dentro de un área especifica de las figuras creada en Style.

## Documentation

Aprenda a como codificar en JavaScript para hacer simulaciones de movimiento de objetos dado un movimiento del mouse y dentro los los limites de estos con Style.

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

## License

Simulation - ball movement es código libre para aprendizaje inicial de JavaScript y no requiere de ninguna contribución económica, su filosofía es compartir para beneficio de todos en el proceso de aprendizaje.

## URL del simulador de pelotas en rebote.

https://jh-lopezmoreno.github.io/eye%20movement/index.html
