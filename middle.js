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

// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const middle = function(array) {
  if (array.length === 1 || array.length === 2) { // if array element is 1 or 2 
    return [];

   } else if (array.length % 2 === 0) { // if array is even 
     let middleIndex = array.length / 2;
     console.log(middleIndex);
     let middle = [array[middleIndex - 1], array[middleIndex]];
     return middle;

   } else if (!array.length % 2 === 0) { //if array is odd
    
    let middleIndex = Math.floor(array.length / 2)
    let midNumber = [array[middleIndex]];
   
    return midNumber;
   }
  };


assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);
