const kangaroo = (x1, v1, x2, v2) => {
    if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) {
        return 'NO';
    }
    let result = doKangarooIntercept(x1, v1, x2, v2)
    return result ? 'YES' : 'NO'
}

const doKangarooIntercept = (x1, v1, x2, v2) => {
    let position1 = x1;
    let position2 = x2;
    for (let i = 0; i < 10000; i++) {
        if (position1 === position2) {
            return true
        }
        position1 = position1 + v1;
        position2 = position2 + v2;
    }
    return false
}

module.exports = {
    kangaroo
}