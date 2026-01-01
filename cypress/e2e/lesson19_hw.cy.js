describe('My tests', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });
  it('Test1', () => {
    cy.get("[class = 'hero-descriptor_btn btn btn-primary']")
      .should('be.visible')
      .click();
    cy.get("[class='modal-title']").should('contain', 'Registration');
  });
  it('Test2', () => {
    cy.get("[class='contacts_link display-4']")
      .should('be.visible')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('contain', 'hillel');
  });
});
