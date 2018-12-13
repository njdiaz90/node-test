const candleHeight = [ 3, 2, 1, 3 ];

function birthdayCakeCandles(ar) {
    let maxHeight = ar[0];
    ar.forEach(function(element){
        if ( maxHeight < element ) {
            maxHeight = element;
        }
    })
    let candleCount = 0;
    ar.forEach(function(element){
        if(element === maxHeight){
            candleCount++
        }
    })
    return candleCount
}

console.log(birthdayCakeCandles(candleHeight));