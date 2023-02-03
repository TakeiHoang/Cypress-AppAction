Cypress.Commands.add('getSingleUser', () => {
    return cy.request('https://reqres.in/api/users/2').as('apiResponse')
})