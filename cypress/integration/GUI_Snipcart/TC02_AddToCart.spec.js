describe('Scenario 2', function () {
    Cypress.config('pageLoadTimeout', 10000)

    it('Selcted Item added to Cart', function () {
        cy.visit('https://snipcart.com/')
        cy.get('.page-intro__button').click()
        cy.get('[data-item-id="demo-almond"]').click()
        cy.get('#format').select('Physical copy')

        //Buy any product and go to My cart
        cy.contains('Add to cart').click()
        cy.get('.header__checkout').click()

        //Verify the colour, and unit price are correctly displayed
        cy.contains('Branches with Almond Blossom').should('have.class', 'product__title')
        cy.get('.snipcart-item-line__container').should('contain.text', 'Branches with Almond Blossom')
        cy.get('.snipcart-item-line__container').should('contain', '$99.95')

        //Increase the quantity and assert the Total price
        cy.get(':nth-child(3) > .snipcart__icon').click();
        cy.get('.snipcart-cart-summary-fees--reverse').should('contain', '$199.90')

        //Clicked Continue to shopping to add another item
        cy.get('.snipcart-modal__close-title').click()
        cy.get('[data-item-id="demo-rosy"]').click()

        //Verify the colour, and unit price are correctly displayed
        cy.get(':nth-child(1) > .snipcart-item-line__container > .snipcart-item-line__product').
        should('contain.text', 'Rosy-Fingered Dawn at Louse Point')
        cy.get(':nth-child(1) > .snipcart-item-line__container > .snipcart-item-line__product').
        should('contain','$49.95')

        //Assert The Total Price
        cy.get('.snipcart-cart-summary-fees--reverse > .snipcart-cart-summary-fees').
        should('contain', '$249.85')

        //Verify the remove product (x) colour (red or not)

        /* Both Lines of Code Show there's a defect in the source code as line 43 cannot find color
           Line 44 shows value to be empty i.e. ''
           Please uncomment one after the other in order to run and see outcomes */

           //cy.get('.snipcart__icon--red').should('have.color', 'red')
           //cy.get('.snipcart__icon--red').should('contain.text', 'red')


        /* The Assertion Failed because there is a bug in the source code i.e showing value of nothing ''
           instead of '$199.90' */

        cy.get('.snipcart-cart-summary-fees__amount').
        should('have.value', '$199.90')

        cy.get(':nth-child(1) > .snipcart-item-line__container > ' +
            '.snipcart-item-line__product > .snipcart-item-line__header > ' +
            '.snipcart-item-line__actions > .snipcart__button--icon > ' +
            '.snipcart__icon--red').click({force:true})
















    })
})