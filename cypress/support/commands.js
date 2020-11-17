// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("AddToCartStep", ()=>{

        cy.visit('https://snipcart.com/')
        cy.get('.page-intro__button').click()
        cy.get('[data-item-id="demo-almond"]').click()
        cy.get('#format').select('Physical copy')

        //Buy any product and go to My cart
        cy.contains('Add to cart').click()
        cy.get('.header__checkout').click({force:true})

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


        cy.get(':nth-child(1) > .snipcart-item-line__container > ' +
            '.snipcart-item-line__product > .snipcart-item-line__header > ' +
            '.snipcart-item-line__actions > .snipcart__button--icon > ' +
            '.snipcart__icon--red').click({force:true})



})