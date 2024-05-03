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
    it("test available payment", (done) => {
        request.get('http://localhost:7865/available_payments', (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            expect(JSON.parse(body)).to.deep.equal({
                payment_methods:{credit_cards:true,paypal:false}
            })
            done()
        })
    })
    it('test post endpiont login', (done) => {
        request.post({url:'http://localhost:7865/login', json:{"userName": "Betty"}}, (err, res, body) => {
            expect(res.statusCode).to.equal(201)
            expect(body).to.equal('Welcome Betty')
            done()
        })
    })
})
