const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 🚨 🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {

  if (!(Object.keys(object1).length === Object.keys(object2).length)) {
    return false;
  }

  for (let key in  object1) {
    if (!(typeof object1[key] === typeof object2[key])) {
      return false;
    }

    if (typeof object1[key] === 'object' && Array.isArray(key)) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === 'object' && !Array.isArray(key)) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (!(object1[key] === object2[key])) {
        return false;
      }
    }
  }

  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false