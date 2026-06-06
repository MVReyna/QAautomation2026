describe('Formulario - Academy', () => {
    beforeEach('Login', () => {
        cy.visit("https://cypress-playground.vercel.app/forms")

    })

    it('Formulario buenas prácticas', () => {
        cy.fixture('formRegistro').then((data) => {
            const r = data.registroValido

            cy.get('#bp-name').type(r.nombre)
            cy.get('#bp-email').type(r.email)
            cy.get('#bp-comments').type(r.comentarios)
            cy.get('#bp-country').select('AR')

            cy.get(`[data-testid="bp-gender-${r.genero}"]`).check().should('be.checked')
            cy.get(`[data-testid="bp-interest-${r.interes}"]`).check().should('be.checked')

            cy.get('#bp-birthdate').type(r.fechaNacimiento)

            //cy.get('[data-testid="bp-experience"]')
            //    .invoke('val', r.experiencia)
            //    .trigger('input', { force: true })
            //    .trigger('change', { force: true });

            //cy.get('[data-testid="bp-experience"]').as('range').invoke('val', r.experiencia).trigger('change').trigger('click')

            cy.get('[data-testid="bp-submit"]').click()

        })
    })

})