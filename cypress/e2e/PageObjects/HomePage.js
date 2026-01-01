import { BasePage } from './BasePage.js';

const url = '/';

export class HomePage extends BasePage {

  constructor() {
    super(url);
  }
  // navigate() {
  //   cy.visit(this.#url);
  // }

  get list() {
    return cy.get('.home-list');
  }

  listButton(text) {
    return this.list.contains(text);
  }
}
