
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('check correct output', () => {
    assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
  });
  it('check correct output', () => {
    assert.strictEqual(calculateNumber(-1, -3, 'SUM'), -4);
  });
  it('check correct output', () => {
    assert.strictEqual(calculateNumber(50, 20, 'SUBTRACT'), 30);
  });
  it('check correct output', () => {
    assert.strictEqual(calculateNumber(-1, -3, 'SUBTRACT'), 2);
  });
  it('check correct output', () => {
    assert.strictEqual(calculateNumber(1, 3, 'DIVIDE'), 0.3333333333333333);
  });
  it('check correct output', () => {
    assert.strictEqual(calculateNumber(-1, -3, 'DIVIDE'), 0.3333333333333333);
  });
  it('check correct output', () => {
    assert.strictEqual(calculateNumber(1, 0, 'DIVIDE'), 'Error');
  });
});
