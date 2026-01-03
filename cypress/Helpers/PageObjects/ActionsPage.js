import { BasePage } from './BasePage.js';
import BaseElement from '../Elements/BaseElement.js';

const url = '/commands/actions';
export default class extends BasePage {
  #baseElement = new BaseElement();
  constructor() {
    super(url);
  }
  // #couponCode1 is id of the element (selector)
  get couponCode() {
    return this.#baseElement.getElement('#couponCode1');
  }
  // [type="submit" is selector of button
  get submitButton() {
    return this.#baseElement.getElement('[type="submit"]');
  }
  // '.action-form' is selector of class
  // 'p' is not unique so we need to find it within the parent` but '.action-form'  is not its parent so we neew to find parent of '.action-form'
  get actionsForm() {
    return this.#baseElement.getElement('.action-form').parent();
  }
  get message() {
    return this.actionsForm.within(() => {
       this.#baseElement.getElement('p');
    });
  }
}
