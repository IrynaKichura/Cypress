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


//custom cypress command overwrite password- added by iki
// Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
//   if (options && options.sensitive) {
//     // turn off original log
//     options.log = false;
//     // create our own log with masked message
//     Cypress.log({
//       $el: element,
//       name: 'type',
//       message: '*'.repeat(text.length),
//     });
//   }

//   return originalFn(element, text, options);
// });
