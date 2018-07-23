import { createElement } from '../../framework/html-builder'
import './style.scss';

export default class {

  constructor(model) {
    this.model = model;
    this.setView();
  }

  setView() {

    const view = createElement('div', {attributes: { class: 'select-item' }}),
          checkBoxElement = createElement('input', {
            attributes: {
              name: this.model.name,
              type: 'checkbox',
              class: 'select-box',
              checked: this.model.isSelected
            }
          }),
          labelElement = createElement('label', {
            innerHTML: this.model.name,
            attributes: {
              htmlFor: this.model.name
            }
          });

    view.appendChild(checkBoxElement);
    view.appendChild(labelElement);

    this.view = view;

  }

  addChangeHandler() {

    this.view.querySelector('.select-box').addEventListener('change', () => {
      this.model.isSelected = !this.model.isSelected;
    });

  }


}