const gradingRoundup = (grades) => {
    grades.forEach(function (element, index) {
        if (element >= 38) {
            if ((element % 5) > 2) {
                grades[index] = element + (5 - (element % 5));
            }
        }
    })
    return grades
}

module.exports = {
    gradingRoundup,
}