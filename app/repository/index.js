import FilterItemModel from '../models/filter-item';
import indexedDB from '../framework/indexedDBHelper'

export default class {

  fetch() {

    return new Promise((resolve, reject) => {

      this.fetchFromIndexedDb()

        .then(data => {

          if (!data.length) {

            this.fetchFromApi()
              .then(apiData => {
                resolve(this.buildItemsFromResponse(apiData));
              });

          } else {

            resolve(this.buildItemsFromIdb(data))

          }

        });

    });
  }

  buildItemsFromResponse(items) {
    return items.map(item => {
      return new FilterItemModel(false, item);
    });
  }

  buildItemsFromIdb(items) {
    return items.map(item => {
      return new FilterItemModel(item.isSelected, item.name);
    })
  }

  fetchFromApi() {
    return new Promise((resolve, reject) => {

      fetch('assets/items.json')

      .then(items => {
        items.json()
          .then(jsonItems => {
            resolve(jsonItems.data);
          })
      })

      .catch((err) => console.error(err))

    });

  }

  fetchFromIndexedDb() {

    return new Promise((resolve, reject) => {

      indexedDB()
        .then(db => {

            var index = db.transaction('search-data')
              .objectStore('search-data').index('by-id');

            index.getAll().then(items => {
              resolve(items)
            });
        })

      })
  }

}