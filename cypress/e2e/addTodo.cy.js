describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('#add-todo').type('new todo 1').type('{enter}').as('addnewTodo')
  });

  it('add new todo in input', () => {
    cy.get("#todo-task>ul").as('checkbox_input')
    cy.get('#todo-task>ul>li>input').check()
    cy.get('#todo-task>ul>li').children().should('have.length', 0)
    cy.get('#done-task>ul>li').children().should('have.value', 'new todo 1')

  })
  it('check if the task is todo', () => {
      cy.get("#todo-task>ul>li>label").contains('new todo 1')
  });
})