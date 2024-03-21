import loginPage from '../e2e/SauceDemo/loginPage.cy'
import orderPage from '../e2e/SauceDemo/orderPage.cy'

describe('POM Test', () => {

 beforeEach(function() {
   // executes prior each test within it block
   cy.visit('https://www.saucedemo.com/v1/');
})

 it ('order', () => {
  const loginObj = new loginPage();
  const orderObj = new orderPage();

loginObj.enterUsername('standard_user')
loginObj.enterPassword('secret_sauce')
loginObj.clickSubmit();
orderObj.addToCart1()
orderObj.addToCart2()
orderObj.clickshopCart()
orderObj.clickcheckout()
orderObj.enterFirstname('Stefani')
orderObj.enterLastname('Kiprevska')
orderObj.enterPostalcode('1000')
orderObj.continue()
orderObj.finish()
 })
 
 
 it ('locked', () => {
  const loginObj = new loginPage();


loginObj.enterUsername('locked_out_user')
loginObj.enterPassword('secret_sauce')
loginObj.clickSubmit();
loginObj.errorMsg()//.should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
})

})