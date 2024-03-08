export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(pars) {
    this._code = pars;
  }

  set name(pars) {
    this._name = pars;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
