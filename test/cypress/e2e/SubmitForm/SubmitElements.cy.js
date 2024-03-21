class SubmitElements {
    elements = {

        FirstName: () => cy.get('#et_pb_contact_name_0'),
        FirstMessage: () => cy.get('#et_pb_contact_message_0'),
        FirstSubmit: () => cy.get('#et_pb_contact_form_0 button'),
        SecondName: () => cy.get('#et_pb_contact_name_1'),
        SecondMessage: () => cy.get('#et_pb_contact_message_1'),
        SecondSubmit: () => cy.get('#et_pb_contact_form_1 button'),
        MathProblem: () => cy.get('[name="et_pb_contact_captcha_1"]')
    }
    FirstInput(NameOne){
        this.elements.FirstName().type(NameOne)
    }
    MessageOne(MessageOne){
        this.elements.FirstMessage().type(MessageOne)
    }
    SubmitOne(){
        this.elements.FirstSubmit().click()
    }
    SecondInput(NameTwo){
        this.elements.SecondName().type(NameTwo)
    }
    MessageTwo(MessageTwo){
        this.elements.SecondMessage().type(MessageTwo)
    }
    SubmitTwo(){
        this.elements.SecondSubmit().click()
    }
    Math(Math){
        this.elements.MathProblem().type(Math)
    }
}
export default SubmitElements;