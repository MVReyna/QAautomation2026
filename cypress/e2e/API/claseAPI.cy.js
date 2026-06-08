describe('Ver documento en Rcky & Morty', () => {

    it('ver a Rick Sanchez', () => {
        cy.intercept('GET', '**/page-data**').as('docu')
        cy.visit('https://rickandmortyapi.com/')
        cy.wait('@docu').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
        })
    })
})

it('Encontrar Mortys vivos', () => {
    cy.resquet('GET', 'https://rickandmortyapi.com/api/character?name=morty&status=alive')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.info.count).to.eq(34) // hay 34 Mortys vivos

            // Verificamos que todos los resultados cumplan el filtro
            response.body.results.forEach(personaje => {
                expect(personaje.name.toLower()).to.include('morty')
                expect(personaje.status).to.eq('Alive')
            })
        })
})