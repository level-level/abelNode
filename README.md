Abel - Accessibility checker
========

This project is build on the Express framework in NodeJS.

This webapp uses the ![axe-webdriverjs](https://github.com/dequelabs/axe-webdriverjs) to display accessibility issues in your html elements.

It also need to use selenium-webdriver to start a browser that to test your website.

Use npm install to install all necessary packages

```
cd abelNode
npm install
```

here below is a sample code that shows how to test a url:

```
var driver = new WebDriver.Builder()
		.forBrowser('firefox')
		.build();


	driver
		.get('https://level-level.com')
		.then(function () {
			AxeBuilder(driver)
				.analyze(function (results) {
					driver.quit();
					console.log(results);
				});
		});
```



