require("../../../support/integrations")

describe('Validate User Info', () => {
    it('test', () => {
        cy.getSingleUser()
        cy.get('@apiResponse').then(response => {
            expect(response.status).to.equal(200)

            // Get body response
            var respBody = response.body;
            expect(respBody['data']['first_name']).to.have.string('Janet')
        })
    })
})