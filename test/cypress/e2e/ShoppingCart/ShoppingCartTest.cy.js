import ShopCartElements from './ShopCartElements.cy'
const Stefi = new ShopCartElements();


describe('Testing Sizes, Items and Shopping Cart', () => {

    beforeEach(function() {
      cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');
   })
   it ('Test Size buttons', () => {
    Stefi.Sizes(["M" , "L" , "S" , "XXL"])
   })


    it ('Test Add To Cart buttons', () => {
    Stefi.Sizes(["M" , "L" , "XL"])
    Stefi.SelectItems(["Cropped Stay Groovy off white"])
    Stefi.CloseCart()
    //cy.wait(2000)
    Stefi.SelectItems(["Basic Cactus White T-shirt"])
    Stefi.CloseCart()
    //cy.wait(2000)
    Stefi.SelectItems(["Marine Blue T-shirt"])
    //cy.wait(2000)
    })

    it ('Test Quantity buttons', () => {
        Stefi.Sizes(["M" , "L" , "XL"])
        Stefi.SelectItems(["Cropped Stay Groovy off white"])
        Stefi.CloseCart()
        //cy.wait(2000)
        Stefi.SelectItems(["Basic Cactus White T-shirt"])
        Stefi.CloseCart()
        //cy.wait(2000)
        Stefi.Cart()
       })
})