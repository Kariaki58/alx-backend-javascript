export default function createIteratorObject(report) {
    let array = []
    let newArray = []

    for (let data of Object.keys(report)) {
        array.push(...Object.values(report[data]))
    }
    for (let s of array) {
        newArray.push(...s)
    }
    return newArray
}
