import { Router } from "express";
import { 
    createSession
 } from "../controllers/SessionController.js";

const sessionRoutes = Router();

sessionRoutes.post("/login", createSession);

export default sessionRoutes;