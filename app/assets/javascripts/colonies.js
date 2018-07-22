
const uluru = {lat: -25.344, lng: 131.036};

initMap = () => {
  const map = new google.maps.Map(document.querySelector("#g-map-index"), {
    zoom: 4,
    center: uluru
  })
}