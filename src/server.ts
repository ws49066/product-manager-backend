import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import routes from './routes/index.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

const app = express()
dotenv.config()

const SwaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Product Manager API",
            version: "1.0.0",
            description: "API for managing products"
        },
        servers: [
            {
                url: "http://localhost:3001/api"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
    },
    apis: ["./src/routes/*.ts"]
}


const swaggerDocs = swaggerJsdoc(SwaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


const PORT = process.env.PORT || 3001
const NODE_ENV = process.env.NODE_ENV || 'development'

app.use(express.json())

app.use('/api', routes)

app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server is running on port ${PORT}`)
    console.log(`Environment: ${NODE_ENV}`)
})