class LocationChangeElements {
    elements = {
        NameInput: () => cy.get('input[type=text][name="firstname"]'),
        SubmitBtn: () => cy.get('#submitForm')    
    }
    Name(name){
        this.elements.NameInput().type(name)
    }
    Submit(){
        this.elements.SubmitBtn().click()
    }
}
export default LocationChangeElements;