require ("./../../support/commands");

describe('SauceDemo Login Test', () => {
    beforeEach(() => {
        cy.log('Before Each')
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login with standard account', () => {
        cy.login('standard_user', 'secret_sauce')
    })

    afterEach(() => {
        cy.log('After Each')
    })
})