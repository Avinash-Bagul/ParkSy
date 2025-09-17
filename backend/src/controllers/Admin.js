import mongoose from "mongoose";
import User from "../models/User.js";
import SpacesModel from "../models/SpacesModel.js";
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
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedUser);

    } catch (error) {
        res.status(403).json({ message: `server error ${error}` });
    }
}


export const getSpaces = async (req, res) => {
    try {
        const allSpaces = await SpacesModel.find();
        res.status(201).json({message: "spaces data fetched successfully", allSpaces});
    } catch (error) {
        res.status(403).json({message: `server error ${error.message}`});
    }
}

export const updatedSpace = async (req, res) => {
    try {
        const updatedSpace = await SpacesModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
        console.log(updatedSpace);
        res.json(updatedSpace);
    } catch (error) {
        res.status(403).json({message: `server error ${error.message}`});
    }
}