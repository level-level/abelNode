// load the things we need
var express = require('express');
var app = express();
var AxeBuilder = require('axe-webdriverjs');
var WebDriver = require('selenium-webdriver');
const puppeteer = require('puppeteer');
const firefox = require('selenium-webdriver/firefox');

// set the view engine to ejs
app.set('view engine', 'ejs');


// Axe web test


// use res.render to load up an ejs view file

// index page 
app.get('/', function (req, res) {
	var header = "Violations";
	var description = "des";
	var violations = [];


	var driver = new WebDriver.Builder()
		.forBrowser('firefox')
		.setFirefoxOptions(new firefox.Options().headless())
		.build();


	driver
		.get('https://level-level.com')
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



// about page 
app.get('/about', function (req, res) {
	res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');