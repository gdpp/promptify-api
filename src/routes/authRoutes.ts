import { Router } from "express";

// Controllers
import { signUp, login } from "../controllers/authController";


const authRoutes: Router = Router();

authRoutes.post('/signup', signUp);
authRoutes.post('/login', login);

export default authRoutes;