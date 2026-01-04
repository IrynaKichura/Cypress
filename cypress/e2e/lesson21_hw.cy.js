import { GaragePage } from '../Helpers/PageObjects/GaragePage.js';
import { LoginPage } from '../Helpers/PageObjects/LoginPage.js';
import { ExpensesPage } from '../Helpers/PageObjects/ExpensesPage.js';

describe('Test for adding car and fuel expenses', () => {
  const loginPage = new LoginPage();
  const garagePage = new GaragePage();
  const expensePage = new ExpensesPage();

  beforeEach(() => {
    cy.visit('/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });
  it('Test for adding car and fuel expenses', () => {
    cy.get("[class = 'btn btn-outline-white header_signin']")
      .should('be.visible')
      .click();
    loginPage.login(Cypress.env('email'), Cypress.env('password'));
    cy.get('#userNavDropdown').should('be.visible');
    garagePage.getButton('Garage').should('be.visible');
    garagePage.addButton.should('be.visible').click();
    cy.get("[class = 'modal-title']").should('have.text', 'Add a car');
    garagePage.carBrand.select('BMW');
    garagePage.carModel.select('X5');
    garagePage.carMileage.type('1000');
    garagePage.carAddbutton.click();
    //check car is added
    cy.get("[class = 'car_name h2']").should('be.visible');
    garagePage.getButton('Add fuel expense').click();
    cy.get("[class = 'modal-title']").should('have.text', 'Add an expense');
    expensePage.expenseMileage.clear().type('1200');
    expensePage.expenseLiters.type('500');
    expensePage.expenseCost.type('2500');
    expensePage.addButton.click();
    garagePage.getButton('Fuel expenses').should('be.visible');
  });
});
