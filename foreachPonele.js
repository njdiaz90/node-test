const foreachPonele = function (arr, pepito) {
    for (let i = 0; i < arr.length; i++) {
        pepito(arr[i])
    }
}

const foo = (arr) => {
    foreachPonele(arr, function (element) {
        console.log(element)
    })
}

module.exports = {
    foo,
}