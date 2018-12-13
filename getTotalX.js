function getTotalBetween(a, b) {
    let validX = [];
    const minA = Math.min(...a);
    const maxB = Math.max(...b);
    const isFactorOf = (arrItem, x) => x % arrItem === 0;
    const isFactorFor = (arrItem, x) => arrItem % x === 0; 

    for(x = minA; x <= maxB; x++) {
        if (a.every(av => isFactorOf(av, x))) {
            if(b.every(bv => isFactorFor(bv, x))) {
                validX.push(x);
            }            
        }
    }
    return validX.length;
}

module.exports = {
    getTotalBetween,
}