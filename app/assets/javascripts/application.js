// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

var riders = [
  {
    firstName: "Dustin",
    lastName: "Green",
    cityOfOrigin: "Hickory Hills",
    stateOfOrigin: "IL",
    locatedAt: {
      lat: 40.0,
      lng: -105.35,
    },
  },
  {
    firstName: "Jason",
    lastName: "Finn",
    cityOfOrigin: "Huntington Beach",
    stateOfOrigin: "CA",
    locatedAt: {
      lat: 39.95,
      lng: -105.24,
    },
  },
];

function createMap(mapDIV, mapCenter, mapZoom) {
  let _map = new google.maps.Map(mapDIV, {
    center: new google.maps.LatLng(mapCenter.lat, mapCenter.lng),
    zoom: mapZoom,
    zIndex: 1,
  });

  return _map;
}

function createMarker(_map, _lat, _lng, name) {
  let _marker = new google.maps.Marker({
    position: new google.maps.LatLng(_lat, _lng),
    map: _map,
    title: name,
    // rating: this.averageRating,
    // vicinity: this.address,
    // placeId: this.placeId,
    // animation: google.maps.Animation.DROP,
  });

  return _marker;
}

function showInfoWindow(_map) {
  var infoWindow = new google.maps.InfoWindow();
  infoWindow.open(_map);
}

const mapCenter = {
  lat: 40.0,
  lng: -105.35,
  mapZoom: 8,
};

window.showMap = () => {
  var map = createMap(
    document.getElementById("godwinmap"),
    mapCenter,
    mapCenter.mapZoom
  );
  riders.forEach((el) => {
    createMarker(map, el.locatedAt.lat, el.locatedAt.lng, el.firstName);
  });
};

// console.log();
