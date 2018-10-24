const shiftToTheLeft = (arr, n) => {
    for(let i = 0 ; i < n; i++ ) {
      const val = arr.shift();
      arr.push(val);
  } return arr
}
      
const shiftToTheRight = (arr, n) => {
    for(let i = 0 ; i < n; i++ ) {
      const val =arr.pop();
      arr.unshift(val);
  } return arr
}

const shiftArray = (arr, n, str = 'izq') => {
  let result = [];
  if( str == 'der') {
    result = shiftToTheRight(arr, n);
    } else if ( str == 'izq') {
    result = shiftToTheLeft(arr, n);
  } return result
}

module.exports = {
  shiftArray,
  shiftToTheLeft,
  shiftToTheRight,  
}