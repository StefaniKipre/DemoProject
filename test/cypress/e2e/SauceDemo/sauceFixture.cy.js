import loginPage from './SauceDemo/loginPage.cy'
import orderPage from './SauceDemo/orderPage.cy'

const tests = require('./Sauce.json')

describe ('Sauce Test', () => {
    beforeEach (() => {
        cy.visit ('https://www.saucedemo.com/v1/')

    })
   // cy.task('Stefi console log: ' + tests)
tests.forEach(test =>{
    //cy.task('Stefi console log: ' + tests)
    it(test.name,() => {
       // cy.task('Stefi console log: ' + tests)
        const login = new loginPage();
        const order = new orderPage();
      
      login.enterUsername(test.username)
      login.enterPassword(test.password)
      login.clickSubmit()

      if (test.name === 'login'){
        order.Products().should('have.text', test.expected)
      }else{
        login.errorMsg().should('have.text', test.expected)
      }
      
    })
})

})