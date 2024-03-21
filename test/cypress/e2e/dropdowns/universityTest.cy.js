import universityElements from './universityElements.cy'
const click = new universityElements();


describe('University Test', () => {

    before(function() {
      // executes prior each test within it block
      cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
   })
   it ('End to end', () => {

     click.Selectdropdowns()
     cy.wait(2000)
     click.Selectcheckbox()
     cy.wait(2000)
     click.SelectColours()
     click.SelectFood()
     cy.wait(2000)
     click.SelectPear()
     cy.wait(2000)
     
   })
})   