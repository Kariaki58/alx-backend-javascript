function calculateNumber(a, b, type) {
    let roundeda = Math.round(a)
    let roundedb = Math.round(b)
    if (type === 'SUM')
        return roundeda + roundedb
    else if (type === 'SUBTRACT')
        return roundeda - roundedb
    else if (type === 'DIVIDE') {
        if (roundedb === 0)
            return "Error"
        return roundeda / roundedb
    }
}

module.exports = calculateNumber
