class orderPage{
    elements = {
Products : () => cy.get('.tittle'),
addToCart1 : () =>  cy.contains('#inventory_container > div > div:nth-child(1) > div.pricebar > button', 'ADD TO CART'),
addToCart2 : () => cy.contains('#inventory_container > div > div:nth-child(2) > div.pricebar > button', 'ADD TO CART'),
shopCart : () => cy.get('#shopping_cart_container > a > svg'),
checkout : () => cy.get('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button'),
firstNameInput : () => cy.get('input[id="first-name"]'),
lastNameInput : () => cy.get('input[id="last-name"]'),
zipInput : () => cy.get('input[id="postal-code"]'),
continueBtn : () => cy.contains('CONTINUE'),
finishBtn : () => cy.contains('FINISH')
    }
    addToCart1() {
        this.elements.addToCart1().click();
    }
    addToCart2() {
        this.elements.addToCart2().click();
    }
    clickshopCart() {
        this.elements.shopCart().click();
    }
    clickcheckout() {
        this.elements.checkout().click();
    }
    enterFirstname(firstName)
   {
       this.elements.firstNameInput().clear();
       this.elements.firstNameInput().type("Stefani");
   }
   enterLastname(lastName)
   {
       this.elements.lastNameInput().clear();
       this.elements.lastNameInput().type("Kiprevska");
   }
   enterPostalcode(postalcode)
   {
       this.elements.zipInput().clear();
       this.elements.zipInput().type("1000");
   }
   continue() {
    this.elements.continueBtn().click();
   }
   finish() {
    this.elements.finishBtn().click();
}
Products() {
    this.elements.Products();
}
}
export default orderPage;
