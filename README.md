Abel - Accessibility checker
========

This project is build on the Express framework in NodeJS.

This webapp uses the [axe-webdriverjs](https://github.com/dequelabs/axe-webdriverjs) to display accessibility issues in your html elements.

It also needs to use selenium-webdriver to start a browser to test your website.


## You will need to have Nodejs 8 installed to run this project correctly without any errors.

## install the following drivers:

### Geckodriver
```
wget https://github.com/mozilla/geckodriver/releases/download/v0.19.0/geckodriver-v0.19.0-linux64.tar.gz
tar -xvzf geckodriver*
chmod +x geckodriver
sudo mv geckodriver /usr/local/bin/
```

## Selenium webDriver & Firefox
[Running Selenium WebDriver tests using Firefox headless mode on Ubuntu](https://medium.com/@griggheo/running-selenium-webdriver-tests-using-firefox-headless-mode-on-ubuntu-d32500bb6af2)


Use npm install to install all necessary packages

```
cd abelNode
npm install
```
how to run the project

``` nodemon server.js ``` 

here below is a sample code that shows how to test a url:

```node
var driver = new WebDriver.Builder()
		.forBrowser('firefox')
		.setFirefoxOptions(new firefox.Options().headless())
		.build();


	driver
		.get("https://"+url)
		.then(function () {
			AxeBuilder(driver)
				.analyze(function (results) {
					driver.quit();
					console.log(results);
				});
		});
```

![Tool results example 1(https://i.imgur.com/Ag1oSvn.png)

![Tool results example 2(https://i.imgur.com/ZRuBFLa.png)


