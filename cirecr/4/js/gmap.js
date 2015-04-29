function initialize() {
	var mapCanvas = document.getElementById('map-canvas');

	var myLatlng = new google.maps.LatLng(9.928379, -84.060886);

	var mapOptions = {
		center: myLatlng,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);

	var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title:"CIRE S.A."
	});
}

google.maps.event.addDomListener(window, 'load', initialize);