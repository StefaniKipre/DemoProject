class ShadowdomElements {
    elements = {
        FirstText: () => cy.get('#content > my-paragraph:nth-child(4)').shadow().find('#content > my-paragraph:nth-child(4) > span').should('have.text', "Let's have some different text!"),
        SecondText: () => cy.get('body > div:nth-child(2)').shadow().find('content > my-paragraph:nth-child(5) > ul')
    }
    TextOne(){
        this.elements.FirstText().click()
    }
    TextTwo(){
        this.elements.SecondText().click()
    }
}
export default ShadowdomElements;