import { Router } from "express";
import { validadeToken } from "@/middlewares/validadeToken.js";
import { addProduct, getProduct, getAll } from "@/controllers/productController.js";

const productRoutes = Router()

productRoutes.get('/', validadeToken, getProduct)

productRoutes.get('/all', validadeToken, getAll)

productRoutes.post('/addProduct', validadeToken, addProduct)

export default productRoutes;