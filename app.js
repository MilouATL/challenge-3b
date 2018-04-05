var map;
      
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: {lat: 52.062996, lng: 4.279383},
  styles: [
    {
      "featureType": "administrative.country",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a24353"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#7e3542"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ededed"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ededed"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#171717"
        },
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "color": "#a24353"
        },
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#bf4c59"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bbccb9"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#bf4c59"
        }
      ]
    },
    {
      "featureType": "landscape.natural.landcover",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape.natural.terrain",
      "stylers": [
        {
          "color": "#bf4c59"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#bf4c59"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a24353"
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#e17250"
        }
      ]
    },
    {
      "featureType": "transit.station.airport",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#e17250"
        }
      ]
    },
    {
      "featureType": "transit.station.rail",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#e17250"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#363636"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#bf4c59"
        }
      ]
    }
  ]
});

//position launchpad 
var launchpad;

var launchpad = new google.maps.Marker({
    position: {lat: 52.102401, lng: 4.302183},
    map: map,
    icon: 'home.png'
  });


function myWindow(title, link, image, dates, price) {
  const daysToRender = dates.spanMultipleDays ? `start: ${dates.start.localDate}<br/>end: ${dates.end.localDate}` : `start: ${dates.start.localDate}`
  return `
    <div id="infowindow" class="infowindow">
      <h1>${title}</h1>
      <div class="image">
        <img src="${image.url}" alt="${image.attribute}" height="${image.height}" width="${image.width}">
      </div>
      <div class="content">
        <p>price: ${price.min} ${price.currency}</p>
        <p>${daysToRender}</p>
        <a href="${link}" class="button">Get tickets!</a>
      </div>
    </div>
  `;
}

fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=MLsmLnJG0UCS1USmgAZwHcN1sFH8wpgJ&countryCode=NL&size=125')
// parse to JSON format
.then(response => response.json())
// catch error
.then(data => {
  data._embedded.events.map((event, i) => {
    console.log(`event ${i+1}`, event);

    const location = event._embedded.venues[0].location;

    var marker = new google.maps.Marker({
        position: {
          lat: Number(location.latitude),
          lng: Number(location.longitude),
        },
        map: map,
        title: event.name,
        icon: 'icon.png'
      });

    var infowindow = new google.maps.InfoWindow({
      content: myWindow(event.name, event.url, event.images[3], event.dates, event.priceRanges[0])
    });
    marker.addListener('click', () => infowindow.open(map, marker));
  });
})
.catch(function (error) {
  // onAPIError();
  console.error('Request failed', error);
});