const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => { console.log(`Server running at ${PORT}`) })

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/login', (req, res) => {
    res.send(`<h1>Login Page</h1>`)
})