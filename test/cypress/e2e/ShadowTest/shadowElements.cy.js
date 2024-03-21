export class shadowElements {
    elements = {
        LadiesOuterwearMenu: () => cy.get('body > shop-app').shadow().contains('Ladies Outerwear'),
        LadiesSonomaJacket: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-list')
        .shadow().find('ul > li:nth-child(5) > a > shop-list-item')
        .shadow().find('shop-image').shadow().find('#img'),
        LadiesColoblockJacket: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-list')
        .shadow().find('ul > li:nth-child(2) > a > shop-list-item')
        .shadow().find('shop-image').shadow().find('#img'),
        MensTshirtsMenu: () => cy.get('body > shop-app').shadow().find('#tabContainer > shop-tabs > shop-tab:nth-child(3) > a'),
        BasicGoogleTshirt: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-list')
        .shadow().find('ul > li:nth-child(13) > a > shop-list-item')
        .shadow().find('shop-image').shadow().find('#img'),
        GoogleMapsTshirt: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-list')
        .shadow().find('ul > li:nth-child(38) > a > shop-list-item')
        .shadow().find('shop-image').shadow().find('#img'),
        SizeSelect: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-detail')
        .shadow().find('#sizeSelect'),
        QuantitySelect: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-detail')
        .shadow().find('#quantitySelect'),
        ShoppingCart: () => cy.get('body > shop-app').shadow().find('#header > app-toolbar > div.cart-btn-container > a > paper-icon-button'),
        AddToCartBtn: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-detail')
        .shadow().find('#content > div > shop-button > button'),
        ViewCartBtn: () => cy.get('body > shop-app').shadow().find('shop-cart-modal')
        .shadow().find('#viewCartAnchor'),
        QuantitySelectinCart: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-cart')
        .shadow().find('div > div:nth-child(2) > div.list > shop-cart-item:nth-child(2)')
        .shadow().find('#quantitySelect'),
        RemoveFromCartBtn: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-cart')
        .shadow().find('div > div:nth-child(2) > div.list > shop-cart-item:nth-child(1)')
        .shadow().find('div > div.detail > paper-icon-button'),
        CheckoutBtn: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-cart')
        .shadow().find('div > div:nth-child(2) > div.checkout-box > shop-button > a'),
        EmailInput: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#accountEmail'),
        PhoneInput: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#accountPhone'),
        AdressInput: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#shipAddress'),
        CityInput: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#shipCity'),
        StateInput: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#shipState'),
        ZipInput: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#shipZip'),
        CountrySelect: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#shipCountry'),
        CcNameInput: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#ccName'),
        CcNumberInput: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#ccNumber'),
        CcExpMonthSelect: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#ccExpMonth'),
        CcExpYearSelect: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#ccExpYear'),
        CvvInput: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#ccCVV'),
        PlaceOrderBtn: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#submitBox > input[type=button]'),
        AddedToCart: () => cy.get('body > shop-app').shadow().find('shop-cart-modal')
        .shadow().find('div:nth-child(2) > div'),
        EmptyCart: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-cart')
        .shadow().find('div > div:nth-child(2) > header > span'),
        SuccessfulPurchase: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#pages > header.iron-selected h1'),
        FinishBtn: () => cy.get('body > shop-app').shadow().find('iron-pages > shop-checkout')
        .shadow().find('#pages')
    }
    LadiesMenu(){
        this.elements.LadiesOuterwearMenu().scrollIntoView().click()
    }
    SonomaJacket(){
        this.elements.LadiesSonomaJacket().click()
    }
    ColorblockJacket(){
        this.elements.LadiesColoblockJacket().click()
    }
    MensMenu(){
        this.elements.MensTshirtsMenu().scrollIntoView().click()
    }
    MapsTshirt(){
        this.elements.GoogleMapsTshirt().click()
    }
    GoogleTShirt(){
        this.elements.BasicGoogleTshirt().click()
    }
    Quantity(Qselect){
        this.elements.QuantitySelect().select(Qselect)
    }
    Size(Sselect){
        this.elements.SizeSelect().select(Sselect)
    }
    AddtoCart(){
        this.elements.AddToCartBtn().click()
    }
    ViewCart(){
        this.elements.ViewCartBtn().click()
    }
    QuantityCart(QCart){
        this.elements.QuantitySelectinCart().select(QCart)
    }
    Remove(){
        this.elements.RemoveFromCartBtn().click()
    }
    Checkout(){
        this.elements.CheckoutBtn().click()
    }
    fillBillingForm(formDataFixture){
        cy.fixture(formDataFixture).then((data) => {
          this.elements.EmailInput().type(data.Email);
          this.elements.PhoneInput().type(data.Phone);
          this.elements.AdressInput().type(data.Adress);
          this.elements.CityInput().type(data.City);
          this.elements.StateInput().type(data.State);
          this.elements.ZipInput().type(data.Zip);
          this.elements.CountrySelect().select(data.Country);
          this.elements.CcNameInput().type(data.Name);
          this.elements.CcNumberInput().type(data.Number);
          this.elements.CcExpMonthSelect().select(data.Month);
          this.elements.CcExpYearSelect().select(data.Year);
          this.elements.CvvInput().type(data.Cvv);
        });
      }
    PlaceOrder(){
        this.elements.PlaceOrderBtn().click()
    }
    Finish(){
        this.elements.FinishBtn().click()
    }
}
export const GetShadow = new shadowElements();