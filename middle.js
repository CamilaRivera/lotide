const eqArrays = function (array1, array2) {
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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Both arrays are equal");
  } else {
    console.log("Both arrays are different");
  }
};

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

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
