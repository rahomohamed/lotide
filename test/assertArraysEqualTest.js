const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require('../eqArrays')

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);