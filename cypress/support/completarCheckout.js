Cypress.Commands.add('completarCheckout', (firstName, lastName, postalCode) => {
    // Iniciar checkout
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')

    // Completar formulario — igual que antes
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')

    // Confirmar pedido
    // cy.get('[data-test="finish"]').click()
    // cy.get('.complete-header').should('have.text', 'Thank you for your order!')
})