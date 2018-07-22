const uluru = {lat: 28.291565, lng: -15.5};
let markers = []
let map
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

const createMarkers = () => {
  markers.forEach(marker => {
    let markerName = marker.name
    let markerLat = marker.lat
    let markerLng = marker.lng
    let gMarker = new google.maps.Marker({
      position: {lat: markerLat, lng: markerLng},
      map: map
    });
   let infowindow = new google.maps.InfoWindow({
      content: markerName
    });
    gMarker.addListener('click', function() {
      infowindow.open(map, gMarker);
    });
  })
}

initMap = async () => {
  await fetchMarkers()
  map = new google.maps.Map(document.querySelector("#g-map-index"), {
    zoom: 3,
    center: uluru
  });
  createMarkers()
};
