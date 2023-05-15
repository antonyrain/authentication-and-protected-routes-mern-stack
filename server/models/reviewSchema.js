const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    content: String,
    required: Boolean,
})

reviewSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review