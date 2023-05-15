const { info, error } =require('./utils/logger')
const connectDB = require('./database/connectDB')
const modelNote = require('./models/noteSchema')
const dataNotes = require('./data/notes')

connectDB()

const importData = async() => {
    try {
        await modelNote.deleteMany({})
        await modelNote.insertMany(dataNotes)
        info('Data Import SUCCESS')
        process.exit()
    } catch {
        error('Data Import FAIL')
        process.exit(1)
    }
}

importData()