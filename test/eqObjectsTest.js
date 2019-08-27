const eqObjects = require("../eqObjects");
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns false if two objects are not equal in value", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
  it("returns true if two objects are equal in type and value", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });
});
