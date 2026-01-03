import { HomePage } from '../Helpers/PageObjects/homePage.js';
import { GetPage } from '../Helpers/PageObjects/GetPage.js';
import { faker } from '@faker-js/faker';
import ActionsPage from '../Helpers/PageObjects/ActionsPage.js';

describe('Lesson20', () => {
  const homePage = new HomePage();
  const getPage = new GetPage();

  const actionspage = new ActionsPage();

  const email = faker.internet.email();

  beforeEach(() => {
    homePage.navigate();
  });
  it('Test1', () => {
    homePage.listButton('get').click();
    getPage.login(email, 'ikipassword');
    getPage.inputEmail.should('have.value', email);
    getPage.submitButton.should((element) => {
      expect(element.text()).to.contain('Button');
    });
  });
  it('Test2 - actions page', () => {
    homePage.listButton('type').click();
    actionspage.couponCode.type('testcode');
    actionspage.submitButton.click();
    actionspage.message.should('contain.text', 'Your form has been submitted!');
  });
});
