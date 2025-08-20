import {Router} from 'express'
import userRoutes from './user.routes.js'
import sessionRoutes from './session.routes.js'
import productRoutes from './product.routes.js'
const routes = Router()

routes.use('/users', userRoutes) 
routes.use('/session', sessionRoutes) 
routes.use('/product', productRoutes)

export default routes