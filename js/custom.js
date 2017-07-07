//alert('custom');
window.onload = getLocation();
var x = document.getElementById("#demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
		alert(navigator);
    } else {
       alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
	alert(position.coords.latitude+'/'+position.coords.longitude);
	
   // x.innerHTML = "Latitude: " + position.coords.latitude + 
   // "<br>Longitude: " + position.coords.longitude; 
}


