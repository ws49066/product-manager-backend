import { Router } from "express";
import { UserController } from "@/controllers/UserController";

const userRoutes = Router();
const {registerUser} = UserController

userRoutes.post('/register', registerUser)

export default userRoutes