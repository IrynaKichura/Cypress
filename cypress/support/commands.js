// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

////////////////////////////////////////////////////////////
import { GetPage } from '../Helpers/PageObjects/GetPage';

const getPage = new GetPage();
Cypress.Commands.add(
  'login',
  {
    prevSubject: true,
  },
  (subject, email, password) => {
    getPage.inputEmail.type(email);
    getPage.inputPassword.type(password);
    getPage.submitButton.click();
    return undefined;
  }
);

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false;
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    });
  }

  return originalFn(element, text, options);
});

Cypress.Commands.add('createExpense', (carId, expenseData) => {
  cy.request({
    method: 'POST',
    url: 'api/expenses',
    body: {
      carId,
      reportedAt: expenseData.reportedAt,
      mileage: expenseData.mileage,
      liters: expenseData.liters,
      totalCost: expenseData.totalCost,
      forceMileage: false,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.data.carId).to.eq(carId);
    expect(response.body.data.liters).to.eq(expenseData.liters);
    expect(response.body.data.mileage).to.eq(expenseData.mileage);
  });
});
