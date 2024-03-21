import dropdownOne from '../../fixtures/users.json'

describe('Practice test', () => {
    it('test Demo', () => {
      cy.visit('https://formstone.it/components/dropdown/demo/')
      cy.get(dropdownOne).click()
      cy.wait(2500),
      cy.get('#demo_groups-dropdown .fs-scrollbar-content').contains('Nine').click()
      cy.wait(2000)
      cy.get('#demo_groups-dropdown-selected').should('have.text', 'Nine')
    })
})