describe('testa os campos de formulário da página de criação de aulas', () => {
  beforeEach(() => {
    cy.visit('/give-classes')
  })

  it('valida campo Nome completo', () => {
    cy.get('#name').should('have.attr', 'required')
    cy.get('#name').type('João da Silva').should('have.value', 'João da Silva')
  })

  it('valida campo Link da foto', () => {
    cy.get('#avatar').type('meusite.com').then(($el) => {
      expect($el[0].checkValidity()).to.be.false
    })
    cy.get('#avatar').clear().type('https://meusite.com/foto.jpg')
    cy.get('#avatar').then(($el) => {
      expect($el[0].checkValidity()).to.be.true
    })
  })

  it('valida campo Whatsapp', () => {
    cy.get('#whatsapp').type('abc').then(($el) => {
      expect($el[0].checkValidity()).to.be.false
    })
    cy.get('#whatsapp').clear().type('11999999999')
    cy.get('#whatsapp').then(($el) => {
      expect($el[0].checkValidity()).to.be.true
    })
  })

  it('valida campo Biografia', () => {
    cy.get('#bio').type('Sou professor de matemática.')
    cy.get('#bio').should('have.value', 'Sou professor de matemática.')
  })

  it('valida campo Matéria', () => {
    cy.get('#subject').select('2')
    cy.get('#subject').should('have.value', '2')
  })

  it('valida campo Custo da hora/aula', () => {
    cy.get('#cost').clear().type('100')
    cy.get('#cost').then(($el) => {
      expect($el[0].checkValidity()).to.be.true
    })
  })


  it('valida campo de horário', () => {
    cy.get('select[name="weekday[]"]').select('1')
    cy.get('input[name="time_from[]"]').type('08:00')
    cy.get('input[name="time_to[]"]').type('10:00')

    cy.get('select[name="weekday[]"]').should('have.value', '1')
    cy.get('input[name="time_from[]"]').should('have.value', '08:00')
    cy.get('input[name="time_to[]"]').should('have.value', '10:00')
  })


  it('envia o formulário completo com sucesso', () => {
    cy.get('#name').type('Maria Souza')
    cy.get('#avatar').type('https://example.com/foto.jpg')
    cy.get('#whatsapp').type('11999999999')
    cy.get('#bio').type('Professora de física com 10 anos de experiência.')

    cy.get('#subject').select('1')
    cy.get('#cost').type('150')

    cy.get('select[name="weekday[]"]').select('3')
    cy.get('input[name="time_from[]"]').type('09:00')
    cy.get('input[name="time_to[]"]').type('11:00')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/study?subject=1&weekday=3&time=09:00')
  })
})