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
    // cy.visit('https://qauto.forstudy.space/', {
    //   auth: {
    //     username: 'guest',
    //     password: 'welcome2qauto',
    //   },
    // });
    // cy.get('.contacts_socials')
    //   .get('.socials_link')
    //   .eq(0)
    //   .invoke('removeAttr', 'target')
    //   .click();
    // cy.url().should('contain', 'facebook.com');
    cy.get("[class = 'hero-descriptor_btn btn btn-primary']")
      .should('be.visible')
      .invoke('removeAttr', 'target')
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
