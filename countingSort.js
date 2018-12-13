let arr = [1, 1, 2, 5, 1, 3, 9, 7, 3, 8];

console.log('--------------------')

function countingSort(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (result[val] != null) {
            result[val]++;
            result[i] = 0;
        } else {
            result[val] = 1;
        }
        return result;
    }
}

module.exports = {
    countingSort,
}