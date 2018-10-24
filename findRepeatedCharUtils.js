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
    }
}

module.exports = {
  findRepeatedChar,
  isCharRepeated,
  isStrRepeated,
}