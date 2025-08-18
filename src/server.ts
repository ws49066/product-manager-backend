import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

const PORT = process.env.PORT || 3001
const NODE_ENV = process.env.NODE_ENV || 'development'

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`Environment: ${NODE_ENV}`)
})