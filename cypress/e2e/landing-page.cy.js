describe('testa o acesso a primeira tela do sistema', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('deve exibir o logo e o texto principal', () => {
        cy.get('.logo-container img[alt="Proffy"]').should('be.visible')
        cy.contains('Sua plataforma de estudos online').should('be.visible')
    })

    it('deve exibir a imagem principal da plataforma', () => {
        cy.get('img.hero-image[alt="Plataforma de estudos"]').should('be.visible')
    })

    it('deve exibir os botões de ação Estudar e Dar aulas', () => {
        cy.get('.buttons-container a.study')
        .should('be.visible')
        .and('contain', 'Estudar')

        cy.get('.buttons-container a.give-classes')
        .should('be.visible')
        .and('contain', 'Dar aulas')
    })
})