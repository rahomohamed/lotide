const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe('#findKeyByValue', () => {
it("returns key by value", () => {
  const result = findKeyByValue(bestTVShowsByGenre, "The Wire")
  const expected = 'drama'
assert.deepEqual(result, expected)
});
})

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

