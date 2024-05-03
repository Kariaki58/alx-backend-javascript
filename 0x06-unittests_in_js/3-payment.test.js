describe('sendPaymentRequestToApi', () => {
	it('check correct output', () => {
		const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

		sendPaymentRequestToApi(50, 20);
		expect(calculateNumberSpy.calledOnce).to.be.true;
		expect(calculateNumberSpy.calledOnceWithExactly(100, 20, 'SUM')).to.be.true;
		calculateNumberSpy.restore();
	});
});