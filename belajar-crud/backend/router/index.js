import express from "express";
import { getUser, Register, Login } from "../controller/UserController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUser);
router.post('/users', Register);
router.post('/login', Login);

export default router;