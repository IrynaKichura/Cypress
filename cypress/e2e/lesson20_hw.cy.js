import { RegistrationPage } from '../Helpers/PageObjects/RegistrationPage';
import { LoginPage } from '../Helpers/PageObjects/LoginPage.js';
import { faker } from '@faker-js/faker';

describe('Registration form testing', () => {
  const registrationPage = new RegistrationPage();
  const loginPage = new LoginPage();
  const email = faker.internet.email();
  const password = 'Mypassword123';

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });
  it('Test available fields', () => {
    cy.get("[class = 'hero-descriptor_btn btn btn-primary']")
      .should('be.visible')
      .click();
    cy.get("[class='modal-title']").should('contain', 'Registration');
    registrationPage.inputName.should('not.be.disabled');
    registrationPage.inputLastName.should('not.be.disabled');
    registrationPage.inputEmail.should('not.be.disabled');
    registrationPage.inputPassword.should('not.be.disabled');
    registrationPage.inputRepeatPassword.should('not.be.disabled');
    registrationPage.registerButton.should('be.disabled');
  });
  it('Validate fields', () => {
    cy.get("[class = 'hero-descriptor_btn btn btn-primary']")
      .should('be.visible')
      .click();
    registrationPage.inputName.type('1');
    registrationPage.inputLastName.type('1');
    registrationPage.inputEmail.type('1');
    registrationPage.inputPassword.type('1');
    registrationPage.inputRepeatPassword.type('1');
    registrationPage.footer.click();
    cy.contains('.invalid-feedback p', 'Name is invalid').should('be.visible');
    cy.contains(
      '.invalid-feedback p',
      'Name has to be from 2 to 20 characters long'
    ).should('be.visible');
    cy.contains('.invalid-feedback p', 'Last name is invalid').should(
      'be.visible'
    );
    cy.contains(
      '.invalid-feedback p',
      'Last name has to be from 2 to 20 characters long'
    ).should('be.visible');

    cy.contains('.invalid-feedback p', 'Email is incorrect').should(
      'be.visible'
    );
    cy.contains(
      '.invalid-feedback p',
      'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
    ).should('be.visible');
  });
  it('Check that fields are mandatory', () => {
    cy.get("[class = 'hero-descriptor_btn btn btn-primary']")
      .should('be.visible')
      .click();
    registrationPage.inputName.click();
    registrationPage.inputLastName.click();
    registrationPage.inputEmail.click();
    registrationPage.inputPassword.click();
    registrationPage.inputRepeatPassword.click();
    registrationPage.footer.click();
    cy.contains('.invalid-feedback p', 'Name required').should('be.visible');
    cy.contains('.invalid-feedback p', 'Last name required').should(
      'be.visible'
    );
    cy.contains('.invalid-feedback p', 'Email required').should('be.visible');
    cy.contains('.invalid-feedback p', 'Password required').should(
      'be.visible'
    );
    cy.contains('.invalid-feedback p', 'Re-enter password required').should(
      'be.visible'
    );
    cy.get(
      'input[class="form-control ng-pristine ng-invalid is-invalid ng-touched"]'
    ).should('have.css', 'border-color', 'rgb(220, 53, 69)');
    registrationPage.registerButton.should('be.disabled');
  });
  it('Test password mismatch', () => {
    cy.get("[class = 'hero-descriptor_btn btn btn-primary']")
      .should('be.visible')
      .click();
    registrationPage.inputPassword.type('Qwerty123');
    registrationPage.inputRepeatPassword.type('Qwerty124');
    registrationPage.footer.click();
    cy.contains('.invalid-feedback p', 'Passwords do not match').should(
      'be.visible'
    );
  });
  it('Register user', () => {
    cy.get("[class = 'hero-descriptor_btn btn btn-primary']")
      .should('be.visible')
      .click();
    registrationPage.inputName.type('John');
    registrationPage.inputLastName.type('Smith');
    registrationPage.inputEmail.type(email);
    registrationPage.inputPassword.type(password);
    registrationPage.inputRepeatPassword.type(password);
    registrationPage.registerButton.should('not.be.disabled').click();
    cy.get('#userNavDropdown').should('be.visible');
  });

  it('Login user', () => {
    cy.get("[class = 'btn btn-outline-white header_signin']")
      .should('be.visible')
      .click();
    loginPage.login(email, password);
    cy.get('#userNavDropdown').should('be.visible');
  });
});
