import loginPage from '../pageobjects/loginPage.cy'

describe('POM Test', () => {


 it('Verify Login successful', () => {
  cy.visit('https://www.saucedemo.com/v1/');
   const loginObj = new loginPage();
   cy.task('log', "FIRST POINT QA")
   loginObj.enterUsername('standard_user')
   cy.task('log', "FIRST POINT QA")
   loginObj.enterPassword('secret_sauce')
   loginObj.clickSubmit();
 })

 it('Verify Login unsuccessful for invalid username/password', () => {
   const loginObj = new loginPage();
   loginObj.enterUsername('selenium')
   loginObj.enterPassword('qa@123')
   loginObj.clickSubmit();
   loginObj.elements.errorTxt().should('Epic sadface: Username and password do not match any user in this service'
   );
 })
})