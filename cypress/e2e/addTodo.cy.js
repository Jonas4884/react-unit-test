describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('#add-todo').type('new todo 1').type('{enter}').as('addnewTodo')
  });

  it('add new todo in input', () => {
    cy.get("#todo-task>ul>li>input")
  })
  it('check if the task is todo', () => {
      cy.get("#todo-task>ul>li>label").contains('new todo 1')
  });
})