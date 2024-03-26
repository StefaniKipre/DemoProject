import iframeElements from "./iframeElements.cy";
const Choose = new iframeElements();
const getIframeDocument = () => {
   return cy
   .get('#theiframe')
   .its('0.contentDocument').should('exist')
 }
 const getIframeBody = () => {
   return getIframeDocument()
   .its('body').should('not.be.undefined')
   .then(cy.wrap)
 }

describe('Test Iframe input results and click on element in iframe', () => {
    before(function() {
      cy.visit('https://eviltester.github.io/TestingApp/apps/iframe-search/iframe-search.html');
   })
   it ('Input results and click on a search result', () => {

    Choose.ChooseSearchEngine('info.com')
    Choose.Type('Stefi')
    Choose.ClickSearchBtn()
    cy.wait(3000)
    cy.log('Stefi')
    getIframeBody().find('[data-extra*="position=2"]').should('have.text', 'STEFI - YouTube')
    cy.wait(3000)

   })
   it ('Clear search input and try with another search engine', () => {
      Choose.ChooseSearchEngine('bing.com')
      Choose.Type('Cypress')
      Choose.ClickSearchBtn()
      cy.wait(5000)
      getIframeBody().find('h2 [href="https://github.com/cypress-io/cypress"]').should('have.text','GitHub - cypress-io/cypress: Fast, easy and reliable …')
      cy.wait(3000)
   })
})