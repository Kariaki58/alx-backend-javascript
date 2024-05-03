const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('./api');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Index page', function() {
  it('should return status code 200', function(done) {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return the correct message', function(done) {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
