var pi = 3.14;
const user = {name: 'John', age: 30}

getRandom = function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.circleArea = (r) => {
    return pi * r ** 2
}

module.exports.getRandom = getRandom
module.exports.user = user