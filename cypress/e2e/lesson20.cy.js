import { HomePage } from '../Helpers/PageObjects/homePage.js';
import { GetPage } from '../Helpers/PageObjects/GetPage.js';

describe('Lesson20', () => {
  const homePage = new HomePage();
  const getPage = new GetPage();
  beforeEach(() => {
    homePage.navigate();
  });
  it('Test1', () => {
    homePage.listButton('get').click();
   getPage.login('ikimail', 'ikipassword');
  });
});
