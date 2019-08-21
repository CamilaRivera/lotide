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

const without = function(array, arrayElementToRemove){
  let arrayWithoutElements = [];
  for(let i = 0; i < array.length; i ++){
    let itContains = false;
    for(let j = 0; j < arrayElementToRemove.length; j++){
      if(arrayElementToRemove[j] === array[i]){
        itContains = true;
        break;
      }
    }

    if(itContains === false){
      arrayWithoutElements.push(array[i]);
    }
  }
  return arrayWithoutElements;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);