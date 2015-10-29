chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('window.html', {
		'outerBounds': {
			'width': 400,
			'height': 500
		}
	});
	chrome.serial.getDevices(function(ports) {
		ports.forEach(function(port) {
			console.log('port: ' + port.path);
		});
	});
});
