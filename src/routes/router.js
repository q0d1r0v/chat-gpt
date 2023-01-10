// imports
const express = require('express')

// router
const router = express()

// import middleware
const middleware = require('../middleware/middleware')
router.use(middleware)

// import routes
const login = require('../modules/login')
const searchData = require('../modules/search-data')

// use router
router.post("/login", login)
router.post("/api/search-data", searchData)


module.exports = router