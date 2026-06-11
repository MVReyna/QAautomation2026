describe('Validar login', () => {

    it('Crear USUARIO exitoso', () => {

        cy.intercept('POST', '/api/users').as('userCreado')

        cy.visit('https://conduit.bondaracademy.com')
        cy.contains(/sign up/i).click()
        cy.get('[placeholder="Username"]').type(`NombreOK${Date.now()}`)
        cy.get('[placeholder="Email"]').type(`mail${Date.now()}@gmail.com`)
        cy.get('[placeholder="Password"]').type('Pass1238')
        cy.get('.btn').click()

        cy.wait('@userCreado').then((interception) => {
            expect(interception.response.statusCode).to.equal(201)
            expect(interception.response.body.user)
                .to.have.property('email', 'mail@gmail.com')
            cy.log('Vamo mi rey!')

        })
    })

    it('Login con datos INCORRECTOS', () => {
        cy.intercept('POST', '/api/users/login').as('loginError')

        cy.visit('https://conduit.bondaracademy.com/login')

        cy.get('[Placeholder="Email"]').type('cualquieraMAL')
        cy.get('[Placeholder="Password"]').type('password123')
        cy.get('.btn').click()

        cy.wait('@loginError').then((interception) => {
            expect(interception.response.statusCode).to.equal(403)

            cy.log('Sape por ahí no!')

        })
    })

    it('Mockear tags con nuestro fixture', () => {

        //La diferencia: tercer argumento con {ficture:"tags.json"}

        cy.intercept('GET', '**/api/tags', { fixture: 'mockeando.json' }).as('tagsMock')

        cy.visit('https://conduit.bondaracademy.com')

        cy.wait('@tagsMock')

        //Verificamos que la UI muestra NUESTROS tags inventados
        cy.contains('Cypress').should('be.visible')
        cy.contains('QA').should('be.visible')
        cy.contains('10').should('be.visible')

    })
})