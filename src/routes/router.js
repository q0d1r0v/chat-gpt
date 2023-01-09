// imports
const express = require('express')

// router
const router = express()

// import routes
const searchData = require('../modules/search-data')

// use router
router.post("/api/search-data", searchData)


module.exports = router