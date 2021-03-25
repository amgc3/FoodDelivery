const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
    res.status(200).json({ response: 'ok' })
})

router.post("/register", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    telephone: req.body.telephone,
    name: req.body.name,
    surname: req.body.surname,
    address: req.body.address,
  });
  try {
    const saveduser = await user.save();
    return res.status(201).json(saveduser);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user !== null) {
      if (user.password === req.body.password) {
        return res.status(200).json(user);
      } else {
        return res
          .status(400)
          .json({ message: "invalid username or password" });
      }
    } else {
      return res.status(400).json({ message: "invalid username or password" });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.patch("/update/:id", async (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if (err) {
      return res.status(400).send({ error: "unsuccessful" });
    }
    res.send({ success: "success" });
  });
});

module.exports = router

