import Booking from "../models/Booking.js";
import Spaces from "../models/SpacesModel.js";


export const createBookingS = async (booking_id, start_time, end_time) => {

    // if (req.user.role != "driver") {
    //     return res.status(401).json({ message: "Only drivers can book " });
    // }

    const parkingSpot = await Spaces.findById(booking_id);
    // console.log(parkingSpot);

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

    const durationTime = (end_time - start_time) / 1000 * 60 * 60;
    if (durationTime <= 1) {
        throw new Error("DURATION_MUST_BE_ATLEAST_ONE_HOUR");
    }

    if (durationTime > 24) {
        throw new Error("MAXIMUM_DURATION_IS_24_HOURS");
    }

    //if the parking spot is currently book by another driver it will show already booked
    const conflict = await Booking.findOne({
        booking_id,
        status: "confirmed",
        $or: [
            { start_time: { $lt: new Date(end_time) }, end_time: { $gt: new Date(start_time) } }
        ]
    });

    // console.log(conflict);

    if (conflict) {
        throw new Error("ALREADY_BOOKED_FOR_SELECTER_TIME");
    }



    const start = new Date(start_time);
    const end = new Date(end_time);
    const hours = (end - start) / (1000 * 60 * 60);

    const total_price = hours * parkingSpot.price_per_hour;

    const booking = new Booking({
        driver_id: req.user.id,
        booking_id,
        start_time,
        end_time,
        total_price,
        status: "confirmed"
    })

    await booking.save();

    return booking;
}



export const getBookingS = async (id) => {

    const bookingData = await Booking.findById(id);
    if (!bookingData) {
        throw new Error("BOOKING_NOT_FOUND");
    }

    return bookingData;
}

export const paymentService = async (id) => {

    const bookingData = await Booking.findById(id);

    if (!bookingData) {
        throw new Error("BOOKING_NOT_FOUND");
    }

    if (req.user.role !== "driver" || bookingData.driver_id.toString() !== req.user.id) {
        throw new Error("NOT_AUTHORIZED");
    }

    bookingData.payment_status = "waiting_for_confirmation";
    bookingData.save();

    return bookingData;
}

