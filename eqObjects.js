const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

//&& keyOfObject1 === keyOfObject2
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let keyOfObject1 in object1) {
    let isTheValue = false;
    //for (let keyOfObject2 in object2) {
      if (object2[keyOfObject1] === object1[keyOfObject1] || eqArrays(object2[keyOfObject1], object1[keyOfObject1])) {
        isTheValue = true;
      }
    //}
    if (!isTheValue) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;


