const config = require('../utils/config')
const mongoose = require('mongoose')

const connectDB = () => {
    try {
        mongoose
        .connect(config.URI)
        console.log('MongoDB connection SUCCESS')
    } catch (error) {
        console.error("MongoDB connection FAIL")
        process.exit(1)
    }
}

module.exports = connectDB