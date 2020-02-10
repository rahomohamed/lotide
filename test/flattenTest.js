const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it ("returns flatten arrays", () => {
  const result = flatten([1, 2, [3, 4], 5, [6]]);
  assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });
})
