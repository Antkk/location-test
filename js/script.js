$(document).ready(function () {
  var longitudediv = jQuery('.longitude');
  var lattitudediv = jQuery('.lattitude');
  var statusspan = jQuery('.status');

  var latitude;
  var longitude;
  var counter = 0;

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

      counter++;
      statusspan.html('updated ' + counter + ' times');

      window.setTimeout(updateLocation, 1000);
  }
});