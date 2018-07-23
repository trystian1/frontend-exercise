import { createElement } from '../../framework/html-builder';
import './style.scss';

export default class {

  constructor(options = {}) {
    this.placeholder = options.placeholder;
    this.setView();
  }

  setView() {

    const view = createElement('div', {
            attributes: {
              class: 'search-input-wrap'
            }
          }),
          inputElement = createElement('input', {
            attributes: {
              placeholder: this.placeholder,
              id: 'search-input'
            }
          }),
          searchIcon = createElement('span', {
            attributes: {
              class: 'icon-search'
            }
          });

    view.appendChild(inputElement);
    view.appendChild(searchIcon);

    this.view = view

  }

  addChangeHandler(handler) {
    this.view.querySelector("#search-input")
      .addEventListener('input', handler);
  }

  clearInput() {
    console.log('CLEAR INPUT')
    this.view.querySelector("#search-input").value = '';
  }

}