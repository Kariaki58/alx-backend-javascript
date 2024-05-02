
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('check correct output', () => {
    expect(calculateNumber(1, 3, 'SUM')).to.equal(4);
  });
  it('check correct output', () => {
    expect(calculateNumber(-1, -3, 'SUM')).to.equal(-4);
  });
  it('check correct output', () => {
    expect(calculateNumber(50, 20, 'SUBTRACT')).to.equal(30);
  });
  it('check correct output', () => {
    expect(calculateNumber(-1, -3, 'SUBTRACT')).to.equal(2);
  });
  it('check correct output', () => {
    expect(calculateNumber(1, 3, 'DIVIDE')).to.equal(0.3333333333333333);
  });
  it('check correct output', () => {
    expect(calculateNumber(-1, -3, 'DIVIDE')).to.equal(0.3333333333333333);
  });
  it('check correct output', () => {
    expect(calculateNumber(1, 0, 'DIVIDE')).to.equal('Error');
  });
});
