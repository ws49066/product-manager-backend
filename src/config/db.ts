import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const MONGO_USER = process.env.MONGO_USER
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_PORT = process.env.MONGO_PORT
const MONGO_DBNAME = process.env.MONGO_DBNAME
let MONGO_HOST = process.env.MONGO_HOST

if(process.env.NODE_ENV === 'development') {
    mongoose.set('debug', true)
    MONGO_HOST = 'localhost'
}

const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}?authSource=admin`

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log(`MongoDB connected`)
    } catch (error) {
        throw new Error(`Failed to connect to MongoDB: ${error}`)
    }
}

export default connectDB
