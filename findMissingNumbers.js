const findMissingNumbers = (arr) => {
  let result = [];
  for (let i = 1; i < 11; i++) {
    if (arr.indexOf(i) === -1) {
      result.push(i);
    }
  } result.sort((a, b) => (a - b));
  return result
};

module.exports = {
  findMissingNumbers,
}