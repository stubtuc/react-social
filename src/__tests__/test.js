const { sum, mul, sub, div } = require('../forTests');

describe('Sum function', () => {
    test('Adding 1 + 2 equals 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
    test('Adding 1 + 2 + 3 equals 6', () => {
        expect(sum(1, 2, 3)).toEqual(6)
    })
    test('Adding 1 + 2 + 3 + 4 equals 10', () => {
        expect(sum(1, 2, 3, 4)).toEqual(10)
    })
    test('Adding 1 + 2 + 3 + 4 + 5 equals 15', () => {
        expect(sum(1, 2, 3, 4, 5)).toEqual(15)
    })
})
describe('Sub function', () => {
    test('Subtracting 1 - 2 equals -1', () => {
        expect(sub(1, 2)).toBe(-1)
    })
    test('Subtracting 1 - 2 - 3 equals -4', () => {
        expect(sub(1, 2, 3)).toEqual(-4)
    })
})
describe('Div function', () => {
    test('Dividing 1 / 1 equals 1', () => {
        expect(div(1, 1)).toBe(1)
    })
})

describe('Mul function', () => {
    test('Multiplying 101 * 25 equals 2525', () => {
        expect(mul(101, 25)).toBe(2525)
    })
})
