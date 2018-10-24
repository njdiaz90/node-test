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

module.exports = {
    getMin,
    getMax,
    getMinAndMax,
}