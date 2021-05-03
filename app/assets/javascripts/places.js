// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


function initMap(lat, lng) {
    var myCoords = new google.maps.LatLng(lat, lng);
    var mapOptions = {
    center: myCoords,
    zoom: 14
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    // new google.maps.Marker({
    //     position: myCoords,
    //     map,
    //     title: "Hello World!",
    //   });
}

// initMap(40.00, -105.35)

// function initMap() {
//     const myLatLng = { lat: -25.363, lng: 131.044 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: myLatLng,
//     });
//     new google.maps.Marker({
//       position: myLatLng,
//       map,
//       title: "Hello World!",
//     });
//   }

//   initMap();