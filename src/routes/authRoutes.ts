import { Router } from "express";

// Controllers
import { signUp } from "../controllers/authController";


const authRoutes: Router = Router();

authRoutes.post('/signup', signUp);

export default authRoutes;