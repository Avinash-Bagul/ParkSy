import { Router } from "express";
import createBooking from "../controllers/createBooking.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/', authMiddleware, createBooking);

export default router;