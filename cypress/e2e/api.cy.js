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
      body: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 122,
      },
    });
    // .then((response) => {
    //   token = response.headers['set-cookie'][0].split(';')[0];
    // });
  });
});
