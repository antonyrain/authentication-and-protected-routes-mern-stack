const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/userSchema')

usersRouter.get('/', async (req, res) => {
  const users = await User
    .find({})
  res.json(users)
})

usersRouter.post('/', async (req, res) => {
  const { username, email, password } = req.body

  const existingUser = await User.findOne({ username })
  if (existingUser) {
    return res.status(400).json({
      error: 'username must be unique'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    email,
    passwordHash,
    requaired: true
  })

  await user.save().then(savedUser => {
    res.status(201).json(savedUser)
  })
})

module.exports = usersRouter
