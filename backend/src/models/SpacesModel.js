import mongoose from "mongoose";

const SpacesSchema = mongoose.Schema(
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
        location: {
            type: {
                type: String,
                enum: ["Point"],
                required: true
            },
            coordinates: {
                type: [Number], // [longitude, latitude]
                required: true
            }
        }
        ,
        pricing: {
            per_hour: Number,
            per_day: Number
        },
        is_available: {
            type: Boolean,
            default: true,
        },
        availability: {
            available_from: Date,
            available_to: Date
        },
        photos: {
            type: [String], // or [String] if multiple images
        },
    }, { timestamps: true }

);


SpacesSchema.index({ location: "2dsphere" });
SpacesSchema.index({ "pricing.per_hour": 1 });
SpacesSchema.index({ is_available: 1 });

const Spaces = mongoose.model('Spaces', SpacesSchema);

export default Spaces;