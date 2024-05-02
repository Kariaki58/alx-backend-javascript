const assert = require('assert')
const calculateNumber = require('./0-calcul')


describe('calculateNumber', () => {
    it('0 and a whole number', () => {
        assert.strictEqual(calculateNumber(0, 1), 1)
    })
    it("rounded both floating point number", () => {
        assert.strictEqual(calculateNumber(1.5, 3.2), 5)
    })
    it('rounded one of the input', () => {
        assert.strictEqual(calculateNumber(1.5, 3), 5)
    })
    it('rounded b input of the function', () => {
        assert.strictEqual(calculateNumber(3, 1.5), 5)
    })
    it('check negative number', () => {
        assert.strictEqual(calculateNumber(-1, -1), -2)
    })
    it('check one negative number', () => {
        assert.strictEqual(calculateNumber(2, -1), 1)
    })
})