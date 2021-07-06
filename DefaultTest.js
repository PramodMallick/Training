const {Builder, By, until} = require('selenium-webdriver');

(async function example(){

const driver = await new Builder().forBrowser('chrome').build();

try{

    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('pramod');


}
finally{
    await driver.quit();
}

})()


    
       
    
