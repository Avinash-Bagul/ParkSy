import mongoose from "mongoose";

const BookingSchema = mongoose.Schema({
    driver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    // who booked
    booking_id: {
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
    ,

    payment_status: {
        type: String, enum: ["pending", "waiting_for_confirmation", "paid"],
        default: "pending"
    },

    paid_by: {
        type: String, enum: ["not paid","cash", "upi", "other"],
        default: "not paid "
    },

    confirmed_by_owner: {
        type: Boolean,
        default: true
    }


}, { timestamps: true });

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;