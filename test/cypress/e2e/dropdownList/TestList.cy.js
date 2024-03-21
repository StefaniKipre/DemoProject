import ElementsList from "./ElementsList.cy";
const Stefi = new ElementsList();

describe('Test Dropdown list', () => {

    before(function() {
      cy.visit('https://the-internet.herokuapp.com/dropdown');
   })
   it ('Test chosen value from dropdown', () => {
    Stefi.Selectdropdown('Option 2')
    //cy.get('#dropdown').find('option[value="2"]').should("be.selected");
    Stefi.elements.Dropdown().find('option[value="2"]').should("be.selected")
    
   })
})