Abel - Accessibility checker
========

This project is build on the Express framework in NodeJS.

This webapp uses the [axe-webdriverjs](https://github.com/dequelabs/axe-webdriverjs) to display accessibility issues in your html elements.

It also needs to use selenium-webdriver to start a browser to test your website.

## install the following drivers:

### Geckodriver
```wget https://github.com/mozilla/geckodriver/releases/download/v0.16.1/geckodriver-v0.16.1-linux64.tar.gz
sudo sh -c 'tar -x geckodriver -zf geckodriver-v0.16.1-linux64.tar.gz -O > /usr/bin/geckodriver'
sudo chmod +x /usr/bin/geckodriver
rm geckodriver-v0.16.1-linux64.tar.gz```

## Selemnium webDriver & Firefox
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



