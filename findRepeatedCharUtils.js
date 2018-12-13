//ESTO FALLA
const findRepeatedChar = (str) => {
  let strArr = str.split('');
  let validationArr = strArr;
  strArr.forEach(function (element) {
    const char = element;
    //    validationArr.shift();
    if (validationArr.indexOf(char) !== -1) {
      return isRepeated = true;
      } else { 
        return isRepeated = false; 
      }
    })
    return isRepeated
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
  isStrRepeated,
}