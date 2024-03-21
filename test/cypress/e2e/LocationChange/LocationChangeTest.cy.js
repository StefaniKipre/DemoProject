import LocationChangeElements from "./LocationChangeElements.cy";
const Input = new LocationChangeElements();

describe('Test page navigation and window location change', () => {
    before(function() {
      cy.visit('https://ultimateqa.com/sample-application-lifecycle-sprint-1/');
   })
   it ('Test Inout field with location change', () => {
    Input.Name('Stefani Kiprevska')
    Input.Submit()
    cy.wait(5000)
    cy.url().should('eq', 'https://ultimateqa.com/?firstname=Stefani%20Kiprevska')

   })
})