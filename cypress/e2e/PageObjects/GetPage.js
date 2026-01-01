export class GetPage {
  get button() {
    return cy.get('#query-btn');
  }

  get inputEmail() {
    return cy.get('#inputEmail');
  }

  get inputPassword() {
    return cy.get('#inputPassword');
  }
  get inputName() {
    return cy.get('#inputName');
  }
}
