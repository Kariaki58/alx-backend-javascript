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
        this._name = pars
    }
    set length(pars) {
        this._length = pars
    }
    set students(pars) {
        this._students = pars
    }
}