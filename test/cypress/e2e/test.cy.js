describe('First Test', () => {
    it('test Tile bar', () => {
      cy.visit('https://www.tilebar.com/visualizer/view/iframe/?visualizer_sku=FXMNDGBS&visualizer_filtertype=Mosaic&visualizer_spec_residential_new=Wall+%7C+Floor')
  
      cy.contains('Classic Kitchen').click()
      cy.get('#visualizer-subroot-ui > div > div > div.mobileMenu_mobileMenu__3YNx7 > button.button_button__3FH_3.button_icon-unstyled__lfIaG.mobileMenu_editScene__13c4m > div')
      cy.get('#visualizer-subroot-ui > div > div > div:nth-child(6) > div > div > div > div > div.foldableContent_foldableAnimatableContent__3C-br.foldableContent_enterDone__FSaOP > div > button:nth-child(1)').click()
      cy.get('#visualizer-subroot-ui > div > div > div:nth-child(6) > div > div > div > div > div.productsPanel_productsPanel__1i-d9 > div.productsPanel_productsAccordion__2Ydig > div.foldableContent_foldableAnimatableContent__3C-br.foldableContent_enterDone__FSaOP > div > div > div.productsPanel_productsTabContent__2HI1B.productsPanel_visible__dLeUY > div > div > div > ul > li:nth-child(2) > div > div:nth-child(2) > div > div > div > div.product_imageContainerOnTop__3kg8t > div.image_aspectRatioBox__1rSdF.product_imageContainer__10QWN.aspect-ratio-box.image_show__3Ccae').click()
      cy.contains('Abernethy Marble Waterjet Polished Mosaic Tile').click()
      cy.contains('Where is Your Tile Going?').click()
      cy.contains('Backsplash').click()
      cy.get('#visualizer-subroot-ui > div > div > div:nth-child(6) > div > div > div > div > div.productsPanel_productsPanel__1i-d9 > div.productsPanel_productsAccordion__2Ydig > div.foldableContent_foldableAnimatableContent__3C-br.foldableContent_enterDone__FSaOP > div > div > div.productsPanel_productsTabContent__2HI1B.productsPanel_visible__dLeUY > div > div > div > ul > li:nth-child(3) > div > div:nth-child(1) > div').click()
      cy.contains('Where is Your Tile Going?').click()
      cy.contains('Floor').click()
      cy.get('#visualizer-subroot-ui > div > div > div:nth-child(6) > div > div > div > div > div.productsPanel_productsPanel__1i-d9 > div.productsPanel_productsAccordion__2Ydig > div.foldableContent_foldableAnimatableContent__3C-br.foldableContent_enterDone__FSaOP > div > div > div.productsPanel_productsTabContent__2HI1B.productsPanel_visible__dLeUY > div > div > div > ul > li:nth-child(3) > div > div:nth-child(1) > div > div > div > div.product_imageContainerOnTop__3kg8t > div.image_aspectRatioBox__1rSdF.product_imageContainer__10QWN.aspect-ratio-box.image_show__3Ccae').click()
    })
})