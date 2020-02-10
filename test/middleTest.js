const middle = require('../middle')
const assert = require('chai').assert


describe("#middle", () => {
  it("returns middle number", () => {
    const result = middle([1, 2, 3, 4, 5, 6])
    assert.deepEqual(result, [3, 4]);
  });
})

