import InputElements from "./InputElements.cy";
const Input = new InputElements();

describe('Test Input value validation', () => {

    before(function() {
      cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html');
   })
   it ('Test all input fields', () => {
    Input.Firstname('Stefani')
    Input.Lastname('Mnogudolgoprezime')
    Input.Age('26')
    Input.Country('North Macedonia')
    Input.Notes('TEST')
    Input.Submit()
    Input.elements.FirstnameInput().find('#firstname-value').should('have.text', 'Stefani')
    Input.elements.LastnameInput().find('#surname-value').should('have.text', 'Mnogudolgoprezime')
    Input.elements.AgeInput().find('#age-value').should('have.text', '26')
    Input.elements.CountrySelect().find('#country-value').should('have.text', 'North Macedonia')
    Input.elements.NotesInput().find('#notes-value').should('have.text', 'TEST')
  })
})   