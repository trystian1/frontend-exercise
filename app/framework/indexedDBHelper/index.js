
import idb from 'idb';

export default () => {

  return idb.open('recentSearch', 1, function(upgradeDb) {

    var store = upgradeDb.createObjectStore('search-data', {
      keyPath: 'id',
      autoIncrement: true
    });

    store.createIndex('by-id', 'id');

  });

}