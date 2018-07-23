import SearchInputComponent from '../../components/search-input-component';
import SelectItemComponent from '../../components/select-item-component';
import ButtonComponent from '../../components/button-component';
import View from '../../framework/view';
import { createElement } from '../../framework/html-builder';

import './multi-select.scss';

import indexedDB from '../../framework/indexedDBHelper'

export default class extends View {

  constructor(container, models, updater) {
    super(container);
    this.models = models;
    this.dispatchUpdate = updater;
  }

  initialize() {
    this.renderView();
  }

  renderView() {

    this.searchItemsContainer = createElement('div',
      {
        attributes: {
          class: 'items-container'
        }
      }
    );

    this.showSearchItem();
    this.view.appendChild(this.searchItemsContainer);
    this.showList(this.models);
    this.showButton();

  }

  showSearchItem() {

    const searchInput = new SearchInputComponent({
      placeholder: 'Zoek op....',
      changeEvent: this.searchItem
    });

    this.view.appendChild(searchInput.view);
    this.searchInput = searchInput;
    this.searchInput.addChangeHandler(this.searchItem.bind(this));

  }

  showList(models) {

    this.searchItemsContainer.innerHTML = null;

    const filteredModels = models.filter(model => model.getSelectedStatus());

    const selectedComponents = filteredModels
                          .map(model => new SelectItemComponent(model)),
          unselectedComponents = models
                          .filter(model => !model.getSelectedStatus())
                          .map(model => new SelectItemComponent(model));

    selectedComponents.forEach(component => {
      this.searchItemsContainer.appendChild(component.view);
      component.addChangeHandler()
    });

    unselectedComponents.forEach(component => {
      this.searchItemsContainer.appendChild(component.view);
      component.addChangeHandler()
    });

    this.showMessageRegion(models.length === 0);
    this.dispatchUpdate(filteredModels);

  }

  showButton() {
    const button = new ButtonComponent({
      buttonText: 'Toepassen'
    });
    this.view.appendChild(button.view);
    button.addClickHandler(this.onClickFilterButton.bind(this));
  }

  searchItem(evt) {

    const filteredModels = this.models.filter(model => {
      return model.name.toLowerCase().includes(evt.target.value.toLowerCase())
    });


    this.showList(filteredModels);

  }

  clearInput() {
    this.searchInput.clearInput();
  }

  onClickFilterButton() {
    this.clearInput();
    this.showList(this.models);
    this.saveLocally(this.models);
  }

  saveLocally(models) {

    indexedDB().then(db => {
      if (!db) return;

      var tx = db.transaction('search-data', 'readwrite'),
          store = tx.objectStore('search-data');


      store.clear();

      models.forEach(model => {
        store.put({
          isSelected: model.isSelected,
          name: model.name
        });
      });

    });

  }

  showMessageRegion(isShown) {
    this.messageView = createElement('span', {
      attributes: {
        class: 'empty-message'
      },
      innerHTML: isShown ? 'Geen resultaten pas uw zoekopdrach aan' : ''
    });
    this.searchItemsContainer.appendChild(this.messageView);
  }


}
