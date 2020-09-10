context('Google main page', () => {
    describe('Internal links', () => {
        it('"Gmail" link opens page with information about Gmail (about) when user isnt signed in', () => {
            cy.visit('')
            cy.get('a')
                .invoke('removeAttr', 'target')

            cy.contains('Gmail')
                .click()

            cy.url().should('contain', 'gmail/about/#');
        })

        it('"Images" link opens image search', () => {
            cy.visit('')
            cy.get('a')
                .invoke('removeAttr', 'target')

            cy.contains('Images')
                .click()

            cy.url().should('contain', 'imghp');
        })

        it('Google apps icon opens menu with avaiable Google apps', () => {
            cy.visit('')
            
            cy.get('a[title="Google apps"]')
                .click()

            cy.get('div.gb_5c.gb_Pg.gb_i ~ div')
                .should('not.have.css', 'visibility', 'hidden');
        })

        it('"Sign in" button leads to Google sign in page', () => {
            // can't test click because it's anti-pattern that's not supported by Google
            cy.visit('')

            cy.get('a#gb_70')
                .should('have.attr', 'href')
                .and('contain', 'accounts.google.com/ServiceLogin')
        })
    })
})
