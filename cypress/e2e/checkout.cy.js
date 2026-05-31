describe('Carrito - Sauce Demo', () => {
    beforeEach('Login', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
    })

    // Automatizamos ID= 13.0-  excell file Casos de prueba Sauce Demo
    it('Completar checkout con datos válidos', () => {

        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test = "firstName"]').type('Juan')
        cy.get('[data-test="lastName"]').type('Pérez')
        cy.get('[data-test="postalCode"]').type('5000')

        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]')
            .should('contain', 'Thank you for your order!')
    })

    // Automatizamos ID= 14.0-  excell file Casos de prueba Sauce Demo
    it('Checkout sin completar campos obligatorios', () => {

        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Error: First Name is required')

    })
})