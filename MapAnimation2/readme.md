<h1><img src="" alt="Real Time Bus Tracker" width="50%"></h1>

> Version 1.0

Real Time Bus Tracker; este es un desarrollo en Javascript que permite utilizar objetos e instrucciones de código para el manejo de DOM para "incrustar" mapas y marcadores. Proyecto donde consumimos API para crear un mapa y hacer tracking del recorrido del Bus de un lugar a otro a traves del Marker.

## Documentation

Aprenda a como codificar en JavaScript para incrustar mapas, rutas y marcadores, asimismo, nos permite consumir datos publicos a traves de API para obtener las direcciones que se usaran en el mapa para trazar su ruta y simular las paradas que ha realizado el Bus durante su recorrido.

[Docs for version 1](https://jh-lopezmoreno.github.io/MapAnimation2/docs)

### Para mayor información se describe a cada archivo considerado en este desarrollo, los elementos utilizados, objetos y funciones javascript para generar movimiento:

I. En el archivo index.html
   
   a) Aqui se han referenciado a los elementos de Style y JS de MAPBOX en donde estan definidos los objetos para los distintos mapas a 
      considerarse como sigue:
      href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css"
      src="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"
      <link rel="stylesheet" href="./style.css">

   b) Tambien, se ha definido el elemento que hace referencia al codigo javascript para generar los movimientos:
      src="./mapanimation.js"

II. En el archivo mapanimation.js
   
   En este se ha escrito el código de la simulación del marcado de la ruta del recorrido y de las paradas realizadas por el Bus; se puede 
   resaltar algunas instrucciones utilizadas:

   a) Se han definido todas la variables que se han considerado en la logica del programa entre ella para:
      - Instanciar al mapa 'mapbox://styles/mapbox/outdoors-v9' a traves de su correspondiente accessesToken para su autenticación.
      - Iniciar el Marker para iniciar la simulacoión.
   
   b) Finalmente, con la función fecha "setTimeout(() =>" se simula en primera instancia la ruta del Bus y en segunda instancia se simula las distintas 
      paradas que realiza el Bus a traves del movimiento del Marker en el mapa de acuerdo a sus coordenadas.
   
III. En el archivo style.css
   
   En este se definen las propiedades de los margenes y ubicacion inicial en el mapa de los distintos objetos/clases que seran utilizados.

## License

Simulation - Real Time Bus Tracker es código libre para aprendizaje inicial de JavaScript y no requiere de ninguna contribución económica, su filosofía es compartir para beneficio de todos en el proceso de aprendizaje.

## URL del simulador Real Time Bus Tracker.

https://jh-lopezmoreno.github.io/MapAnimation2/index.html
