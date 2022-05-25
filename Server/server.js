const express = require('express')
const cors= require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const path = require('path')


require("dotenv").config()

app.use(express.static(path.join(__dirname, '../public')))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
})

app.get("styles", (req, res) => {
    res.SendFile(path.join(__dirname, '../public/index.css'));
})

const { getChest }= require('./controller')







const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
