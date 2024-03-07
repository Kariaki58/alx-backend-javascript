export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name
        this._length = length
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