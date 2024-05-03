const express = require('express')


const app = express()
app.use(express.json())

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

app.get("/available_payments", (req, res) => {
    const obj = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }
    res.status(200).send(obj)
})

app.post('/login', (req, res) => {
    const{ body } = req
    
    res.status(201).send(`Welcome ${body["userName"]}`)
})
app.listen(7865, () => {
    console.log("API available on localhost port 7865")
})
