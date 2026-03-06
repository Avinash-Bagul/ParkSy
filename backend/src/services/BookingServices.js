import mongoose from "mongoose";
import { updateBooking } from "../controllers/BookingCont.js";
import Booking from "../models/Booking.js";
import Spaces from "../models/SpacesModel.js";
import { act } from "react";


export const createBookingS = async (parking_spot_id, start_time, end_time, total_price, user) => {

    if (user.role != "driver") {
        throw new Error("ONLY_DRIVERS_CAN_BOOK");
    }

    const parkingSpot = await Spaces.findById(parking_spot_id);

    //checks if parking spot is available or not exits
    if (!parkingSpot || !parkingSpot.is_available) {
        throw new Error("PARKINGSPOT_IS_NOT_AVAILABLE");
    }

    //checking the date is valid or not
    const s = new Date(start_time), e = new Date(end_time);
    if (isNaN(s.getTime()) || isNaN(e.getTime()) || e <= s) {
        throw new Error("INVALID_OR_BAD_TIME_RANGE");

    }

    //checking owner parking spot availability with driver booking dates & time
    if (s < parkingSpot.available_from || e > parkingSpot.available_to) {
        throw new Error("TIME_IS_OUTSIDE_OF_AVAILABLE_HOURS");
    }

    const durationTime = (e - s) / (1000 * 60 * 60);

    console.log(durationTime);
    if (durationTime < 1) {
        throw new Error("DURATION_MUST_BE_ATLEAST_ONE_HOUR");
    }


    //if the parking spot is currently book by another driver it will show already booked
    const conflict = await Booking.findOne({
        parking_spot_id,
        status: "confirmed",
        $or: [
            { start_time: { $lt: new Date(end_time) }, end_time: { $gt: new Date(start_time) } }
        ]
    });


    if (conflict) {
        throw new Error("ALREADY_BOOKED_FOR_SELECTER_TIME");
    }


    const booking = new Booking({
        driver_id: user.id,
        parking_spot_id,
        start_time,
        end_time,
        duration: durationTime,
        total_price,
        status: "confirmed"
    })

    await booking.save();

    return booking;
}

export const getBookedSpacesService = async (booking_id) => {
    console.log(booking_id);
    const spaces = await Spaces.findById(booking_id);
    if (!spaces) {
        throw new Error("SPACES_NOT_FOUND");
    }
    return spaces;
}

export const getAllBservice = async (id) => {
    // console.log(id);
    const bookings = await Booking.find({ driver_id: new mongoose.Types.ObjectId(id) });
    // console.log(bookings);

    if (!bookings) {
        throw new Error("BOOKINGS_NOT_FOUND");
    }

    return bookings;
}

export const getBookingS = async (id) => {

    const bookingData = await Booking.findById(id);
    if (!bookingData) {
        throw new Error("BOOKING_NOT_FOUND");
    }

    return bookingData;
}


export const getActiveBService = async (user) => {
    let space;
    let activeBooking;
    console.log(user);
    if (user) {
        activeBooking = await Booking.findOne({ driver_id: user.id, status: "active" });
        if (activeBooking) {
            space = await Spaces.findById(activeBooking.parking_spot_id);
        }
    }

    if (!activeBooking) {
        throw new Error("ACTIVE_BOOKING_NOT_FOUND");
    }
    return { activeBooking, space };
}

export const paymentService = async (id, user) => {

    const bookingData = await Booking.findById(id);

    if (!bookingData) {
        throw new Error("BOOKING_NOT_FOUND");
    }

    if (user.role !== "driver" || bookingData.driver_id.toString() !== user.id) {
        throw new Error("NOT_AUTHORIZED");
    }

    bookingData.payment_status = "waiting_for_confirmation";
    await bookingData.save();

    return bookingData;
}


export const updateBookingService = async (id, user, bodyData) => {
    const bookingData = await Booking.findById(id);

    if (!bookingData) {
        throw new Error("BOOKING_NOT_FOUND");
    }

    if (user.role !== "driver" || bookingData.driver_id.toString() !== user.id) {
        throw new Error("NOT_AUTHORIZED");
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
        id,
        bodyData,
        { new: true, runValidators: true }
    );
    await updatedBooking.save();

    return updateBooking;
}