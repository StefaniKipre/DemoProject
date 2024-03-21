import SignInElements from "./SignInElements.cy";
const Signin = new SignInElements();

describe('Test Sign in validation', () => {

    before(function() {
      cy.visit('https://courses.ultimateqa.com/users/sign_in');
   })
   it ('Test input values', () => {
    Signin.CreateAccount()
    cy.wait(2000)
    Signin.FirstName('Stefi')
    Signin.LastName('Kipre')
    Signin.Email('Stefani@mail.com')
    Signin.Password('passv')
    cy.wait(2000)
   // Signin.Terms()
   // cy.wait(2000)
    Signin.SignUp()
    cy.wait(2000)

   })
})