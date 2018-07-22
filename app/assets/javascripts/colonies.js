let baseView;
let styledMapType;
let map;
let marker;
let markers = [];

const styleMap = () => {
  styledMapType = new google.maps.StyledMapType(
  [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#57ff00"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
  ],
  { name: 'Styled Map'});
};


const fetchMarkers = async () => {
  await $.get('/colonies.json')
  .done(resp => {
    resp.map( mark => {
      markers.push(mark)
    })
  })
  .fail(err => {
    console.log(err)
  })
}
const fetchColonyMarker = async () => {
  let path = window.location.pathname
  let colonyId = path.match(/\/\d+/)
  let colony
  await $.get('/colonies/'+colonyId+".json")
    .done(resp => {
      let colonyLat = resp.lat
      let colonyLng = resp.lng
      baseView = {lat: colonyLat, lng: colonyLng}
      marker = new google.maps.Marker({
        position: baseView,
        map: map
      });
      marker.addListener('click', function() {
        infowindow.open(map, gMarker);
      });
    })
    .fail(err => console.log(err))
}
const createMarkers = () => {
  markers.forEach(marker => {
    let markerName = marker.name
    let markerLat = marker.lat
    let markerLng = marker.lng
    let markerId = marker.id
    let gMarker = new google.maps.Marker({
      position: {lat: markerLat, lng: markerLng},
      map: map
    });
   let infowindow = new google.maps.InfoWindow({
      content: `<a href="/colonies/${markerId}">${markerName}</a>`
    });
    gMarker.addListener('click', function() {
      infowindow.open(map, gMarker);
    });
  })
}

initMap = async () => {
  const currentPath = window.location.pathname
  baseView = {
    lat: 28.291565, lng: -15.5
  }
  if(currentPath === '/colonies'){ 
  } else {
   // await fetchColonyMarker()
  }

  map = new google.maps.Map(document.querySelector("#g-map-index"), {
    zoom: 3,
    center: baseView,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
              'styled_map']
    }
  });
  switch(currentPath) {
    case '/colonies':
      console.log('index')
      await fetchMarkers()  
      createMarkers()
      break;
    case '/colonies/new':
      console.log('new')
      map.addListener('click', function(e) {
        let chosenLat = e.latLng.lat()
        let chosenLng = e.latLng.lng()
        $('input[name="colony[lat]"]').val(chosenLat)
        $('input[name="colony[lng]"]').val(chosenLng)
        if(marker){ marker.setMap(null) }
        marker = new google.maps.Marker({
          position: { lat: chosenLat, lng: chosenLng },
          map: map
        });
      });
      break;

    case `/colonies${currentPath.match(/\/\d+/)[0]}/edit`:
      console.log('editin')
      let currentLat = parseInt($('input[name="colony[lat]"]').val())
      let currentLng = parseInt($('input[name="colony[lng]"]').val())
      marker = new google.maps.Marker({
          position: { lat: currentLat, lng: currentLng },
          map: map
        });
      map.addListener('click', function(e) {
        let chosenLat = e.latLng.lat()
        let chosenLng = e.latLng.lng()
        $('input[name="colony[lat]"]').val(chosenLat)
        $('input[name="colony[lng]"]').val(chosenLng)
        if(marker){ marker.setMap(null) }
        marker = new google.maps.Marker({
          position: { lat: chosenLat, lng: chosenLng },
          map: map
        });
      });
      break;
    case `/colonies${currentPath.match(/\/\d+$/)[0]}`:
      console.log('hello')
      await fetchColonyMarker()
      break;
    default:
      console.log('default')
     break;
  }

  styleMap()
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
};
