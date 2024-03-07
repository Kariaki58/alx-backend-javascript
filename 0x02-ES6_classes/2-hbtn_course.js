export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name === "string") {
            this._name = name
        } else {
            throw new TypeError("Name must be a string")
        }
        if (typeof length === "number") {
            this._length = length
        } else {
            throw new TypeError("Length must be a number")
        }
        this._students = students
    }
    get name() {
        return this._name
    }
    get length() {
        return this._length
    }
    get students() {
        return this._students
    }
    set name(pars) {
        if (typeof pars === "string") {
            this._name = pars
        } else {
            throw new TypeError("Name must be a string")
        }
    }
    set length(pars) {
        if (typeof pars === "number") {
            this._length = pars
        } else {
            throw new TypeError("Length must be a number")
        }
    }
    set students(pars) {
        this._students = pars
    }
}