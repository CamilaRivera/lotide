const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

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
module.exports = letterPositions;