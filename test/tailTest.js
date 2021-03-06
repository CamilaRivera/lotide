const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("original array shouldn't change", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);// no need to capture the return value since we are not checking it
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!
  });
});