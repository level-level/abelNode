// load the things we need
var express = require('express');
var app = express();
var http = require('http');
let io = require('socket.io');
var AxeBuilder = require('axe-webdriverjs');
var WebDriver = require('selenium-webdriver');
const puppeteer = require('puppeteer');
const firefox = require('selenium-webdriver/firefox');
const bodyParser = require('body-parser');

var urlencoderParser = bodyParser.urlencoded({ extended: true });
// set the view engine to ejs
app.set('view engine', 'ejs');

// Set the port number
let port = 8080;

app.post('/', urlencoderParser, function (req, res) {
	var header = "Test your website";
	url = req.body.url;
	var finalUrl;

	var violations = [];
	var result;
	var driver = new WebDriver.Builder()
		.forBrowser('firefox')
		.setFirefoxOptions(new firefox.Options().headless())
		.build();

	if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
		finalUrl = url;
	} else {
		finalUrl = "https://" + url;
	}

	console.log(finalUrl);
	
	driver
		.get(finalUrl)
		.then(function () {
			AxeBuilder(driver)
				.analyze(function (results) {
					violations.push(results);
					driver.quit();
					console.log(violations[0]['violations']);
					result = violations[0]['violations'];
					io.emit('data', result);
				});
		});

	res.render('pages/index', {
		header: header
	});


});

// index page 
app.get('/', function (req, res) {
	var header = "Test your website";
	res.render('pages/index', {
		header: header
	});

});



// about page 
app.get('/about', function (req, res) {
	res.render('pages/about');
});



const server = http.createServer(app).listen(port, function (req, res) {
	console.log('LISTENING ON PORT ' + port);
});


// Set up socket.io to 'listen'
io = io.listen(server);

// Display a conection message
io.on('connection', function (socket) {
	console.log('SOCKET.IO CONNECTED');

	// Display a disconnection message
	socket.on('disconnect', function () {
		console.log('SOCKET.IO DISCONNECTED');
	})
});