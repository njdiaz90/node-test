// let s = 7;
// let t = 10;
// let a = 3;
// let b = 14;
// let apples = [5,8,10,12,-5,-6,6];
// let oranges = [-3,5,7,10,11,15];

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let distanceApples = calculateDistance(apples, a)
    let distanceOranges = calculateDistance(oranges, b);
    let applesInReach = calculateReachedFruit(distanceApples, s, t);
    let orangesInReach = calculateReachedFruit(distanceOranges, s, t);
    console.log(`hay solo ${applesInReach} manzanas`);
    console.log(`hay solo ${orangesInReach} naranjas`);
}
const calculateDistance = (arr, d) => {
    for (let i in arr) {
        arr[i] = arr[i] + d;
    }
    return arr
}

const calculateReachedFruit = (arr, s, t) => {
    let countFruit = 0;
    for (let i = 0; i < arr.length; i++) {
        if(t >= arr[i] && arr[i] >= s){
            countFruit++
        }
    }
    return countFruit;
}

module.exports = {
    countApplesAndOranges,
}