// imports
const express = require('express')

// data
const port = 3000

// use server
const server = express()

server.use(express.json())

// import router
const router = require('./src/routes/router')

// use router
server.use('/', router)

server.listen(port, () => {
    console.log("server is running on port " + port)
})