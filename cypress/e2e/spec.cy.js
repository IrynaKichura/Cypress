//const { beforeEach } = require('mocha');

describe('Block of first tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('first test', () => {
    //cy.visit('/commands/querying');
    //cy.get('#query-btn').should('be.visible');
    cy.contains('get').click();
  });
  it('second test', () => {
    cy.contains('contains').click();
  });
  it('third test', () => {
    cy.get('.home-list').contains('get').click();
  });
});
