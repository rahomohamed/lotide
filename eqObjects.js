const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 🚨 🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {

  if ((Object.keys(object1).length !== Object.keys(object2).length)) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) { // checks if values are the same
        if(Array.isArray(object1[key]) === true) { // check if its an array
          return eqArrays(object2[key],object1[key]); // compares 2 arrays n checks if equal
        }
        return false;
      }
    }
  }
  return true;
  }



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false