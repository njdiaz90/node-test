const orderArray = (arr) => {
    const results = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        for (let j = 0; j < results.length; j++) {
            if (results.length === 1) {
                if (results[0].age < current.age) {
                    results.unshift(current)
                    break
                } else if (results[j].age === current.age) {
                    results.splice(j, 0, current);
                    break
                } else {
                    results.push(current)
                    break
                }
            } else {
                if (results[j].age > current.age) {
                    if (j == results.length - 1) {
                        results.push(current);
                        break
                    } else if (results[j + 1].age < current.age) {
                        results.splice(j + 1, 0, current);
                        break
                    }
                } else if (results[j].age === current.age) {
                    results.splice(j, 0, current);
                    break
                } else {
                    results.unshift(current)
                    break
                }
            }
        }
    } return results
}

const getNames = (arr) => {
    const names = [];
    let personas = orderArray(arr)
    for (let i = 0; i < personas.length; i++) {
        names.push(personas[i].name);
    } return names
}

function insertionSort2(n, arr) {
    const results = [arr[0]];
    for (let i = 1; i < n; i++) {
        const current = arr[i];
        for (let j = 0; j < results.length; j++) {
            if (results.length == 1) {
                if (results[0] < current) {
                    console.log('hay un solo result,curr va al final')
                    results.push(current)
                    break
                } else if (results[j] === current) {
                    results.splice(j, 0, current);
                    console.log('hay un solo result,curr va a en el mismo lugar')
                    break
                } else {
                    results.unshift(current)
                    console.log('hay un solo result,curr va al principio')
                    break
                }
            } else {
                if (results[j] < current) {
                    if (j == results.length - 1) {
                        console.log('el numero ' + current + ' es el último e igual al actual ' + results[j]  + ', mismo lugar ')
                        results.push(current);
                        console.log(results);
                        break
                    } else if (results[j + 1] > current) {
                        console.log('el siguiente numero ' + current + ' es mayor que ' + results[j] + ', curr va en el medio')
                        results.splice(j + 1, 0, current);
                        console.log(results);
                        break
                    }
                } else if (results[j] === current) {
                    results.splice(j, 0, current);
                    console.log('el numero ' + current + ' es igual que ' + results[j] + ', curr va a en el mismo lugar')
                    console.log(results);
                    break
                } else {
                    console.log('el numero ' + current + ' es menor que ' + results[j]  + ', va al principio')
                    results.unshift(current)
                    console.log(results);
                    break
                }
            }
        }
    } return results
}

module.exports = {
    getNames,
}