const getMin = (arr) => {
    let min = arr[0];
    arr.forEach(function(element){
        if ( min > element ) {
            min = element;
        } 
    })
    return min
}

const getMax = (arr) => {
    let max = arr[0];
    arr.forEach(function(element){
        if ( max < element ) {
            max = element;
        } 
    })
    return max;
}

const getMinAndMax = (arr) => {
    const min = getMin(arr);
    const max = getMax(arr);
    return [min, max]
}

module.exports = {
    getMinAndMax,
}