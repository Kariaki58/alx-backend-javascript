const Utils = require('./utils.js')


const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const total = Utils.calculateNumber(totalAmount, totalShipping, 'SUM')
    console.log(`The total is: ${total}`)
}

module.exports = sendPaymentRequestToApi;
