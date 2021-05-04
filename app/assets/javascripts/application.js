
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
    firstName: "Howard",
    lastName: "Thompson",
    cityOfOrigin: "Hale",
    stateOfOrigin: "MO",
    locatedAt: {
      lat: 40.06,
      lng: -105.26,
    },
  },
  {
    firstName: "Maggie",
    lastName: "Lantz",
    cityOfOrigin: "Dublin",
    stateOfOrigin: "OH",
    locatedAt: {
      lat: 40.03,
      lng: -105.23,
    },
  },
  {
    firstName: "Lawrence",
    lastName: "Duran",
    cityOfOrigin: "Fort Myers",
    stateOfOrigin: "FL",
    locatedAt: {
      lat: 40.04,
      lng: -105.23,
    },
  },
  {
    firstName: "Irene",
    lastName: "Molina",
    cityOfOrigin: "Tucson",
    stateOfOrigin: "AZ",
    locatedAt: {
      lat: 39.96,
      lng: -105.22,
    },
  },
  {
    firstName: "Nancy",
    lastName: "Garner",
    cityOfOrigin: "Baltimore",
    stateOfOrigin: "MD",
    locatedAt: {
      lat: 39.98,
      lng: -105.21,
    },
  },
  {
    firstName: "Tara",
    lastName: "Taylor",
    cityOfOrigin: "Minneapolis",
    stateOfOrigin: "MN",
    locatedAt: {
      lat: 40.00,
      lng: -105.25,
    },
  },
  {
    firstName: "Alejandro",
    lastName: "Smith",
    cityOfOrigin: "Scarborough",
    stateOfOrigin: "ME",
    locatedAt: {
      lat: 40.02,
      lng: -105.26,
    },
  },
  {
    firstName: "Tricia",
    lastName: "Renshaw",
    cityOfOrigin: "Mystic",
    stateOfOrigin: "CT",
    locatedAt: {
      lat: 40.02,
      lng: -105.30,
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
  {
    firstName: "Travis",
    lastName: "Cook",
    cityOfOrigin: "Twin Lakes",
    stateOfOrigin: "WI",
    locatedAt: {
      lat: 40.01,
      lng: -105.20,
    },
  },
  {
    firstName: "Joan",
    lastName: "Brooks",
    cityOfOrigin: "Norfolk",
    stateOfOrigin: "VA",
    locatedAt: {
      lat: 39.98,
      lng: -105.24,
    },
  },
  {
    firstName: "Joseph",
    lastName: "Rogers",
    cityOfOrigin: "Wayne",
    stateOfOrigin: "NJ",
    locatedAt: {
      lat: 39.99,
      lng: -105.25,
    },
  },
  {
    firstName: "Matthew Gregson",
    lastName: "Finn",
    cityOfOrigin: "Brashear",
    stateOfOrigin: "MO",
    locatedAt: {
      lat: 40.01,
      lng: -105.29,
    },
  },
  {
    firstName: "Katie",
    lastName: "Dunlap",
    cityOfOrigin: "Marion",
    stateOfOrigin: "VA",
    locatedAt: {
      lat: 39.97,
      lng: -105.27,
    },
  },
  {
    firstName: "Leo",
    lastName: "Howard",
    cityOfOrigin: "Dallax",
    stateOfOrigin: "TX",
    locatedAt: {
      lat: 39.97,
      lng: -105.33,
    },
  },
  {
    firstName: "Maria",
    lastName: "Baisden",
    cityOfOrigin: "Raleigh",
    stateOfOrigin: "NC",
    locatedAt: {
      lat: 40.00,
      lng: -105.29,
    },
  },
  {
    firstName: "Sandy",
    lastName: "Townsend",
    cityOfOrigin: "Newport",
    stateOfOrigin: "PA",
    locatedAt: {
      lat: 40.05,
      lng: -105.30,
    },
  },

  {
    firstName: "Melinda",
    lastName: "Stephenson",
    cityOfOrigin: "Kahului",
    stateOfOrigin: "HI",
    locatedAt: {
      lat: 39.99,
      lng: -105.31,
    },
  },
  {
    firstName: "Jason",
    lastName: "Nicholas",
    cityOfOrigin: "Alexandria",
    stateOfOrigin: "VA",
    locatedAt: {
      lat: 40.01,
      lng: -105.32,
    },
  }
];

function createMap(mapDIV, mapCenter, mapZoom) {
  let _map = new google.maps.Map(mapDIV, {
    center: new google.maps.LatLng(mapCenter.lat, mapCenter.lng),
    zoom: mapZoom,
    zIndex: 1,
  });

  return _map;
}

function createMarker(map, rider) {
  const information = `
    <div id="content">
    <h2 id="firstHeading" class="firstHeading">${rider.firstName} ${rider.lastName}</h2>
    <div id="bodyContent">
    <p>${rider.cityOfOrigin} ${rider.stateOfOrigin}</p>
    </div>
    </div>
  `;
  const infowindow = new google.maps.InfoWindow({
    content: information,
  });

  const _marker = new google.maps.Marker({
    position: new google.maps.LatLng(rider.locatedAt.lat, rider.locatedAt.lng),
    map,
    title: rider.firstName,
  });

  _marker.addListener("click", () => {
    infowindow.open(map, _marker);
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
  mapZoom: 11,
};

window.showMap = () => {
  var map = createMap(
    document.getElementById("godwinmap"),
    mapCenter,
    mapCenter.mapZoom
  );
  riders.forEach((rider) => {
    createMarker(map, rider);
  });
};
