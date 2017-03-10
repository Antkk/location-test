$(document).ready(function () {
  var longitudediv = jQuery('.longitude');
  var lattitudediv = jQuery('.lattitude');

  var latitude;
  var longitude;

  if (navigator.geolocation) {
      // Browser supports it, we're good to go!
  } else {
    alert('Sorry your browser doesn\'t support the Geolocation API');
  }

  updateLocation();

  function updateLocation() {
    navigator.geolocation.getCurrentPosition(exportPosition, errorPosition);
  }


  function errorPosition() {
    alert('Sorry couldn\'t find your location');
    pretext.show();
  }

  function exportPosition(position) {

      // Get the geolocation properties and set them as variables
      latitude = position.coords.latitude;
      longitude  = position.coords.longitude;

      longitudediv.html('Longitude: '+longitude);
      lattitudediv.html('Latitude: '+latitude);

      window.setTimeout(updateLocation, 1000);
  }
});