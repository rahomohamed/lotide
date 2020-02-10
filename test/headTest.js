const chai = require("chai");
const assert = chai.assert;
const head = require("../head");

describe('head', () => {
  it ('returns first value of numbers', () => {
  assert.deepEqual(head([1, 2, 3], 1));
});
})