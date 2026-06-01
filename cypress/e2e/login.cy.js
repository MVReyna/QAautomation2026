//Automatizamos ID= 1.0-  excell file Casos de prueba Sauce Demo
describe('Login Sauce Demo', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    })

    it('Login Exitoso', () => {
        // cy.log("test 1")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')
        cy.get('.app_logo').should('have.text', 'Swag Labs')
    })

    // Automatizamos ID= 2.0-  excell file Casos de prueba Sauce Demo
    it('Login con Contraseña incorrecta', () => {
        // cy.log("test 2")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_saucea')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Epic sadface: Username and password do not match any user in this service')

    })

    // Automatizamos ID= 3.0-  excell file Casos de prueba Sauce Demo
    it('Login con campos vacios', () => {
        // cy.log("test 2")

        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Epic sadface: Username is required')
    })

    // Automatizamos ID= 4.0-  excell file Casos de prueba Sauce Demo
    it('Login con usuario bloqueado', () => {

        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Epic sadface: Sorry, this user has been locked out.')
    })

    // Automatizamos ID= 5.0-  excell file Casos de prueba Sauce Demo
    it('Logout desde el menú hamburguesa', () => {

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //cy.get('.bm-menu').click({ force: true })
        cy.get('[data-test="logout-sidebar-link"]').click({ force: true })



    })

})