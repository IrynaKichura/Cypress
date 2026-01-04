import BaseElement from '../Elements/BaseElement.js';
import { BasePage } from './BasePage.js';

const url = '/';
export class GetPage extends BasePage {
  #baseElement = new BaseElement();

  constructor() {
    super(url);
  }

  get submitButton() {
    return this.#baseElement.getElement('#query-btn');
  }

  get inputEmail() {
    return this.#baseElement.getElement('#inputEmail');
  }

  get inputPassword() {
    return this.#baseElement.getElement('#inputPassword');
  }
  get inputName() {
    return this.#baseElement.getElement('#inputName');
  }

  //custom cypress command overwrite password- added by iki
  //   login(emal, password) {
  //     this.inputEmail.type(emal);
  //     this.inputPassword.type(password, { sensitive: true });
  //     this.submitButton.click();
  //   }
  login(emal, password) {
    this.inputEmail.type(emal);
    this.inputPassword.type(password, { log: false });
    this.submitButton.click();
  }
}
