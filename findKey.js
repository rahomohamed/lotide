const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) { 
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) { 
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚨 🚨 🚨 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


const findKey = function(object, callback) {
  
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
  } else {

  }
  }
  return undefined;
}



console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"