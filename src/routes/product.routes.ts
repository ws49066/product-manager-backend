import { Router } from "express";
import { validadeToken } from "@/middlewares/validadeToken.js";
import {
  addProduct,
  getProduct,
  getAll,
} from "@/controllers/productController.js";

const productRoutes = Router();

/**
 * @swagger
 * /product/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get an item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the item
 *     responses:
 *       200:
 *         description: Item found
 *       401:
 *         description: Unauthorized
 */
productRoutes.get("/:id", validadeToken, getProduct);

/**
 * @swagger
 * /product/all:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all items
 *     responses:
 *       200:
 *         description: List of items
 *       401:
 *         description: Unauthorized
 */
productRoutes.get("/all", validadeToken, getAll);

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: name of the product
 *         price:
 *           type: integer
 *           description: Price of the product
 *         description:
 *           type: string
 *           description: description of the product
 */

/**
 * @swagger
 * /product/addProduct:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Created product
 */
productRoutes.post("/addProduct", validadeToken, addProduct);

export default productRoutes;
