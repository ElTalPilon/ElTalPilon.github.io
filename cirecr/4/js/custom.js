function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
		center: new google.maps.LatLng(9.9321922,-84.0599107),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions)
}

google.maps.event.addDomListener(window, 'load', initialize);

var marker = new google.maps.Marker({
    position: myLatLng,
    title:"CIRE S.A."
});

// To add the marker to the map, call setMap();
marker.setMap(map);