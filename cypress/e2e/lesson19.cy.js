describe('My tests', () => {
  it('Test1', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('get').click();
    cy.url().should('contain', '/commands/querying');
    cy.get('#query-btn').should('contain', 'Button');
    cy.get('.well').find('#inputName');
  });
});
