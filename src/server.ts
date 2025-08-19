import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import routes from './routes/index.js'

const app = express()
dotenv.config()


const PORT = process.env.PORT || 3001
const NODE_ENV = process.env.NODE_ENV || 'development'

app.use(express.json())

app.use('/api', routes)

app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server is running on port ${PORT}`)
    console.log(`Environment: ${NODE_ENV}`)
})