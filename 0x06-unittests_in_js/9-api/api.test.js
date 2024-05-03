const { expect } = require('chai')
const request = require('request')

describe('server test', () => {
    it('tests the server', (done) => {
        request.get('http://localhost:7865', (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            expect(body).to.equal('Welcome to the payment system')
            done()
        })
    })
    it('tests the server next', (done) => {
        request.get('http://localhost:7865/cart/3', (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            expect(body).to.equal('Payment methods for cart 3')
            done()
        })
    })
    it('test failed endpoint', (done) => {
        request.get('http://localhost:7865/cart/askdfda', (err, res, body) => {
            expect(res.statusCode).to.equal(404)
            done()
        })
    })
})
