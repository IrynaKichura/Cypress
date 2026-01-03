import BaseElement from '../Elements/BaseElement.js';

export class RegistrationPage {
  #baseElement = new BaseElement();

  get inputName() {
    return this.#baseElement.getElement('#signupName');
  }
  get inputLastName() {
    return this.#baseElement.getElement('#signupLastName');
  }
  get inputEmail() {
    return this.#baseElement.getElement('#signupEmail');
  }
  get inputPassword() {
    return this.#baseElement.getElement('#signupPassword');
  }
  get inputRepeatPassword() {
    return this.#baseElement.getElement('#signupRepeatPassword');
  }
  get footer() {
    return this.#baseElement.getElement('.modal-footer');
  }
  get registerButton() {
    return this.#baseElement.getElement('.modal-footer .btn.btn-primary');
  }
}
