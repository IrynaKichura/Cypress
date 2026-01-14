import { BasePage } from './BasePage.js';
import BaseElement from '../Elements/BaseElement';

const url = '/';

export class ExpensesPage extends BasePage {
  #baseElement = new BaseElement();

  constructor() {
    super(url);
  }
  get expenseLiters() {
    return this.#baseElement.getElement('#addExpenseLiters');
  }
  get expenseMileage() {
    return this.#baseElement.getElement('#addExpenseMileage');
  }
  get expenseCost() {
    return this.#baseElement.getElement('#addExpenseTotalCost');
  }
    get reportDate() {
    return this.#baseElement.getElement('#addExpenseDate');
  }
  get addButton() {
    return this.#baseElement.getElement(
      '.modal-footer.d-flex.justify-content-end .btn.btn-primary'
    );
  }
  get carList() {
    return this.#baseElement.getElement('#carSelectDropdown');
  }
  get editExpense() {
    return this.#baseElement.getElement('button.btn-edit');
  }
}
