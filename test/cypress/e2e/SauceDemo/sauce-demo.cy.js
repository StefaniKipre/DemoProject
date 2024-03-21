describe('My First Test',() => {
  it('test qa1', () => {
    cy.visit('https://www.saucedemo.com/v1/')
   

    cy.url().should('include', '/v1/')

    cy.get('input[name="user-name"]').type('standard_user')
    cy.get('input[name="password"]').type('secret_sauce')

    cy.get('input[name="user-name"]').should('have.value', 'standard_user')
    cy.get('input[name="password"]').should('have.value', 'secret_sauce')
     cy.task('log','idemo nish')
    cy.contains('LOGIN').click()
  
    cy.contains('#inventory_container > div > div:nth-child(1) > div.pricebar > button', 'ADD TO CART').click()
    cy.contains('#inventory_container > div > div:nth-child(2) > div.pricebar > button', 'ADD TO CART').click()
    
    cy.get('#shopping_cart_container > a > svg > path').click()
    cy.get('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button').click()

    cy.get('input[id="first-name"]').type('Stefani')
    cy.get('input[id="last-name"]').type('Kiprevska')
    cy.get('input[id="postal-code"]').type('1000')
    cy.contains('CONTINUE').click()

    cy.contains('FINISH').click()
    cy.log('idemo nish')
  })
})