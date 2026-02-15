require('dotenv').config()
console.log(process.env.PORT);


const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login to the application</h1>")
})

app.get('/fierce', (req, res) => {
    res.send("This is Fierce's Application")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
