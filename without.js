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

// loop through source array and check if items to remove is present, if present remove 


const without = function(sourceArray, itemsToRemoveArray) {
  let newArray = sourceArray;
  for (let i = 0; i < itemsToRemoveArray.length; i++) {
    for (let j = 0; j < sourceArray.length; j++) {
    if (sourceArray[j] === itemsToRemoveArray[i]) {
      newArray.splice(j, 1);
  }
}
}
return newArray;
}

// assertArraysEqual(without([1, 2, 3], [1])) // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words,["lighthouse"]), ["hello", "world"]);