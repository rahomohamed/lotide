const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) { // check if lengths are equal first 
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


module.exports = eqArrays;