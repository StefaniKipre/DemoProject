class InputElements{
    elements = {
        FirstnameInput: () => cy.get('#firstname'),
        LastnameInput: () => cy.get('#surname'),
        AgeInput: () => cy.get('#age'),
        CountrySelect: () => cy.get('#country'),
        NotesInput: () => cy.get('#notes'),
        SubmitBtn: () => cy.get('body > div > div:nth-child(7) > form > input[type=submit]:nth-child(31)')
        }
        Firstname(Firstname){
            this.elements.FirstnameInput().type(Firstname)
        }
        Lastname(Lastname){
            this.elements.LastnameInput().type(Lastname)
        }
        Age(Age){
            this.elements.AgeInput().type(Age)
        }
        Country(Country){
            this.elements.CountrySelect().select(Country)
        }
        Notes(Notes){
            this.elements.NotesInput().type(Notes)
        }
        Submit(){
            this.elements.SubmitBtn().click()
        }
}
export default InputElements;