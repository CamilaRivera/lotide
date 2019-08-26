const assertArraysEqual =require("./assertArraysEqual");

const middle = function (array) {
  let arrayMiddleTerm = [];
  if (array.length === 1 || array.length === 2) {
    return arrayMiddleTerm;
  }
  let middleIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    arrayMiddleTerm.push(array[middleIndex - 1]);
  }
  arrayMiddleTerm.push(array[middleIndex]);
  return arrayMiddleTerm;
}

module.exports = middle;
