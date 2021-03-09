const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
    res.status(200).json({ response: 'ok' })
})

router.post('/register', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        telephone: req.body.telephone,
        name: req.body.name,
        surname: req.body.surname,
        address: req.body.address
    })
    try{ 
        const saveduser = await user.save()
        return res.status(201).json(saveduser)

    } catch(error) {
        return res.status(404).json({message: error})

    }
})

module.exports = router