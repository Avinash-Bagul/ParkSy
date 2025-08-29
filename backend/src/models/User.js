import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            auto: true, // Auto-generate unique ID
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
        },
        password_hash: {
            type: String,
            required: true,
        },
        phone_number: {
            type: String,
            required: true,
            match: [/^[0-9]{10}$/, "Please use a valid phone number"],
        },
        role: {
            type: String,
            enum: ["owner", "driver", "admin"],
            default: "driver",
        },
        profile_picture: {
            type: String, // URL
            default: null,
        },
        date_joined: {
            type: Date,
            default: Date.now,
        },
        last_login: {
            type: Date,
            default: null,
        },
        status: {
            type: String,
            enum: ["active", "inactive", "banned"],
            default: "active",
        },
    },
    {
        timestamps: true, // adds createdAt and updatedAt
    }
);

const User = mongoose.model('User', userSchema);

export default User;
