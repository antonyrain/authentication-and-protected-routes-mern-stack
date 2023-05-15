const { info, error } =require('../utils/logger')
const reviewRouter = require('express').Router()
const jwt = require('jsonwebtoken')

const Review = require('../models/reviewSchema')
const User = require('../models/userSchema')


const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    } 
    return null 
}
  
reviewRouter.get('/', async (req, res) => {
   await Review.find({}).then(review => {
        res.json(review)
    })
})

reviewRouter.get('/:id', async (req, res) => {
    await Review.findById(req.params.id).then(review => {
        res.json(review)
    })
})

reviewRouter.post('/', async (req, res) => {
    try {
        const body = req.body
        const token = getTokenFrom(req)
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if (!decodedToken.id) {
            return res.status(401).json({error: 'token missin or invalid'})
        }
        
        await User.findById(decodedToken.id)

        const review = new Review({
            content: body.content,
            required: true,
        })

        await review.save().then(savedReview => {
            res.json(savedReview)
        })
    } catch (error) {
        info('token missing')
    }
})

module.exports = reviewRouter