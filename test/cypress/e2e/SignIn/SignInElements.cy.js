class SignInElements {
    elements = {
        CreateAccountBtn: () => cy.get('#main-content > div > div > aside > a'),
        Firstname: () => cy.contains('First Name'),
        Lastname: () => cy.contains('Last Name'),
        Email: () => cy.contains('Email'),
        Password: () => cy.contains('Password'),
        TermsBtn: () => cy.get('input#user\[terms\].form__control.input--error'),
        SignUpBtn: () => cy.contains('Sign Up'),
        ProfileBtn: () => cy.get('body > header *.header__container * li.dropdown.header__nav-item.open > button'),
        SignOutBtn: () => cy.get ('#header-dropdown-menu > li:nth-child(4) > a'),
        SigInRedirect: () => cy.get('body > header *.header__container * > nav a'),
        SignInBtn: () => cy.get ('#sign_in_79bc27d7a7 > div.form__button-group > button')
    }
    CreateAccount(){
        this.elements.CreateAccountBtn().click()
    }
    FirstName(FName){
        this.elements.Firstname().type(FName)
    }
    LastName(LName){
        this.elements.Lastname().type(LName)
    }
    Email(mail){
        this.elements.Email().type(mail)
    }
    Password(pass){
        this.elements.Password().type(pass)
    }
    Terms(){
        this.elements.TermsBtn().check()
    }
    SignUp(){
        this.elements.SignUpBtn().click()
    }


}
export default SignInElements;