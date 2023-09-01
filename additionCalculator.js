additionCalculator = (...numbers) => numbers.reduce((partialSum, a) => partialSum + a, 0);
module.exports = additionCalculator;
