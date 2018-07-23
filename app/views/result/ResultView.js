import View from '../../framework/view';
import ResultItem from '../../components/result-item-component';

export default class extends View {

    constructor(container, models) {
      super(container);
      this.models = models;
      //this.renderView();
    }

    renderView(models) {

      this.view.innerHTML = '';

      models
        .map(model => new ResultItem(model))
        .forEach(component => this.view.appendChild(component.view))
    }

    update(models) {
      this.renderView(models);
    }

  }