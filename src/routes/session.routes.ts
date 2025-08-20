import { Router } from "express";
import { createSession } from "../controllers/SessionController.js";

const sessionRoutes = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Session:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: The username
 *         password:
 *           type: string
 *           description: The password
 */

/**
 * @swagger
 * /session/login:
 *   post:
 *     summary: log in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Session'
 *     responses:
 *       201:
 *         description: User logged in successfully
 */
sessionRoutes.post("/login", createSession);

export default sessionRoutes;
