/* globals $, google */

$(function () {
  if ($('#meetup-map').length) {
    var mapOptions = {
      center: new google.maps.LatLng(46.392411, -51.412826),
      zoom: 4,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      },
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      scaleControl: false,
      scrollwheel: true,
      panControl: true,
      streetViewControl: false,
      draggable: true,
      overviewMapControl: false,
      overviewMapControlOptions: {
        opened: false
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#193341' }]
      }, {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{ color: '#2c5a71' }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#29768a' }, { lightness: -37 }]
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#406d80' }]
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#406d80' }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{ visibility: 'on' }, { color: '#3e606f' }, { weight: 2 }, { gamma: 0.84 }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ffffff' }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [{ weight: 0.6 }, { color: '#1a3541' }]
      }, {
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }]
      }, {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#2c5a71' }]
      }]
    }

    var mapElement = document.getElementById('meetup-map')
    var map = new google.maps.Map(mapElement, mapOptions)
    var locations = [
      {
        title: 'Kong San Francisco',
        link: 'http://www.meetup.com/Kong-SF/',
        lng: 37.79402839999999,
        lat: -122.4028156
      },
      {
        title: 'Kong Boston',
        link: 'http://www.meetup.com/Kong-BOSTON/',
        lng: 42.3600825,
        lat: -71.05888010000001
      },
      {
        title: 'Kong London',
        link: 'http://www.meetup.com/Kong-LONDON/',
        lng: 51.5073509,
        lat: -0.12775829999998223
      }
    ]

    locations.forEach(function (location) {
      var marker = new google.maps.Marker({
        icon: 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png',
        position: new google.maps.LatLng(location.lng, location.lat),
        map: map,
        title: location.title,
        web: location.link
      })

      var html = "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>" + location.title + "</h4><a href='" + location.link + "'' target='_blank'>" + location.link + '<a></div>'
      var infoWindow = new google.maps.InfoWindow({content: html})

      marker.addListener('click', function () {
        if (!infoWindow.getMap()) {
          infoWindow.open(map, marker)
        } else {
          infoWindow.close()
        }
      })
    })
  }
})
