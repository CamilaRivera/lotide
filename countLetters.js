const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(string) {
  let stringWithoutSpaces = string.split(" ").join("");
  let countOfLetters = {};
  for (let word of stringWithoutSpaces) {
    if (countOfLetters[word]) {
      countOfLetters[word] += 1;
    } else {
      countOfLetters[word] = 1;
    }
  }

  return countOfLetters;
};


assertEqual(countLetters("Jason")["a"], 1);
assertEqual(countLetters("Karima")["a"], 2);
assertEqual(countLetters("lighthouse in the house")["i"], 2);



