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
    console.log("✅ ✅ ✅ These arrays are equal");
  } else {
    console.log("🚨 🚨 🚨 These arrays are not equal");
  }
}

const flatten = function(array) {
  let newArray =[];
  for (let value of array) {
    if(Array.isArray(value) === true) { // if its an array
      for (let elements of value) { // loop through array
        newArray.push(elements);
      } 
    } else {
     
      newArray.push(value);
    }
    
  }
  return newArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));