const electron = require('electron')
var app = electron.app, BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', function() {
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 768
	});

	mainWindow.loadUrl('file://' + __dirname + '/windows/main/main.html');
	mainWindow.openDevTools();
});