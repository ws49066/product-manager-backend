import {Router} from 'express'
import userRoutes from './user.routes.js'
import sessionRoutes from './session.routes.js'
const routes = Router()

routes.use('/users', userRoutes) 
routes.use('/session', sessionRoutes) 

export default routes