import mongoose from "mongoose";

const ParkingSpotSchema = mongoose.Schema(
    {
        owner_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String,
            required: true,
            maxlength: 100,
        },
        description: {
            type: String,
        },
        location_address: {
            type: String,
            required: true,
        },
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
        price_per_hour: {
            type: Number,
            required: true,
        },
        price_per_day: {
            type: Number,
        },
        is_available: {
            type: Boolean,
            default: true,
        },
        photo_url: {
            type: [String], // or [String] if multiple images
        },
    }, { timestamps: true }

);

const ParkingSpot = mongoose.model('ParkingSpot', ParkingSpotSchema);

export default ParkingSpot