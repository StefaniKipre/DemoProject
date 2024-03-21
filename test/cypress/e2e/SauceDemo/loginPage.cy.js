class loginPage {
    elements = {
        usernameInput : () => cy.get('input[name="user-name"]'),
        passwordInput : () => cy.get('input[name="password"]'),
        loginBtn : () => cy.contains('LOGIN'),
        errorMsg : () => cy.get('#login_button_container > div > form > h3 > button')

    }
    enterUsername(username)
   {
       this.elements.usernameInput().clear();
       this.elements.usernameInput().type(username);
   }

   enterPassword(password)
   {
       this.elements.passwordInput().clear();
       this.elements.passwordInput().type(password);
   }
  
   clickSubmit() {
       this.elements.loginBtn().click();
   }
   clickError() {
    this.elements.errorMsg().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
}

}
export default loginPage;
