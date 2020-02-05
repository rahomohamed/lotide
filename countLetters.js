const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 🚨 🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const countLetters = function(str) {
const results = {};

for (const letter of str) { // loop through every letter of string 
  if (results[letter]) { // if letter number is present in result add 1
    results[letter] += 1; 
  
  } else {
    results[letter] = 1;
  }
  
}
return results;

}

console.log(countLetters("Lighthouse")); 