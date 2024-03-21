import {GetShadow} from "./shadowElements.cy";
import {shortWait, mediumWait, longWait, navigate} from "./Helpers.cy"


describe('Test the core functionalities of the website including interactions with shadow DOM elements', () => {
    beforeEach(function() {
      navigate()
   })

   it.only('Verify images on Product Pages and Listings', () => {
      GetShadow.LadiesMenu()
      longWait().then(()=> {
         GetShadow.ColorblockJacket()
      })
      GetShadow.elements.LadiesColoblockJacket()
      .should('have.attr', 'src').and('match', /.*\.jpg$/)
      mediumWait().then(()=> {
      GetShadow.LadiesMenu()
      })
      GetShadow.SonomaJacket()
      GetShadow.elements.LadiesSonomaJacket()
      .should('have.attr', 'src').and('match', /.*\.jpg$/)
      mediumWait().then(() => {
         GetShadow.MensMenu()
      })
      GetShadow.GoogleTShirt()
      GetShadow.elements.BasicGoogleTshirt()
      .should('have.attr', 'src').and('match', /.*\.jpg$/)
      mediumWait().then(() => {
         GetShadow.MensMenu()
      })
      GetShadow.MapsTshirt()
      GetShadow.elements.GoogleMapsTshirt()
      .should('have.attr', 'src').and('match', /.*\.jpg$/)
      shortWait()


   })

   it('Verify size and quantity selection in product and cart', () => {
    GetShadow.LadiesMenu()
    shortWait().then(() => {
      GetShadow.SonomaJacket()
    })
    GetShadow.Quantity('2')
    GetShadow.Size('XL')
    mediumWait().then(() => {
      GetShadow.AddtoCart()
    })
    GetShadow.elements.QuantitySelect()
    .should('have.value', '2')
    GetShadow.elements.SizeSelect()
    .should('have.value', 'XL')
    mediumWait().then(() => {
      GetShadow.MensMenu()
    })
    GetShadow.GoogleTShirt()
    GetShadow.Quantity('3')
    GetShadow.Size('S')
    mediumWait().then(() => {
    GetShadow.AddtoCart()
   })
    GetShadow.elements.QuantitySelect()
    .should('have.value', '3')
    GetShadow.elements.SizeSelect()
    .should('have.value', 'S')
    GetShadow.ViewCart()
    mediumWait().then(() => {
      GetShadow.QuantityCart('5')
    })
    GetShadow.elements.QuantitySelectinCart()
    .should('have.value', '5')
    longWait()
   })
   
   it('Verify adding and removing multiple items to cart', () => {
      GetShadow.LadiesMenu()
      shortWait().then(() => {
         GetShadow.ColorblockJacket()
      })
      shortWait().then(() => {
      GetShadow.AddtoCart()
      })
      GetShadow.elements.AddedToCart()
      .should('have.text', 'Added to cart')
      GetShadow.ViewCart()
      mediumWait().then(() => {
      GetShadow.Remove()
      })
      GetShadow.elements.EmptyCart()
      .should('have.text', '(0 items)')
      longWait()
      })
      
      it('Verify checkout flow and functionalities (Shadow DOM)', () => {
         GetShadow.LadiesMenu()
         mediumWait().then(()=>{
            GetShadow.ColorblockJacket()
         })
         GetShadow.Quantity('5')
         GetShadow.elements.QuantitySelect()
         .should('have.value', '5')
         GetShadow.AddtoCart()
         GetShadow.elements.AddedToCart()
         .should('have.text', 'Added to cart')
         mediumWait().then(()=>{
            GetShadow.LadiesMenu()
         })
         GetShadow.SonomaJacket()
         GetShadow.Quantity('3')
         GetShadow.elements.QuantitySelect()
         .should('have.value', '3')
         mediumWait().then(()=>{
            GetShadow.AddtoCart()
         })
         GetShadow.elements.AddedToCart()
         .should('have.text', 'Added to cart')
         shortWait().then(()=>{
            GetShadow.ViewCart()
         })
         GetShadow.elements.EmptyCart()
         .should('have.text', '(2 items)')
         GetShadow.Checkout()
         mediumWait().then(()=>{
            GetShadow.fillBillingForm('CheckoutData')
         })
         GetShadow.PlaceOrder()
         GetShadow.elements.SuccessfulPurchase()
         .should('have.text', 'Thank you')
         mediumWait()
         GetShadow.Finish()
         mediumWait()
      })   
})
