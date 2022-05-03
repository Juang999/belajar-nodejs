import express from "express";
import { getUser, Register } from "../controller/UserController.js";

const router = express.Router();

router.get('/users', getUser);
router.post('/users', Register);

export default router;