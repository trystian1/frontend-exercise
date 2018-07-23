import { createElement } from '../../framework/html-builder'
import './style.scss';

export default class {

  constructor(options = {}) {
    this.buttonText = options.buttonText;
    this.setView();
  }

  setView() {

    const view = createElement('div'),
          inputElement = createElement('button', {
            attributes: {
              id: 'search-button'
            },
            innerHTML: this.buttonText
          });


    view.appendChild(inputElement);

    this.view = view

  }

  addClickHandler(handler) {
    this.view.querySelector("#search-button")
      .addEventListener('click', handler);
  }

}