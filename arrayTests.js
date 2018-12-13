const countSort = (arr) => {
    let orderedArr = [];
    let result = [];
    let countSort = changeIntoDash(arr)
    orderedArr.push(arr[0]);
    for (let j = 1; j < countSort.length; j++) {
        let curr = countSort[j];
        for (let k = 0; k < orderedArr.length; k++) {
            if (orderedArr.length === 1) {
                if (orderedArr[0][0] > curr[0]) {
                    orderedArr.splice(k, 0, curr);
                    break
                } else {
                    orderedArr.push(curr);
                    break
                }
            } else {
                if (k === orderedArr.length - 1) {
                    if (curr[0] < orderedArr[k][0]) {
                        orderedArr.splice(k, 0, curr);
                        break
                    } else {
                        orderedArr.push(curr);
                        break
                    }
                } else if (curr[0] < orderedArr[k][0]) {
                    orderedArr.splice(k, 0, curr);
                    break
                }
            }
        }
    }
    result = getStringsFromArray(orderedArr, result)
    result = result.join(' ')
    return result;
}

const changeIntoDash = (arr) => {
    const newArray = arr;
    for (let i = 0; i < newArray.length / 2; i++) {
        newArray[i][1] = '-'
    }
    return newArray;
}

const getStringsFromArray = (arr, emptyArr) => {
    let stringArr = emptyArr;
    for (let a in arr) {
        stringArr.push(arr[a][1]);
    }
    return stringArr
}

module.exports = {
    countSort,
}

// const countSort = (arr) => {
//     let orderedArr = [];
//     let result = [];
//     let countSort = changeIntoDash(arr)
//     for (let i = 0; i < arr.length; i++) {
//         arr[i][0] = Number(countSort[i][0]);
//     }
//     arr.forEach(function (element) {
//         for (let j = 0; j < arr.length; j++) {
//             if (orderedArr[j] === undefined && j === element[0]) {
//                 orderedArr[j] = [];
//                 orderedArr[j].push(element[1]);
//             } else if (j === element[0]) {
//                 orderedArr[j].push(element[1]);
//             }
//         }
//     })
//     let result = [];
//     orderedArr.forEach(function (element) {
//         if (element != '') {
//             result.push(element.join(' '));
//         } else if (element.length === 1) {
//             orderedArr.pop();
//         }
//     });
//     result = result.join(' ')
//     return result
// }