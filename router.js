const { Router } = require('express')
const { getGamer } = require('./controller/Gamer.controller')

const router = Router()

// Gamer REST API
router.get('/gamer', getGamer)

// Event REST API

module.exports = router
