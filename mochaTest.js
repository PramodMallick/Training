

const {Builder} = require('selenium-webdriver');

describe('Verify login page functionality',function(){

    const driver = new Builder().forBrowser('chrome').build();

    before(function() {
        console.log('before')

    })

    after(function(){
        console.log('after executed')
    })

    this.beforeEach(function(){
        console.log('before each')
    })

    afterEach(async ()=> {

        await driver.get('http://www.google.com');

        console.log('after each function executed')
    })

    // it('Verify valid login id and valid password', () => {

    //     // console.log('Executing   ----> ', 'Verify valid login id and valid password')

    // })

    // it('Verify valid login id and invalid password', function(){

    //     // console.log('Executing   ----> ', 'Verify valid login id and invalid password')

    // })

    // it('Verify Invalid login id and valid password', function(){


    // })

    // it('Verify with special characters in login id', function(){


    // })

    // it('Verify blank password', function(){


    // })

} )