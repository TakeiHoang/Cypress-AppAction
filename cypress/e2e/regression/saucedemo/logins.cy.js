require("../../../support/regressions")
const password = 'secret_sauce'

describe('SauceDemo Login Page Test', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.log('Before Each')
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login with standard account', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.get('#inventory_container').should('be.visible')
    })

    it('Login with locked account', () => {
        cy.login('locked_out_user', password)
        cy.get('[data-test="error"]')
            .should('be.visible')
            .contains('Epic sadface: Sorry, this user has been locked out.')
    })

    it('Login with problem account', () => {
        cy.login('problem_user', password)
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        // Fill information
        cy.get('[data-test="firstName"]').type('test')
        cy.get('[data-test="lastName"]').type('test')
        cy.get('[data-test="postalCode"]').type('70000')
        cy.get('[data-test="continue"]').click()
        // Validate error
        cy.get('[data-test="error"]')
            .should('be.visible')
            .contains('Error: Last Name is required')
    })

    afterEach(() => {
        cy.log('After Each')
    })
})