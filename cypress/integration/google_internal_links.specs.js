context('Google main page', () => {
    describe('Internal links', () => {
        it('"Gmail" link opens page with information about Gmail (about)', () => {
            cy.visit('')
            cy.get('a')
                .invoke('removeAttr', 'target')

            cy.contains('Gmail')
                .click()

            cy.url().should('contain', 'gmail/about/#');
        })
    })
})
