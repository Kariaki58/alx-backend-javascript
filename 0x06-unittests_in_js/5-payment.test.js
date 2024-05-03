const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('check correct output', () => {
    sendPaymentRequestToApi(500, 20);

    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('check correct output', () => {
    sendPaymentRequestToApi(100, 100);

    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
