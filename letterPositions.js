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
 delete results[" "]
 return results;
}

module.exports = letterPositions;
 