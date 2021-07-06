// using webdriver libraries
const {Builder} = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
require('chromedriver');

(
    async function Pramod(){

        const driver = new Builder().forBrowser('chrome').build();

        try{
             await driver.get('https://www.google.com');
             await  driver.findElement(By.name('q')).sendKeys('Pramod - entering values........')

        }
        finally{
            driver.quit()
        }
          

    }
)()