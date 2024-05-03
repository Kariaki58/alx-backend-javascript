const express = require('express')


const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the payment system")
})

app.get("/cart/:id", (req, res) => {
    const { id } = req.params
    if (!isNaN(Number(id))) {
        res.status(200).send(`Payment methods for cart ${id}`)
    }
    res.sendStatus(404)
})

app.listen(7865, () => {
    console.log("API available on localhost port 7865")
})
