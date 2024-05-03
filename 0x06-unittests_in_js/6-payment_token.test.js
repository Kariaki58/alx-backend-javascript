const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('check correct solution', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done);
  });

  it('check correct solution', (done) => {
    getPaymentTokenFromAPI(false).then((response) => {
        expect(response).to.be.undefined;
        done();
      }).catch(done);
  });
});
