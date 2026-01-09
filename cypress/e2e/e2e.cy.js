import { GaragePage } from '../Helpers/PageObjects/GaragePage.js';
const garagePage = new GaragePage();
describe('My tests', () => {
  before(() => {
    cy.request({
      method: 'POST',
      url: 'api/auth/signin',
      body: {
        email: 'Lesson21_user1@gmail.com',
        password: 'Password12345',
      },
    });
    // .then((response) => {
    //   token = response.headers['set-cookie'][0].split(';')[0];
    // });

    cy.visit('/panel/garage', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });
  it('e2e', () => {
    cy.intercept('POST', '/api/cars', {
      statusCode: 200,
      body: { car: 'iki' },
    }).as('cars');

    garagePage.addButton.should('be.visible').click();
    garagePage.carBrand.select('BMW');
    garagePage.carModel.select('X5');
    garagePage.carMileage.type('1000');
    garagePage.carAddbutton.click();

    cy.wait('@cars').then((intercepted) => {
      //expect(intercepted.response.statusCode).to.eq(201);
      console.log(intercepted);
    });
  });
});
