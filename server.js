// load the things we need
var express = require('express');
var app = express();
var AxeBuilder = require('axe-webdriverjs');
var WebDriver = require('selenium-webdriver');
const puppeteer = require('puppeteer');
const firefox = require('selenium-webdriver/firefox');
const bodyParser = require('body-parser');

var urlencoderParser = bodyParser.urlencoded({ extended: true });
// set the view engine to ejs
app.set('view engine', 'ejs');

app.post('/', urlencoderParser, function (req, res) {
	var header = "Test your website";
	console.log(req.body.url);

	url = req.body.url;

	var violations = [];
	var driver = new WebDriver.Builder()
		.forBrowser('firefox')
		.setFirefoxOptions(new firefox.Options().headless())
		.build();


	driver
		.get("https://"+url)
		.then(function () {
			AxeBuilder(driver)
				.analyze(function (results) {
					violations.push(results);
					driver.quit();
					console.log(violations[0]['violations'][0]);
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

app.listen(8080);
console.log('8080 is the magic port');