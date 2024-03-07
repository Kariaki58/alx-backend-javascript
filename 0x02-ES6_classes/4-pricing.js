import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount
        this._currency = currency
    }
    get amount() {
        return this._amount
    }
    set amount(pars) {
        this._amount = pars
    }
    get currency() {
        return this._currency
    }
    set currency(pars) {
        this._currency.name = pars
    }
    displayFullPrice() {
        const currency = this.currency.name
        return `${this.amount} ${currency} (${this.currency.code})`
    }
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate
    }
}
