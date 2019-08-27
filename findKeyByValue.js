const assertEqual = require("./assertEqual");

const findKeyByValue = function(object, searchedValue) {
  for (let keyOfObject in object) {
    // additional filter for object properties:
    if (object.hasOwnProperty(keyOfObject)) {
      if (object[keyOfObject] === searchedValue) {
        return keyOfObject;
      }
    }
  }
};

module.exports = findKeyByValue;
