import SubmitElements from "./SubmitElements.cy";
const Form = new SubmitElements();

describe('Test Form submit with math problem', () => {

    before(function() {
      cy.visit('https://ultimateqa.com/filling-out-forms/');
   })
   it ('Test submit form', () => {
Form.FirstInput('Stefani')
cy.wait(2000)
Form.MessageOne('This is the first message <3')
cy.wait(2000)
Form.SubmitOne()
cy.wait(2000)
cy.get('#et_pb_contact_form_0').should('have.text', 'Thanks for contacting us')
Form.SecondInput('Kiprevska')
cy.wait(2000)
Form.MessageTwo('This is the second message </3')
cy.wait(2000)
Form.Math('15')
cy.wait(2000)
Form.SubmitTwo()
cy.wait(2000)
cy.get('#et_pb_contact_form_1').should('have.text', 'Thanks for contacting us')
   })
})