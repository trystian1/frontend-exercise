import Repository from './repository';
import MultiSelectView from './views/multi-select/MultiSelectView';
import ResultView from './views/result/ResultView';
import './application.scss';

const Application = class {

  constructor() {
    this.start();
  }

  start() {

    this.getModels()
      .then(models => {
        this.view = new MultiSelectView(
          document.getElementById('container'),
          models,
          this.updater.bind(this)
        );


        this.resultView = new ResultView(
          document.getElementById('result-container'),
          models
        );

        this.view.initialize();
        this.resultView.initialize();


      });

  }

  updater(models) {
    this.resultView.update(models);
  }

  getModels() {

    const repository = new Repository();

    return new Promise(resolve => {

      repository.fetch()

        .then(models => {
          resolve(models);
        });

    });

  }
}


const application = new Application();