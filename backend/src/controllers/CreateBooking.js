import mongoose from "mongoose";
import Booking from "../models/Booking.js";
import ParkingSpot from "../models/ParkingSpot.js";

const createBooking = async (req, res) => {
    try {
        if (req.user.role != "driver") {
            return res.status(401).json({ message: "Only drivers can book " });
        }

        const { parking_id, start_time, end_time } = req.body;

        const parkingSpot = await ParkingSpot.findById(parking_id);
        console.log(parkingSpot.is_available);

        //checks if parking spot is available or not exits
        if (!parkingSpot || !parkingSpot.is_available) {
            return res.status(404).json({ message: "Parking spot is not available" });
        }

        //checking the date is valid or not
        const s = new Date(start_time), e = new Date(end_time);
        if (isNaN(s.getTime()) || isNaN(e.getTime()) || e <= s) {
            return res.status(400).json({ msg: "Invalid or bad time range" });
        }

        //checking owner parking spot availability with driver booking dates & time
        if (s < parkingSpot.available_from || e > parkingSpot.available_to) {
            return res.status(400).json({
                msg: "Booking time is outside the parking spot's available hours"
            });
        }

        const durationTime = (end_time - start_time) / 1000 * 60 * 60;
        if (durationTime <= 1) {
            return res.status(400).json({ msg: "Minimum booking duration is 1 hour" });
        }

        if (durationHours > 24) {
            return res.status(400).json({ msg: "Maximum booking duration is 24 hours" });
        }

        //if the parking spot is currently book by another driver it will show already booked
        const conflict = await Booking.findOne({
            parking_id,
            status: "confirmed",
            $or: [
                { start_time: { $lt: new Date(end_time) }, end_time: { $gt: new Date(start_time) } }
            ]
        });

        // console.log(conflict);

        if (conflict) {
            return res.status(400).json({ msg: "This spot is already booked for the selected time" });
        }



        const start = new Date(start_time);
        const end = new Date(end_time);
        const hours = (end - start) / (1000 * 60 * 60);

        const total_price = hours * parkingSpot.price_per_hour;

        const booking = new Booking({
            driver_id: req.user.id,
            parking_id,
            start_time,
            end_time,
            total_price,
            status: "confirmed"
        })

        await booking.save();

        res.status(201).json({ msg: 'Parking space created', booking });
    } catch (error) {
        res.status(403).json({ message: `server error ${error}` });
    }
}

export default createBooking;