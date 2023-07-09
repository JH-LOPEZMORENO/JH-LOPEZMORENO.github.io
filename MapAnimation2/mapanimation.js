// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoiamhsb3Blem1vcmVubyIsImEiOiJjbGpiMzEzcG4xbDIwM3Jsd29tdGl5ZzhjIn0.F1-s5WX5IXJGVl_dAQwEcg';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  //style: 'mapbox://styles/mapbox/streets-v8',
  style: 'mapbox://styles/mapbox/outdoors-v9',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker()
  .setLngLat([-71.104081, 42.365554])
  .addTo(map);

setTimeout(() => {
  map.on('load', () => {
    map.addSource('route', {
    'type': 'geojson',
    'data': {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'LineString',
    'coordinates': [
      [-71.093729, 42.359244],
      [-71.094915, 42.360175],
      [-71.0958, 42.360698],
      [-71.099558, 42.362953],
      [-71.103476, 42.365248],
      [-71.106067, 42.366806],
      [-71.108717, 42.368355],
      [-71.110799, 42.369192],
      [-71.113095, 42.370218],
      [-71.115476, 42.372085],
      [-71.117585, 42.373016],
      [-71.118625, 42.374863],
    ]
    }
    }
    });
    map.addLayer({
      'id': 'route',
      'type': 'line',
      'source': 'route',
      'layout': {
      'line-join': 'round',
      'line-cap': 'round'
      },
      'paint': {
      'line-color': '#33aaaa',
      'line-width': 4
      }
    });
  });
}, 600);
//

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.

//


  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1200);
}

