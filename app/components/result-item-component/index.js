import { createElement } from '../../framework/html-builder'
import './style.scss';

export default class {

  constructor(model) {
    this.model = model;
    this.setView();
  }

  setView() {

    const view = createElement('div', {attributes: { class: 'result-item' }}),
          textElement = createElement('p', {
            attributes: {
              class: 'result-text'
            },
            innerHTML: this.model.name
          })

    view.appendChild(textElement);

    this.view = view;

  }

}