import { ExpensesPage } from '../Helpers/PageObjects/ExpensesPage.js';
import { GaragePage } from '../Helpers/PageObjects/GaragePage.js';
const garagePage = new GaragePage();
const expensePage = new ExpensesPage();
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

    cy.visit('/panel/garage', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });

  it('myTest', () => {
    let myCarId;
    cy.intercept({
      method: 'POST',
      url: '/api/cars',
    }).as('createCar');

    garagePage.addButton.should('be.visible').click();
    garagePage.carBrand.select('BMW');
    garagePage.carModel.select('X5');
    garagePage.carMileage.type('1000');
    garagePage.carAddbutton.click();

    cy.wait('@createCar').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      myCarId = interception.response.body.data.id;
      console.log('Created car ID:', myCarId);
    });

    let carsArray;
    cy.request({
      method: 'GET',
      url: 'api/cars',
    }).then((response) => {
      expect(response.status).to.eq(200);
      console.log(response.body.data);
      carsArray = response.body.data;

      const myCar = carsArray.find((myCar) => myCar.id === myCarId);

      expect(myCar).to.exist;
      expect(myCar.carBrandId).to.eq(2);
      expect(myCar.carModelId).to.eq(8);

      //////////
      // cy.request({
      //   method: 'POST',
      //   url: 'api/expenses',
      //   body: {
      //     carId: myCarId,
      //     reportedAt: '2026-01-10',
      //     mileage: 1100,
      //     liters: 11,
      //     totalCost: 11,
      //     forceMileage: false,
      //   },
      // }).then((response) => {
      //   expect(response.status).to.eq(200);
      //   console.log(response.body.data);
      //   expect(response.body.data.carId).to.eq(myCarId);
      //   expect(response.body.data.liters).to.eq(11);

      // });
      const today = new Date().toISOString().split('T')[0];
      const [year, month, day] = today.split('-');
      const formattedToday = `${day}.${month}.${year}`;
      cy.createExpense(myCarId, {
        reportedAt: today,
        mileage: 1100,
        liters: 11,
        totalCost: 11,
      });
      cy.visit('/panel/expenses', {
        auth: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      });
      expensePage.carList.should('have.text', 'BMW X5');
      expensePage.editExpense.first().click({ force: true });
      expensePage.expenseLiters.should('have.value', '11');
      expensePage.expenseMileage.should('have.value', '1100');
      expensePage.expenseCost.should('have.value', '11');
      expensePage.reportDate.should('have.value', formattedToday);
    });
  });
});
