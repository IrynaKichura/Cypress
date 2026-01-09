describe('My tests', () => {
  let token;

  // cy.visit('/', {
  //   auth: {
  //     username: 'guest',
  //     password: 'welcome2qauto',
  //   },
  // });
  // cy.request('api/cars/brands').then((response) => {
  //     console.log(response.body);
  // });;
  before(() => {
    cy.request({
      method: 'POST',
      url: 'api/auth/signin',
      body: {
        email: 'Lesson21_user1@gmail.com',
        password: 'Password12345',
      },
    }).then((response) => {
      token = response.headers['set-cookie'][0].split(';')[0];
    });
  });
  it('GET', () => {
    cy.request({
      method: 'POST',
      url: 'api/cars',
      headers: {
        Cookie: token,
      },

      body: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 122,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      console.log(response.body.data.id);
    });
    let carsArray;
    cy.request({
      method: 'GET',
      url: 'api/cars',
      headers: {
        Cookie: token,
      },
    }).then((response) => {
      //expect(response.status).to.eq(201);
      console.log(response.body.data);
      carsArray = response.body.data;

      carsArray.forEach((car) => {
        cy.request({
          method: 'DELETE',
          url: `api/cars/${car.id}`,
          headers: {
            Cookie: token,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          //console.log(response.body.data.id);
        });
      });
    });
  });
});
