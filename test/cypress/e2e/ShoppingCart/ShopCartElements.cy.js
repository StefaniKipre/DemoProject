class ShopCartElements {
    elements = {
        SizeXSbutton: () => cy.get('#root  * main *.sc-bj2vay-0.DCKcC *:nth-child(2) > label > span'),
        SizeSbutton: () => cy.get('#root * main *.sc-bj2vay-0.DCKcC *:nth-child(3) > label > span'),
        SizeMbutton: () => cy.get('#root * main *.sc-bj2vay-0.DCKcC *:nth-child(4) > label > span'),
        SizeMLbutton: () => cy.get('#root * main *.sc-bj2vay-0.DCKcC *:nth-child(5) > label > span'),
        SizeLbutton: () => cy.get('#root * main * div.sc-bj2vay-0.DCKcC *:nth-child(6) > label > span'),
        SizeXLbutton: () => cy.get('#root * main *.sc-bj2vay-0.DCKcC *:nth-child(7) > label > span'),
        SizeXXLbutton: () => cy.get('#root * main *.sc-bj2vay-0.DCKcC *:nth-child(8) > label > span'),
        AddtoCartSizeM: () => cy.get('#root * main > main *.sc-124al1g-2.dwOYCh > button'),
        AddtoCartSizeL: () => cy.get('#root * main > main *.sc-124al1g-2.bCLaRj > button'),
        AddtoCartSizeXL: () => cy.get('#root * main > main * .sc-124al1g-2.dzBqXE > button'),
        OpenCart: () => cy.get('#root > div > div.sc-1h98xa9-1.fMOJZp > button > div'),
        CheckoutButton: () => cy.get('#root *.sc-1h98xa9-1.kQlqIC *.sc-1h98xa9-12.fqwdnu > button'),
        AddQuantityButton: () => cy.get('#root *.sc-1h98xa9-1.kQlqIC *.sc-7th5t8-0.jehOnP *:nth-child(1) *.sc-11uohgb-4.bnZqjD * button:nth-child(2)'),
        AddQuantityButton2: () => cy.get('#root *.sc-1h98xa9-1.kQlqIC *.sc-7th5t8-0.jehOnP *:nth-child(2) *.sc-11uohgb-4.bnZqjD * button:nth-child(2)'),
        CloseCartButton: () => cy.get('#root *.sc-1h98xa9-1.kQlqIC > button')
    
    }

    Sizes(SizestoClick){
        if (SizestoClick.includes('XS')) { this.elements.SizeXSbutton().click(); } 
        if (SizestoClick.includes('S')) { this.elements.SizeSbutton().click(); } 
        if (SizestoClick.includes('M')) { this.elements.SizeMbutton().click(); } 
        if (SizestoClick.includes('ML')) { this.elements.SizeMLbutton().click(); }
        if (SizestoClick.includes('L')) { this.elements.SizeLbutton().click(); }
        if (SizestoClick.includes('XL')) { this.elements.SizeXLbutton().click(); }
        if (SizestoClick.includes('XXL')) { this.elements.SizeXXLbutton().click(); }

    }
     SelectItems(AddToCartClick){
        if (AddToCartClick.includes('Cropped Stay Groovy off white')) { this.elements.AddtoCartSizeM().click(); } 
        if (AddToCartClick.includes('Basic Cactus White T-shirt')) { this.elements.AddtoCartSizeL().click(); } 
        if (AddToCartClick.includes('Marine Blue T-shirt')) { this.elements.AddtoCartSizeXL().click(); } 
    }
    Cart(){
        this.elements.OpenCart().click();
        this.elements.AddQuantityButton().click();
        this.elements.AddQuantityButton2().click(); 
        this.elements.CheckoutButton().click(); 
    }
    CloseCart(){
        this.elements.CloseCartButton().click();
    }

}
export default ShopCartElements;