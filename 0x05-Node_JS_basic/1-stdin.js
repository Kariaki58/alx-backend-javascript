const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Welcome to Holberton School, what is your name?\n", (n) => {
    console.log(`Your name is: ${n}`)
    readline.close()
})

readline.on("close", () => {
    console.log("This important software is now closing")
})