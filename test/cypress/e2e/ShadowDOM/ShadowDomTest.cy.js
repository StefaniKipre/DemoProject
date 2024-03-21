import ShadowdomElements from "./ShadowdomElements.cy";
const Shadow = new ShadowdomElements();

describe('Test click on elements in shadow dom', () => {

    before(function() {
      cy.visit('https://the-internet.herokuapp.com/shadowdom');
   })
   it ('Assert Shadow dom Text', () => {
    Shadow.TextOne()
    //cy.wait(2000)
    //cy.get('#content > my-paragraph:nth-child(4) > span').should('have.text', "Let's have some different text!")
    cy.wait(2000)
    /*Shadow.TextTwo()
    //cy.get('#content > my-paragraph:nth-child(5) > ul').should('have.text', '\n    Let\'s have some different text!\n    In a list!\n')
    cy.wait(2000)*/

   })
})