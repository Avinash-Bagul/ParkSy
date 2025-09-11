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

        if (!parkingSpot ||!parkingSpot.is_available) {
            console.log("afsjrjjrjj");
           return res.status(404).json({ message: "Parking spot is not available" });
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