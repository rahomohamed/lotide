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

module.exports = flatten;
