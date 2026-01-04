import { BasePage } from './BasePage.js';
import BaseElement from '../Elements/BaseElement';

const url = '/';

export class GaragePage extends BasePage {
  #baseElement = new BaseElement();

  constructor() {
    super(url);
  }

  getButton(text) {
    return this.#baseElement.getByText(text);
  }
  get addButton() {
    return this.#baseElement.getElement(
      '.panel-page_heading.d-flex.justify-content-between .btn.btn-primary'
    );
  }
  get carBrand() {
    return this.#baseElement.getElement('#addCarBrand');
  }
  get carModel() {
    return this.#baseElement.getElement('#addCarModel');
  }
  get carMileage() {
    return this.#baseElement.getElement('#addCarMileage');
  }
  get carAddbutton() {
    return this.#baseElement.getElement(
      '.modal-footer.d-flex.justify-content-end .btn.btn-primary'
    );
  }
  get addFuelbutton() {
    return this.#baseElement.getElement('.car_add-expense btn btn');
  }
}
