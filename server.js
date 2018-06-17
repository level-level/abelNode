// load the things we need
var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var AxeBuilder = require('axe-webdriverjs');
var WebDriver = require('selenium-webdriver');
const puppeteer = require('puppeteer');
const firefox = require('selenium-webdriver/firefox');
const bodyParser = require('body-parser');
var urlExists = require('url-exists');
var axe = require('axe-core');
var events = require('events');
var fs = require('fs');
var score;
var scoreColor;



var urlencoderParser = bodyParser.urlencoded({ extended: true });
// set the view engine to ejs
app.set('view engine', 'ejs');

// Set the port number
let port = 8080;


app.use(express.static(__dirname + '/public'));

// index page 
app.get('/', function (req, res) {
	// var driver = new WebDriver.Builder()
	// .forBrowser('firefox')
	// .setFirefoxOptions(new firefox.Options().headless(), new firefox.Options().proxy = null)
	// .build();

	// driver.get('https://coolblue.nl');

	// function writeScreenshot(data, name) {
	// 	name = name || 'ss.png';
	// 	var screenshotPath = 'public/img/';
	// 	fs.writeFileSync(screenshotPath + name, data, 'base64');
	//   };
	  
	//   driver.takeScreenshot().then(function(data) {
	// 	writeScreenshot(data, 'out1.png');
	//   });

	var header = "Test your website";
	res.render('pages/index', {
	});

});



// Accessibility check page 
app.get('/accessibilityCheck', function (req, res) {
	res.render('pages/accessibilityCheck');
});

app.get('/over-ons', function (req, res) {
	res.render('pages/about');
});

app.get('/contact', function (req, res) {
	res.render('pages/contact');
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
	var scorePercentage;
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
								
								result = results['violations'];

								for (let i = 0; i < result.length; i++) {
									impact = results['violations'][i]['impact']
									category = results['violations'][i]['tags'][0];
									// console.log("\n" + results['passes'][i]['id']);


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
											score -= 50;
											break;
										case 'serious':
											score -= 40;
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
								scorePercentage = score / 500 * 100;
								if (scorePercentage >= 95) {
									scoreColor = 'green';
								} else if (scorePercentage < 95 && scorePercentage > 70) {
									coreColor = 'yellow';
								} else if(scorePercentage <= 70 && scorePercentage > 50) {
									scoreColor = 'orange';
								}else {
									scoreColor = 'red';
								}
								res.render('pages/results', {
									data: result,
									score: score,
									url:url,
									scoreColor: scoreColor,
									scalingArray: scalingArray,
									scorePercentage: scorePercentage,
									colorContrastArray: colorContrastArray,
									missingHTMLArray: missingHTMLArray,
									HTMLstructureArray: HTMLstructureArray
								});
								driver.quit();
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


