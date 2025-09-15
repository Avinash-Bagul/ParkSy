import mongoose from "mongoose";
import User from "../models/User.js";
import ParkingSpot from "../models/ParkingSpot.js";
import Booking from "../models/Booking.js";

export const getUsersDetails = async (req, res) => {
    try {
        if(req.user.role != "admin"){
            return res.status(401).json({ message: "Only admin can access " });
        }

        const users = await User.find();
        res.status(201).json({message: "Users date fetched successfulyy", users});

    } catch (error) {
        res.status(403).json({ message: `server error ${error}` });
    }
}


export const updateUserDetail = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {new: true});
        res.json(updatedUser);

    } catch (error) {
        res.status(403).json({ message: `server error ${error}` });
    }
}


