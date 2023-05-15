require('dotenv').config()

const PORT = process.env.PORT || 3001
const URI = process.env.MONGO_URI
const SECRET = process.env.SECRET

module.exports = {
    PORT, 
    URI,
    SECRET
}