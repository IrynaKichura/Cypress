import { HomePage } from './PageObjects/homePage.js';
import { GetPage } from './PageObjects/GetPage.js';

describe('Block of first tests', () => {
  const homePage = new HomePage();
  const getPage = new GetPage();

  beforeEach(() => {
    // cy.visit('/');
    homePage.navigate();
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
    //cy.get('.home-list').contains('get').click();
    const homePage = new HomePage();
    homePage.listButton('get').should('be.visible').click();
    getPage.button.should('be.visible');
  });
    it('fourth test', () => {
    homePage.listButton('within').click();
    getPage.inputEmail.type('email@io');
    getPage.inputPassword.type('password');
    getPage.inputName.type('OneName');
  });
});
