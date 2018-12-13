const shiftToTheLeft = (arr, n) => {
  for (let i = 0; i < n; i++) {
    const val = arr.shift();
    arr.push(val);
  } return arr
}

const shiftToTheRight = (arr, n) => {
  for (let i = 0; i < n; i++) {
    const val = arr.pop();
    arr.unshift(val);
  } return arr
}

const shiftArray = (arr, n, str = 'izq') => {
  let result = [];
  if (str == 'der') {
    result = shiftToTheRight(arr, n);
  } else if (str == 'izq') {
    result = shiftToTheLeft(arr, n);
  } return result
}

const foreachManual = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

const printArray = (arr) => {
  foreachManual(arr, function (element) {
    console.log(element)
  })
}

const countReps = function (arr) {
  const result = [];
  const maxVal = 20;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    result[val] !== undefined
      ? result[val]++
      : result[val] = 1;
    if (result[i] === undefined && i < maxVal) {
      result[i] = 0;
    }
  }
  return result;
}

const getResult = function (arr) {
  const result = [];
  const maxVal = 20;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    result[val] !== undefined
      ? result[val]++
      : result[val] = 1;
    if (result[i] === undefined && i < maxVal) {
      result[i] = 0;
    }
  }
  return result;
}

const ordResult = function (arr) {
  const orderedResult = [];
  arr.forEach(function (element, index) {
    if (element > 0) {
      for (let j = 0; j < element; j++) {
        orderedResult.push(index);
      }
    }
  })
  return orderedResult;
}

const reordResult = (arr) => {
  const result = getResult(arr);
  const reorderedResult = ordResult(result);
  return reorderedResult;
}

module.exports = {
  countReps,
  printArray,
  reordResult,
  shiftArray,
  shiftToTheLeft,
  shiftToTheRight,
}