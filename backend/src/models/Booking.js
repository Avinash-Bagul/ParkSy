import mongoose from "mongoose";

const BookingSchema = mongoose.Schema({
    driver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    // who booked
    parking_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ParkingSpot",
        required: true
    },
    // which spot
    start_time: {
        type: Date,
        required: true
    },

    end_time: {
        type: Date,
        required: true
    },

    total_price: {
        type: Number,
        required: true
    },

    status: {
        type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending"
    }

}, { timestamps: true });

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;