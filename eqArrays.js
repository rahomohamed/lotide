const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 🚨 🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) { // if # of values is not equal it returns false
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) { // loop through one array and compare to second
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
