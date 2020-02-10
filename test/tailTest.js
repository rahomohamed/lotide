const tail = require('../tail')
const assert = require('chai').assert

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    const result = tail([1, 2, 3])
    assert.deepEqual(result, [2, 3]);
  });
  it("returns '5' for [1, 5]", () => {
    const result = (tail([1, 5]))
    assert.deepEqual(result, [5]); 
  });
})


