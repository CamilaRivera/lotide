const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");


const assertArraysEqual = function(array1, array2){
  if(eqArrays(array1,array2)){
    console.log(`Both arrays are equal: ${array1} === ${array2}`);
  } else {
    console.log(`Both arrays are not equal: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;

