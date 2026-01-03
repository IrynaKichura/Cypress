import BaseElement from '../Elements/BaseElement.js';

export class LoginPage {
  #baseElement = new BaseElement();

  get loginEmail() {
    return this.#baseElement.getElement('#signinEmail');
  }

  get loginPassword() {
    return this.#baseElement.getElement('#signinPassword');
  }

  get loginButton() {
    return this.#baseElement.getElement(
      '.modal-footer.d-flex.justify-content-between .btn.btn-primary'
    );
  }
  login(emal, password) {
    this.loginEmail.type(emal);
    this.loginPassword.type(password, { sensitive: true});
    this.loginButton.click();
  }
}
