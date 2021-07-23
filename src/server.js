require('dotenv').config()

const express = require("express")
const routes = require("./routes")
const path = require("path")

const APP_URL = process.env.APP_URL
const APP_PORT = process.env.APP_PORT
const URL = APP_URL + APP_PORT

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use(routes)

server.listen(APP_PORT, () => console.log(`Servidor on ${URL}`))