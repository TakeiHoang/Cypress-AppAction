describe('Testing Querying', function () {
    // set up these constants to match what TodoMVC does
    let TODO_ITEM_ONE = 'buy some cheese'
    let TODO_ITEM_TWO = 'feed the cat'
    let TODO_ITEM_THREE = 'book a doctors appointment'

    beforeEach(() => {
        cy.log('Before Each');
        cy.visit('https://example.cypress.io')
        cy.get('div.container:nth-child(4) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)')
                .should('be.visible').click()
    })

    context('Querying Action', function () {
        before(() => {
            cy.log('Before');
        })

        it('cy.get() method', () => {
            //Get button
            cy.get('#query-btn')
                .should('contain', 'Button')
            cy.get('.query-btn')
                .should('contain', 'Button')
            cy.get('#querying .well>button:first')
                .should('contain', 'Button')

            //Get attribute
            cy.get('[data-test-id="test-example"]')
                .invoke('attr', 'data-test-id')
                .should('equal', 'test-example')
            cy.get('[data-test-id="test-example"]')
                .invoke('css', 'position')
                .should('equal', 'static')
            cy.get('[data-test-id="test-example"]')
                .should('have.attr', 'data-test-id', 'test-example')
                .and('have.css', 'position', 'static')
        })

        it('cy.contain() method', () => {
            cy.get('.query-list')
                .contains('bananas').should('have.class', 'third')

            // we can pass a regexp to `.contains()`
            cy.get('.query-list')
                .contains(/^b\w+/).should('have.class', 'third')

            cy.get('.query-list')
                .contains('apples').should('have.class', 'first')

            // passing a selector to contains will
            // yield the selector containing the text
            cy.get('#querying')
                .contains('ul', 'oranges')
                .should('have.class', 'query-list')

            cy.get('.query-button')
                .contains('Save Form')
                .should('have.class', 'btn')
        })

        after(() => {
            cy.log('After');
        })
    })

    afterEach(() => {
        cy.log('After Each');
    })
})