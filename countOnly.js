const assertEqual = require("./assertEqual");

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //you can use itemsToCount[item] too inthe if condition
    if (itemsToCount.hasOwnProperty(item)) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  if(Object.keys(results).length === 0){
    return;
  }
  return results;
}

module.exports = countOnly;