/// sinComandos.cy.js -> Pueden modificar el nombre al que prefieran

describe('SauceDemo - Sin comandos personalizados', () => {

    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
    })

    it.only('Compra completa con un producto', () => {

        // Agregar producto al carrito
        cy.agregarAlCarrito('sauce-labs-bike-light')
        cy.get('.shopping_cart_badge').should('have.text', '1')

        // Ir al carrito
        cy.irAlCarrito()
        cy.get('.cart_item').should('have.length', 1)
            // cy.wait(5000)

        // Completar checkout
        cy.completarCheckout('Juan', 'Perez', '5000')

        // Confirmar pedido
        cy.confirmarPedido()
    })


    it('Compra completa con dos productos', () => {

        // Login 
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')

        // Agregar dos productos
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '2')

        // Ir al carrito
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')
        cy.get('.cart_item').should('have.length', 2)

        // Iniciar checkout
        cy.get('[data-test="checkout"]').click()
        cy.url().should('include', '/checkout-step-one.html')

        // Completar formulario — igual que antes
        cy.get('[data-test="firstName"]').type('Juan')
        cy.get('[data-test="lastName"]').type('Pérez')
        cy.get('[data-test="postalCode"]').type('5000')
        cy.get('[data-test="continue"]').click()
        cy.url().should('include', '/checkout-step-two.html')

        // Confirmar pedido
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')

    })


    it('Logout exitoso después de una compra', () => {

        // Login 
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')

        // Agregar producto y completar compra
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Juan')
        cy.get('[data-test="lastName"]').type('Pérez')
        cy.get('[data-test="postalCode"]').type('5000')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')

        // Logout - crear comando para esta parte
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').should('be.visible').click()
        cy.url().should('eq', 'https://www.saucedemo.com/')

    })

})