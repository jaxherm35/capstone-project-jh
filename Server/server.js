require("dotenv").config()
const express = require('express')
const app = express()
const cors= require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const { getChest, getArms } = require('./controller')



app.use(cors())

app.use(express.json())

const path = require('path')

app.post('/seed', seed)
// app.get('/all_table', getAll)
app.get('/all_table', getChest)
app.get('/all_table', getArms)





app.use(express.static(path.join(__dirname, '../public')))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
})

app.get("styles", (req, res) => {
    res.SendFile(path.join(__dirname, '../public/index.css'));
})


const port = process.env.PORT || 5432

app.listen(SERVER_PORT, () => {
    console.log(`listening on ${port}`)
})
