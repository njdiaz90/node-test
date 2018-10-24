const getMin = (arr) => {
    let min = arr[0];
    for(let i=0; i < arr.length; i++) {
        if ( min > arr[i] ) {
            min = arr[i];
        } 
    } return min;
}

const getMax = (arr) => {
    let max = arr[0];
    for(let i=0; i < arr.length; i++) {
        if ( max < arr[i] ) {
            max = arr[i];
        } 
    } return max;
}

const getMinAndMax = (arr) => {
    let min = getMin(arr);
    let max = getMax(arr);
    return [min, max]
}

const findRepeatedChar = (str) => {
  let strArr = str.split('');
  const len = str.length - 1;
    for(let i=0; i < len; i++) {
      const char = str[i];
      strArr.shift();
      const repetitions = isCharRepeated(char, strArr);
      if(repetitions) {
        return true;
        }
    } return false;
}

const isCharRepeated = (char, strArr) => {
  for(let j=0; j < strArr.length; j++){
    if( char === strArr[j] ) {return true;}
  } return false
}

const isStrRepeated = (str) => {
    let isRepeated = findRepeatedChar(str);
    if (isRepeated) {
      let response = 'Hay un caracter repetido!';
      return response;
    } else {
      let response = 'No hay un caracter repetido.';
      return response;
    } return false;
  console.log(response);
}

const reorderArray = (arr, n) => {
    for(let i = 0 ; i < n; i++ ) {
      const val = arr.shift();
      arr.push(val);
  } return arr
}

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

const reorderArrayAndShift = (arr, n, str = 'izq') => {
  let result = [];
  if( str == 'der') {
    result = shiftToTheRight(arr, n);
    } else if ( str == 'izq') {
    result = shiftToTheLeft(arr, n);
  } return result
}

const findMissingNumbers = (arr) => {
  let result = [];
    for(let i=1 ; i < 11; i++) {
        if( arr.indexOf(i) == -1 ) {
          result.push(i);
        }
  } return result
  result.sort((a,b) => (a - b));
}

const orderArray = (arr) => {
  const results = [arr[0]];
  for(let i=1;i<arr.length;i++){
      const current = arr[i];
      for(let j=0;j<results.length;j++){
          if(results.length == 1) {
              if(results[0].age < current.age){
                  results.unshift(current)
                  break
              } else if(results[j].age === current.age){
                  results.splice(j,0,current);
                  break
              } else {
                  results.push(current)
                  break
              }
          } else {
              if(results[j].age > current.age){
                  if(j == results.length - 1){
                      results.push(current);
                      break
                  } else if(results[j+1].age < current.age){
                      results.splice(j+1,0,current);
                      break
                  } 
              } else if(results[j].age === current.age){
                      results.splice(j,0,current);
                      break
              } else {
                  results.unshift(current)
                  break
              }
          }
      } 
  } return results
}

const getNames = (arr) => {
  const names = [];
  let personas = orderArray(arr)
  for(let i=0;i<personas.length;i++) {
      names.push(personas[i].name);
  } return names
}

const basicFunctions = {
  getMinAndMax: getMinAndMax,
  isStrRepeated: isStrRepeated,
  reorderArrayAndShift: reorderArrayAndShift,
  findMissingNumbers: findMissingNumbers,
  getNames : getNames
}