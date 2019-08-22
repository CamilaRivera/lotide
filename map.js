const words = ["ground", "control", "to", "major", "tom"];
const numbers = [2, 5, 14, 45, 12];

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Both arrays are equal");
  } else {
    console.log("Both arrays are different");
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const firstLetter = map(words, word => word[0]);

const doubleNumber = map(numbers, num => num * 2);

const stringLength = map(words, word => word.length);


assertArraysEqual(firstLetter, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(doubleNumber, [4, 10, 28, 90, 24]);
assertArraysEqual(stringLength, [6, 7, 2, 5, 3]);