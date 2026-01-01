export class BasePage {
  // constructor(url) {
  //   this.url = url;
  // }
  navigate(url) {
    cy.visit(url);
  }
}
