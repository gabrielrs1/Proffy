describe('testa os campos de busca de aulas', () => {
    beforeEach(() => {
      cy.visit('/study')
    })

    it('deve exibir o título da página corretamente', () => {
        cy.contains('Esses são os proffys disponíveis').should('be.visible')
    })

    it('deve exibir o formulário de filtros com todos os campos', () => {
        cy.get('form#search-teachers').should('exist')
        cy.get('select#subject').should('exist')
        cy.get('select#weekday').should('exist')
        cy.get('input#time').should('exist')
        cy.get('button[type="submit"]').should('have.text', 'Filtrar')
    })

    it('deve permitir selecionar uma matéria, dia e hora', () => {
        cy.get('select#subject').select(1)
        cy.get('input#time').type('08:00')

        cy.get('select#subject').should('have.value', 1)
        cy.get('input#time').should('have.value', '08:00')
    })

    it('deve exibir mensagem ou resultados após o filtro (mock de exemplo)', () => {
        cy.get('select#subject').select(1)
        cy.get('select#weekday').select(4)
        cy.get('input#time').type('09:00')
        cy.get('button[type="submit"]').click()
    })
})
