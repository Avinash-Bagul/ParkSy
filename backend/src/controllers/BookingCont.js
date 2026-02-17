import mongoose from "mongoose";
import Booking from "../models/Booking.js";
import SpacesModel from "../models/SpacesModel.js";
import { createBookingS, getAllBservice, getBookingS, paymentService } from "../services/BookingServices.js";

export const createBooking = async (req, res) => {

    try {

        const { booking_id, start_time, end_time } = req.body;

        const booking = await createBookingS(booking_id, start_time, end_time, req.user);

        return res.status(201).json({ msg: 'Booking created', booking });
    }
    catch (error) {

        if (error.message === "ONLY_DRIVERS_CAN_BOOK") {
            return res.status(401).json({ msg: "ONly drivers can book " });
        }
        else if (error.message === "PARKINGSPOT_IS_NOT_AVAILABLE") {
            return res.status(404).json({
                msg: "Parking spot is not available"
            });
        }
        else if (error.message === "INVALID_OR_BAD_TIME_RANGE") {
            return res.status(400).json({
                msg: "Invalid or bad time range"
            });
        }
        else if (error.message === "TIME_IS_OUTSIDE_OF_AVAILABLE_HOURS") {
            return res.status(400).json({
                msg: "Booking time is outside the parking spot's available hours"
            });
        }
        else if (error.message === "DURATION_MUST_BE_ATLEAST_ONE_HOUR") {
            return res.status(400).json({
                msg:
                    "Minimum booking duration is 1 hour"
            });
        }
        else if (error.message === "MAXIMUM_DURATION_IS_24_HOURS") {
            return res.status(400).json({
                msg:
                    "Maximum booking duration is 24 hours"
            });
        }
        else if (error.message === "ALREADY_BOOKED_FOR_SELECTER_TIME") {
            return res.status(400).json({
                msg:
                    "This spot is already booked for the selected time"
            });

        }

        return res.status(403).json({ message: `server error ${error}` });
    }
}

export const getAllBookings = async (req, res) => {
    try {
        // console.log(req.user);
        const bookings = await getAllBservice(req.user.id);

       return res.status(200).json({msg: "get bookings successfull", bookings});
    } catch (error) {
        if(error.message === "BOOKINGS_NOT_FOUND"){
            return res.status(404).json({msg: "Booking not found"});
        }

        return res.status(500).json({msg: "Server error", error: error.message});
    }

}


export const getBookingDetails = async (req, res) => {
    try {

        const bookingData = await getBookingS(req.params.id);

        return res.status(201).json({ message: "successfully fetched booking detail ", bookingData })

    } catch (error) {
        if (error.message === "BOOKING_NOT_FOUND") {
            return res.status(404).json({
                msg: "Booking not found"
            });
        }
        return res.status(403).json({ message: `server error ${error.message}` })
    }
}

export const payment = async (req, res) => {
    try {
        const paymentstatus = await paymentService(req.params.id, req.user);

        return res.status(201).json({
            message: "waiting for confirmation", paymentstatus
        })

    } catch (error) {

        if (error.message === "BOOKING_NOT_FOUND") {
            return res.status(404).json({ msg: "booking not found" });
        }
        else if (error.message === "NOT_AUTHORIZED") {
            return res.status(403).json({ msg: "Not authorised" });

        }
        return res.status(500).json({ msg: `server error ${error.message}` });
    }
}


export const updateBooking = async () => {
    try {
        const paymentstatus = await updateBookingService(req.params.id, req.user);

        return res.status(201).json({
            message: "waiting for confirmation", paymentstatus
        })

    } catch (error) {

        if (error.message === "BOOKING_NOT_FOUND") {
            return res.status(404).json({ msg: "booking not found" });
        }
        else if (error.message === "NOT_AUTHORIZED") {
            return res.status(403).json({ msg: "Not authorised" });

        }
        return res.status(500).json({ msg: `server error ${error.message}` });
    }
}