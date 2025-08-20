import { Router } from "express";
import { UserController } from "@/controllers/UserController";

const userRoutes = Router();
const { registerUser } = UserController;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: The username
 *         password:
 *           type: string
 *           description: The password
 *         role:
 *           type: string
 *           description: the role of the user
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created
 */
userRoutes.post("/register", registerUser);

export default userRoutes;
