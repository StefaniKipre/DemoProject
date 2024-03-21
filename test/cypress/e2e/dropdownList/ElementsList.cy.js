class ElementsList {
    elements = {
        Dropdown: () => cy.get('#dropdown')
    }
    Selectdropdown(Dropdown){
        this.elements.Dropdown().select(Dropdown)
    }
}
export default ElementsList;