import { Router } from "express";
import {createBooking, getBookingDetails} from "../controllers/BookingCont.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/', authMiddleware, createBooking);
router.get('/:id', authMiddleware, getBookingDetails);

export default router;