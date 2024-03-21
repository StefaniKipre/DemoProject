describe('Practice test 2', () => {
    it('test Dropdown', () => {
      cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
      let Stefi = cy.get('#post-2646 .twelve.columns >* select')
      Stefi.select('Cyprus')
      Stefi.should('have.value', 'CYP')

      //cy.get('#post-2646 .twelve.columns >* select').select('Cyprus')
      //cy.get('#post-2646 .twelve.columns >* select').should('have.value', 'CYP')
    })
})
