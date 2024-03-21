class universityElements {
    elements = {
    
        dropdownOne: () => cy.get ('#dropdowm-menu-1').select('SQL'),
        dropdownTwo: () => cy.get ('#dropdowm-menu-2').select('Maven'),
        dropdownThree: () => cy.get ('#dropdowm-menu-3').select('JavaScript'),
        checkboxOne: () => cy.get ('label:nth-child(1) > input[type=checkbox]'),
        checkboxTwo: () => cy.get ('label:nth-child(3) > input[type=checkbox]'),
        checkboxThree: () => cy.get ('label:nth-child(5) > input[type=checkbox]'),
        checkboxFour: () => cy.get ('label:nth-child(7) > input[type=checkbox]'),
        green: () => cy.get ('#radio-buttons > input[type=radio]:nth-child(1)'),
        blue: () => cy.get ('#radio-buttons > input[type=radio]:nth-child(3)'),
        yellow: () => cy.get ('#radio-buttons > input[type=radio]:nth-child(5)'),
        orange: () => cy.get ('#radio-buttons > input[type=radio]:nth-child(7)'),
        purple: () => cy.get ('#radio-buttons > input[type=radio]:nth-child(9)'),
        lettuce: () => cy.get ('#radio-buttons-selected-disabled > input[type=radio]:nth-child(1)'),
        pumpkin: () => cy.get ('#radio-buttons-selected-disabled > input[type=radio]:nth-child(5)'),
        pear: () => cy.get ('#fruit-selects').select('Pear')
    }
    Selectdropdowns(){
        this.elements.dropdownOne().should('have.value', 'sql')
        this.elements.dropdownTwo().should('have.value', 'maven')
        this.elements.dropdownThree().should('have.value', 'javascript')
    }
    Selectcheckbox (){
        this.elements.checkboxOne().click()
        this.elements.checkboxTwo().click()
        this.elements.checkboxThree().click()
        this.elements.checkboxFour().click()
    }
    SelectColours (){
        this.elements.green().click()
        this.elements.blue().click()
        this.elements.yellow().click()
        this.elements.orange().click()
        this.elements.purple().click()
    }
    SelectFood (){
        this.elements.lettuce().click()
        this.elements.pumpkin().click()
    }
    SelectPear (){
        this.elements.pear().should('have.value', 'pear')
    }


}
export default universityElements;