Abel - Accessibility checker
========

This project is build on the Express framework in NodeJS.

This webapp uses the [axe-webdriverjs](https://github.com/dequelabs/axe-webdriverjs) to display accessibility issues in your html elements.

It also need to use selenium-webdriver to start a browser to test your website.

Use npm install to install all necessary packages

```
cd abelNode
npm install
```
how to run the project

``` nodemon server.js ``` 

here below is a sample code that shows how to test a url:

```nodejs
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



