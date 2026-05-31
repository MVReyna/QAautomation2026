describe('Carrito - Sauce Demo', () => {
    beforeEach('Login', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
    })

    // Automatizamos ID= 10.0-  excell file Casos de prueba Sauce Demo
    it('Agregar un producto al carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    })

    // Automatizamos ID= 11.0-  excell file Casos de prueba Sauce Demo
    //it('Agregar múltiples productos y verificar contador', () => {
    //   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    //   cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    //   cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    //})


    it('Agregar múltiples productos y verificar contador', () => {
        const productos = [
            'sauce-labs-backpack',
            'sauce-labs-bike-light',
            'sauce-labs-bolt-t-shirt'
        ]

        productos.forEach(producto => {
            cy.get(`[data-test="add-to-cart-${producto}"]`).click()
        })

        cy.get('[data-test="shopping-cart-badge"]')
            .should('have.text', productos.length)
    })

    // Automatizamos ID= 12.0-  excell file Casos de prueba Sauce Demo
    it('Eliminar un producto desde la página del carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    })
})