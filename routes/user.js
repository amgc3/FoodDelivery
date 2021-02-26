const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
    res.status(200).json({ response: 'ok' })
})

module.exports = router