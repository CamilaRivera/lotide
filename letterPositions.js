const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Both arrays are equal");
  } else {
    console.log("Both arrays are different");
  }
};

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

const letterPositions = function (sentence) {
  const results = {};
  let arrayOfSentence = sentence.split("");
  for (let i = 0; i < arrayOfSentence.length; i++) {
    let currentLetter = arrayOfSentence[i];
    if (currentLetter !== " ") {
      if (results[currentLetter]) {
        results[currentLetter].push(i);
      } else {
        results[currentLetter] = [];
        results[currentLetter].push(i);
      }
    }

  }
  return results;
};


console.log(letterPositions("hel lo"));
assertArraysEqual(letterPositions("hel lo")["l"], [2, 4]);