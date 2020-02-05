const eqArrays = function(arr1, arr2) {
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
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ ✅ ✅ These arrays are equal");
  } else {
    console.log("🚨 🚨 🚨 These arrays are not equal");
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const letterPositions = function(sentence) {
  const results = {};

 for (let i = 0; i < sentence.length; i++) {
   let letter = sentence[i]; // specific letter in string

  if (results[letter]) { // if letter is present push the index to result 
    results[letter].push(i);
  
  } else {
    results[letter] = [i]; //if not present assign an index 
  }
   
 }
 return results;
}

console.log(letterPositions("lighthouse in the house"));
 