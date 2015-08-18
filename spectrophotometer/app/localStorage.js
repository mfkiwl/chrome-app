var LocalStorage = function() {

}

LocalStorage.prototype.get = function(key) {
  return new Promise(function(resolve, reject) {
    chrome.storage.local.get(key, function(items) {
      if (chrome.runtime.lastError) {
        reject("Error: "+chrome.runtime.lastError.message);
      }
      resolve(items);
    });
  })
}

LocalStorage.prototype.set = function(key, value) {
  return new Promise(function(resolve, reject) {
    var toStore={};
    toStore[key]=value;
    chrome.storage.local.set(toStore, function() {
      if (chrome.runtime.lastError) {
        reject("Error: "+chrome.runtime.lastError.message);
      }
      resolve(toStore);
    });
  })
}
