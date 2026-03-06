import { Router } from "express";
import {createBooking, getActiveBooking, getAllBookings, getBookingDetails, payment, updateBooking} from "../controllers/BookingCont.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { getBookedSpacesService } from "../services/BookingServices.js";

const router = Router();

router.post('/create', authMiddleware, createBooking);
router.get('/getAllBookings',authMiddleware,  getAllBookings);
router.get("/getActiveBooking", authMiddleware, getActiveBooking);
router.get('/:id', authMiddleware, getBookingDetails);
router.put('/:id/payment', authMiddleware, payment);
router.put('/:id/updateBooking', authMiddleware, updateBooking);
// router.get('/getBookedSpaces', authMiddleware, getBookedSpacesService);

export default router;