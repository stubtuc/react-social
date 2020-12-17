const sum = (...args) => args.reduce((el, acc) => el + acc);
const mul = (...args) => args.reduce((el, acc) => el * acc);
const sub = (...args) => args.reduce((el, acc) => el - acc);
const div = (...args) => args.reduce((el, acc) => el / acc);

module.exports = { sum, mul, sub, div};