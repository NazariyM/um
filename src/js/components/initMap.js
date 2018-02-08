if ($('#map').length) initMap();

let contactMap;

function initMap() {
  contactMap = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.433117, lng: 24.758143},
    zoom: 16
  });

  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(59.433019, 24.758770),
    icon: 'static/img/icons/map-marker.svg',
    map: contactMap
  });
}