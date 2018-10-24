const findMissing = require("./findMissingNumbers.js");
const getMinMaxUtils = require("./getMinMaxUtils.js");
const getNamesList = require("./getNames.js");
const arrayUtils = require("./arrayUtils.js");
const findRepeatedCharUtils = require("./findRepeatedCharUtils.js");

const basicFunctions = {
    findMissingNumbers: findMissing.findMissingNumbers,
    getMin: getMinMaxUtils.getMin,
    getMax: getMinMaxUtils.getMax,
    getMinAndMax: getMinMaxUtils.getMinAndMax,
    getNames: getNamesList.getNames,
    shiftArray: arrayUtils.shiftArray,
    shiftToTheLeft: arrayUtils.shiftToTheLeft,
    shiftToTheRight: arrayUtils.shiftToTheRight,
    findRepeatedChar: findRepeatedCharUtils.findRepeatedChar,
    isStrRepeated: findRepeatedCharUtils.isStrRepeated,
}
const Personas = [{name:"Alfonso",age:21},{name:"Vicente",age:27},{name:"Juanca",age:21},{name:"Marcelo",age:30},{name:"Roberto",age:22},{name:"Guillermo",age:32},{name:"Walter",age:20},{name:"Leandro",age:21}]
console.log(basicFunctions.getNames(Personas));