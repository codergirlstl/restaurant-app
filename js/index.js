
/**
var dbPromise=idb.open('app-db', 1, function(UpgradeDB){
  var keyValStore = upgradeDB.createObjectStore('keyval')
  keyValStore.put('hello', 'world')
})

dbPromise.then(function(db){
  var.tx = db.transaction('keyval');
  var keyValStore =tx.ObjectStore('keyval');
  return keyValStore.get('hello');
}).then(function(val){
  console.log("The value of hello is ", val);
});

dbPromise.then(function(db){
  var.tx = db.transaction('keyval', 'rewrite');
  var keyValStore =tx.ObjectStore('keyval');
  keyValStore.put('bar', 'foo');
  return tx.complete;
  console.log("Added foobar to keyval");
});

**/
