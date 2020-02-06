const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
      
  if (eqObjects(actual, expected)) {
          console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
        } else {
          console.log(`🚨 🚨 🚨 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        }
      };


const eqObjects = function(object1, object2) {

  if ((Object.keys(object1).length !== Object.keys(object2).length)) { // checks if lengths are the same
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
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); 



