const countOnly = require("../countOnly");
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("should return 1 if there is just one aparition of the element searched", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    assert.deepEqual(countOnly(firstNames, {"Jason": true}), {Jason: 1});
  });
  it("should return undefined if there is none aparition of the element searched", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    assert.deepEqual(countOnly(firstNames, {"Karima": true}), undefined);
  });
  it("should return the added result if there is more than one aparition of the element searched", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    assert.deepEqual(countOnly(firstNames, {"Fang": true}), {Fang: 2});
  });
});

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);