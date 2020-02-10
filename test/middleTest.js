const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')


assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);