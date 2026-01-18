import mongoose from "mongoose";
import User from "../models/User.js";
import Spaces from "../models/SpacesModel.js";
import Booking from "../models/Booking.js";
import getUsersService from "../services/Admin/getUsersService.js";
import updateUserService from "../services/Admin/updateUserService.js";
import getSpaceService from "../services/Admin/getSpaceService.js";
import updateSpaceService from "../services/Admin/updateSpaceService.js";

export const getUsersDetails = async (req, res) => {

    try {

        const users = await getUsersService(req);

        return res.status(201).json({ message: "Users date fetched successfulyy", users });

    } catch (error) {

        if (error.message === "FORBIDDEN") {
            return res.status(401).json({ msg: "Only admin can access" });
        }

        return res.status(403).json({ message: `server error ${error}` });
    }
}


export const updateUserDetail = async (req, res) => {
    try {

        const updatedUser = await updateUserService(req.params.id, req.body);
        return res.status(200).json({ msg: "User updated successfully", updatedUser });

    } catch (error) {
        if (error.message === "USER_NOT_FOUND") {
            return res.status(404).json({ msg: "User Not Found" });
        }
        else if (error.message === "USER_ID_IS_INVALID") {

            return res.status(400).json({
                message: "Invalid user ID"
            });

        }
        return res.status(403).json({ message: `server error ${error}` });
    }
}


export const getSpaces = async (req, res) => {
    try {
        const allSpaces = await getSpaceService();

        if (!allSpaces || allSpaces.length === 0) {
            return res.status(404).json({ message: "Spaces not found" });
        }

        return res.status(201).json({ message: "spaces data fetched successfully", allSpaces });
    }
    catch (error) {
        if (error.message === "SPACES_NOT_FOUND") {
            return res.status(404).json({ message: "Spaces not found" });
        }
        return res.status(403).json({ message: `server error ${error.message}` });
    }
}

export const updatedSpace = async (req, res) => {

    try {
        const updatedSpace = await updateSpaceService(req.params.id, req.body);
        return res.status(200).json({ msg: "Space updated successfully ", updatedSpace });
    } catch (error) {
        return res.status(403).json({ message: `server error ${error.message}` });
    }
}


export const getBookings = async () => {
    try {
        const bookings = await getBookingsService();

        return res.status(200).json({ msg: "bookings fetched successfully", bookings });
    } catch (error) {
        return res.status(403).json({ message: `server error ${error.message}` });
    }
}

export const updateBooking = async (req, res) => {

    try {
        const updatedSpace = await updateBookingService(req.params.id, req.body);
        return res.status(200).json({ msg: "Space updated successfully ", updatedSpace });
    } catch (error) {
        return res.status(403).json({ message: `server error ${error.message}` });
    }
}

