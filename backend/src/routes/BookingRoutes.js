import { Router } from "express";
import {createBooking, getBookingDetails, payment, updateBooking} from "../controllers/BookingCont.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/create', authMiddleware, createBooking);
router.get('/:id', authMiddleware, getBookingDetails);
router.put('/:id/payment', authMiddleware, payment);
router.put('/:id/updateBooking', authMiddleware, updateBooking);

export default router;