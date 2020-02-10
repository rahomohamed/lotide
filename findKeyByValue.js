const findKeyByValue = function(object, val) {
  
for (const key of Object.keys(object)) {
  if (val === object[key]) {
  return key;
  }
}
}

module.exports = findKeyByValue;