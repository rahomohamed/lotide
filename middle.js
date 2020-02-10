const middle = function(array) {
  if (array.length === 1 || array.length === 2) { // if array element is 1 or 2 
    return [];

   } else if (array.length % 2 === 0) { // if array is even 
     let middleIndex = array.length / 2;
     
     let middle = [array[middleIndex - 1], array[middleIndex]];
     return middle;

   } else if (!array.length % 2 === 0) { //if array is odd
    
    let middleIndex = Math.floor(array.length / 2)
    let midNumber = [array[middleIndex]];
   
    return midNumber;
   }
  };


module.exports = middle;
