import express from 'express';
import { Register } from '../controller/userController.js';

const router = express.Router();

// Register Router
router.post("/register",Register)

export default router;