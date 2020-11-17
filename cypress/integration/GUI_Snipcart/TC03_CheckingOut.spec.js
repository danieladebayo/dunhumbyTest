
var faker = require('faker');


describe('Scenario 3', function () {
    var randomName = faker.name.findName();
    var randomEmail = faker.internet.email();
    var randomAddress = faker.address.streetAddress();
    var randomCounty = faker.address.county();
    var randomCountry = faker.address.country();
    var randomCity = faker.address.city();
    var randomState = faker.address.state();
    var randomZipcode = faker.address.zipCode();




    it('Checkout and Payment', function () {

        cy.AddToCartStep();

        //Verify login, guest checkout, New Account Containers and Reletive url contains signin NOT login
        cy.contains(' Sign In ').should('be.visible')
        cy.contains(' Checkout ').should('be.visible')
        cy.get('.snipcart-cart-header__sign-in').click()
        cy.contains(' Register ').should('be.visible')
        cy.contains(' Sign In ').should('be.visible')
        cy.url().should('include', 'signin')
        cy.get('.snipcart__font > .snipcart__font--black').click()
        cy.contains(' Register ').should('be.visible')
        cy.contains(' Already have an account? ').should('be.visible')
        cy.go(-2)

        /* Both Lines of Code Show there's a defect in the source code as line 22 cannot find color
           Line 23 shows value to be empty i.e. ''
           Please uncomment one after the other in order to run and see outcomes */

        //cy.contains(' Checkout ').should('have.color', '')
        //cy.contains(' Checkout ').should('contain.value', 'color')

    })

      it('Continue to payment, billing and shipping details', function () {
          cy.hash().should('include','#/cart')
          cy.get('.snipcart-cart-button').click()

      })

      it('Generate Random data', function () {
          cy.get('input[id=name]').type(randomName, ({force: true}))
          cy.get('input[name=email]').type(randomEmail, ({force: true}))
          cy.wait(1000)
          //cy.get('input[id=address1]').clear()
          cy.get('input[id=address]').type(randomAddress, ({force: true}))
          cy.get('input[id=address2]').type(randomCounty, ({force: true}))
          cy.get('.snipcart-form__cell--large > .snipcart-form__label').click()
          cy.get('#address1').type(randomAddress, ({force: true}))

          cy.get('#city').type(randomCity, ({force: true}))
          cy.get('#country').select(randomCountry, ({force: true}))
          cy.get('#province').type(randomState, ({force: true}))
          cy.get('#postalCode').type(randomZipcode, ({force: true}))
          cy.get('.snipcart-cart-button').click()
          //cy.get('.snipcart-flash-message--error').contains('No shipping methods are available for your order').
          //should('be.visible')
          //cy.get('div#snipcart-checkout-step-billing .snipcart__actions--link').click()


          //cy.get('.snipcart-form__label').should('contain.text', 'International shipping')

          cy.get(':nth-child(2) > :nth-child(2) > .snipcart-billing-completed__information')
          //cy.get('.snipcart-shipping-rates-list-item').should('contain.text', 'freshipping')
          cy.get('.snipcart-shipping-rates-list-item').should('contain', '$0.00')
          cy.get('.snipcart-cart-button').click()
          //cy.get('.snipcart-flash-message--error').should('contain.text','Unable to process payment')
          cy.wait(10000)
          cy.get('.snipcart-cart-button').click()
          //cy.get('.snipcart-flash-message').contains('An error occured, try again later or contact us.').
            // should('be.visible')
          cy.get(':nth-child(1) > .snipcart-payment-methods-list-item__button').click()
          cy.wait(10000)
          cy.get('.snipcart-cart-button').click()







      })


   })


