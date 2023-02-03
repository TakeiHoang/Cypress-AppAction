require("../../support/commands")
const account = 'standard_user'
const password = 'secret_sauce'

describe('SauceDemo Product Page Test', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.log('Before Each')
        cy.visit('https://www.saucedemo.com/')
    })

    it('Product Page', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.get('#inventory_container').should('be.visible')
    })

    afterEach(() => {

    })
})