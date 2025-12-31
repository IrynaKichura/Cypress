import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
  #url = '/';
  constructor() {
    super(this.#url);
  }
  get list() {
    return cy.get('.home-list');
  }
  listButton(text) {
    return this.list.contains(text);
  }
}
