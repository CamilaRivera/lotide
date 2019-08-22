const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if(!Array.isArray(array1) || !Array.isArray(array2)){
    console.log("One of the parameters is not an array");
    return false;
  }
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
//&& keyOfObject1 === keyOfObject2
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let keyOfObject1 in object1) {
    let isTheValue = false;
    //for (let keyOfObject2 in object2) {
      if (object2[keyOfObject1] === object1[keyOfObject1] || eqArrays(object2[keyOfObject1], object1[keyOfObject1])) {
        isTheValue = true;
      }
    //}
    if (!isTheValue) {
      return false;
    }
  }
  return true;
};


const ab = { a: "2", b: "1" };
const ba = { b: "2", d: "1" };
assertEqual(eqObjects(ab, ba), false); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false