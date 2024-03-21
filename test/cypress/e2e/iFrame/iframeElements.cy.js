class iframeElements {
    elements = {
        SearchEngine: () => cy.get('#engines'),
        SearchInput: () => cy.get('#search-term'),
        SearchBtn: () => cy.get('body > button'),
        //ClickSearchResult: () => cy.get('#theiframe').find('class="web-yahoo__result"').should('have.text.','Stefi – Wikipédia').click(),
    }
ChooseSearchEngine(SearchEngine){
    this.elements.SearchEngine().select(SearchEngine)
}
Type(SearchValue){
    this.elements.SearchInput().clear().type(SearchValue)
}
ClickSearchBtn(){
    this.elements.SearchBtn().click()
}
}
export default iframeElements;