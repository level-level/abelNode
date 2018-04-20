// load the things we need
var express = require('express');
var app = express();
var http = require('http');
var AxeBuilder = require('axe-webdriverjs');
var WebDriver = require('selenium-webdriver');
const puppeteer = require('puppeteer');
const firefox = require('selenium-webdriver/firefox');
const bodyParser = require('body-parser');
var urlExists = require('url-exists');


var urlencoderParser = bodyParser.urlencoded({ extended: true });
// set the view engine to ejs
app.set('view engine', 'ejs');

// Set the port number
let port = 8080;




app.post('/', urlencoderParser, function (req, res) {
	url = req.body.url;
	var finalUrl;


	var result;


	var driver = new WebDriver.Builder()
		.forBrowser('firefox')
		.setFirefoxOptions(new firefox.Options().headless(), new firefox.Options().proxy = null)
		.build();

	if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
		finalUrl = url;
	} else {
		finalUrl = "http://" + url;
	}

	urlExists(finalUrl, function (err, exists) {
		if (exists) {
			console.log("yeahh");
			driver
				.get(finalUrl)
				.then(function () {
					AxeBuilder(driver)
						.analyze(function (results) {
							driver.quit();
							result = result;
							// console.log(results['violations'][0]);
							// resultArray = Object.values(results['violations'][0]);
							// console.log(resultArray);

							result = results['violations'];

							console.log(result);


							var data = {
								title: 'Cleaning Supplies',
								supplies: ['mop', 'broom', 'duster']
							};
							res.render('pages/about', {
								data: result
							});

						});
				});
		} else {
			console.log("NOOO");
		}

	});
	console.log(finalUrl);



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


