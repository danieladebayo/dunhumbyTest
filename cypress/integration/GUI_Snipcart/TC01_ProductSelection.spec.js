describe('Scenario 1', function () {
    it('Product Selection', function () {
        cy.visit('https://snipcart.com/')
        cy.get('.page-intro__button').click()
        //Verification of chosen item
        cy.contains('Starry Night').should('have.class', 'product__title')
        //Verification of drop down options
        cy.get('#format').select('Physical copy').should('have.value','physical')
        cy.get('#format').select('Digital copy (.jpg)').should('have.value', 'digital')
        //Verification of Button
        cy.contains('Add to cart').should('have.class', 'product__button snipcart-add-item')




    })
})