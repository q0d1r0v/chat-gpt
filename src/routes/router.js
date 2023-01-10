// imports
const express = require('express')

// router
const router = express()

// use login
const login = require('../modules/login')
router.post("/login", login)

// import middleware
const middleware = require('../middleware/middleware')
router.use(middleware)

// import routes
const searchData = require('../modules/search-data')

// use router
router.post("/api/search-data", searchData)


module.exports = router