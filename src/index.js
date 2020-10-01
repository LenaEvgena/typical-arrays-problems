
exports.min = function min (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  } else {
    var minResult = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] < minResult) {
        minResult = array[i];
      }
    }
  }
  return minResult;
}

exports.max = function max (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  } else {
    var maxResult = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > maxResult) {
        maxResult = array[i];
      }
    }
  }
  return maxResult;
}

exports.avg = function avg (array) {
  return 0;
}
