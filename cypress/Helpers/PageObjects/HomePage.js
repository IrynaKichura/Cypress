import { BasePage } from './BasePage.js';
import BaseElement from   '../Elements/BaseElement';

const url = '/';

export class HomePage extends BasePage {
#baseElement = new BaseElement();
  constructor() {
    super(url);
  }
  // navigate() {
  //   cy.visit(this.#url);
  // }

  // get list() {
  //   return cy.get('.home-list');
  // }

  listButton(text) {
    return this.#baseElement.getByText(text);
  }
}
