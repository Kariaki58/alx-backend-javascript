const calculateNumber = require('./1-calcul.js')
const assert = require('assert')


describe("calculateNumber", () => {
    it("check correct output", () => {
        assert.strictEqual(calculateNumber(1, 2, 'SUM'), 3)
    })
    it('check correct output', () => {
        assert.strictEqual(calculateNumber(-1, 2, 'SUM'), 1)
    })
    it ('check correct ouput', () => {
        assert.strictEqual(calculateNumber(-1, -2, 'SUM'), -3)
    })
    it ('check correct output', () => {
        assert.strictEqual(calculateNumber(0, 2, 'SUM'), 2)
    })
    it ('check correct output', () => {
        assert.strictEqual(calculateNumber(2.1, 3.5, 'SUM'), 6)
    })
    it("check correct output", () => {
        assert.strictEqual(calculateNumber(3.5, 4.5, 'SUM'), 9)
    })
    it ("check correct output", () => {
        assert.strictEqual(calculateNumber(0, 0, 'SUM'), 0)
    })
    it ('check correct ouput', () => {
        assert.strictEqual(calculateNumber(3, 2, 'SUBTRACT'), 1)
    })
    it ('check correct ouput', () => {
        assert.strictEqual(calculateNumber(3.5, 2.2, 'SUBTRACT'), 2)
    })
    it ('check correct ouput', () => {
        assert.strictEqual(calculateNumber(5.3, 2.7, 'SUBTRACT'), 2)
    })
    it ('check correct ouput', () => {
        assert.strictEqual(calculateNumber(1, 2, 'SUBTRACT'), -1)
    })
    it('check correct ouput', () => {
        assert.strictEqual(calculateNumber(1.1, 0, 'SUBTRACT'), 1)
    })
    it ('check correct ouput', () => {
        assert.strictEqual(calculateNumber(2, 2, 'DIVIDE'), 1)
    })
    it ('check correct ouput', () => {
        assert.strictEqual(calculateNumber(4.2, 2.3, 'DIVIDE'), 2)
    })
    it ('check correct ouput', () => {
        assert.strictEqual(calculateNumber(5.5, 2.5, 'DIVIDE'), 2)
    })
    it ('check correct ouput', () => {
        assert.strictEqual(calculateNumber(3, 0, 'DIVIDE'), "Error")
    })
    it('check correct ouput', () => {
        assert.strictEqual(calculateNumber(1, 3, 'DIVIDE'), 0.3333333333333333);
      });
      it('check correct ouput', () => {
        assert.strictEqual(calculateNumber(-1, -3, 'DIVIDE'), 0.3333333333333333);
      });
})