const letterPositions = require("../letterPositions");
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns an object with the all the letter as key and the value are arrays with the positions of each letter in the string", () => {
    assert.deepEqual(letterPositions("hello"), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
  it("it shouldn't count the spaces between the string", () => {
    assert.deepEqual(letterPositions("hel lo"), { h: [ 0 ], e: [ 1 ], l: [ 2, 4 ], o: [ 5 ] });
  });
});
