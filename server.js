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
var axe = require('axe-core');
var events = require('events');
var score;



var urlencoderParser = bodyParser.urlencoded({ extended: true });
// set the view engine to ejs
app.set('view engine', 'ejs');

// Set the port number
let port = 8000;


app.use(express.static(__dirname + '/public'));

// index page 
app.get('/', function (req, res) {


	var header = "Test your website";
	res.render('pages/index', {
	});

});



// Accessibility check page 
app.get('/accessibilityCheck', function (req, res) {
	res.render('pages/accessibilityCheck');
});

app.post('/accessibilityCheck', urlencoderParser, function (req, res) {
	score = 500;
	url = req.body.url;
	var finalUrl;


	var result;

	var driver = new WebDriver.Builder()
		.forBrowser('firefox')
		.setFirefoxOptions(new firefox.Options().headless(), new firefox.Options().proxy = null)
		.build();

	var colorContrastArray = [];
	var HTMLstructureArray = [];
	var missingHTMLArray = []
	var scalingArray = [];
	var impact;
	var category;
	if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
		finalUrl = url;
	} else {
		finalUrl = "https://" + url;
	}
	try {
		urlExists(finalUrl, function (err, exists) {
			if (exists) {
				driver
					.get(finalUrl)
					.then(function () {
						AxeBuilder(driver)
							.analyze(function (results) {
								driver.quit();
								result = results['violations'];
								for (let i = 0; i < results.length; i++) {

								}
								for (let i = 0; i < result.length; i++) {
									impact = results['violations'][i]['impact']
									category = results['violations'][i]['tags'][0];
									// console.log("\n" + results['violations'][i]['tags'][0]);



									if (category == 'cat.color') {
										colorContrastArray.push(results['violations'][i]);

									}

									if (category == 'cat.sensory-and-visual-cues' || category == 'cat.time-and-media') {
										scalingArray.push(results['violations'][i]);

									}

									if (category == 'cat.text-alternatives' || category == 'cat.aria' || category == 'cat.name-role-value' || category == 'cat.forms') {
										missingHTMLArray.push(results['violations'][i]);

									}

									if (category == 'cat.language' || category == 'cat.tables' || category == 'cat.structure' || category == 'cat.semantics' || category == 'cat.keyboard' || category == 'cat.parsing') {
										HTMLstructureArray.push(results['violations'][i]);

									}

									switch (impact) {
										case 'critical':
											score -= 40;
											break;
										case 'serious':
											score -= 20;
											break;
										case 'moderate':
											score -= 10;
											break;
										case 'minor':
											score -= 5;
											break;
										default:
											break;
									}


								}
								res.render('pages/results', {
									data: result,
									score: score,
									scalingArray: scalingArray,
									colorContrastArray: colorContrastArray,
									missingHTMLArray: missingHTMLArray,
									HTMLstructureArray: HTMLstructureArray
								});

							});
					});
			}

		});
	} catch (e) {
		console.error(e);
	}
	console.log(finalUrl);



});



const server = http.createServer(app).listen(port, function (req, res) {
	console.log('LISTENING ON PORT ' + port);
});


