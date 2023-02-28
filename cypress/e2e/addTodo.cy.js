describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('#add-todo').type('new todo 1').type('{enter}').as('addnewTodo')
  });

  it('add new todo in input', () => {
    cy.get('.list>li').children().should("have.length",2)
  })

  it('check to done', () => {
    cy.get('[type="checkbox"]').check()
    cy.get('.list>li').children().should("have.length",1)
    cy.get('.list>li').contains('new todo 1')
    
  })
 
})