import Spaces from "../models/SpacesModel.js";
import Booking from "../models/Booking.js";
import { confirmPaymentService, deleteSpaceService, updateSpaceService } from "../services/SpaceServices.js";

//creating parking spot
export const createSpace = async (req, res) => {
    try {

        const newSpot = await createSpaceService(req);

        return res.status(201).json({ msg: 'Parking space created', newSpot });
    }
    catch (error) {
        if (error.message === "ONLY_OWNER_CAN_CREATE_SPACE") {
            return res.status(403).json({ msg: "Only owners can create parking spots" });
        }

        return res.status(400).json({ msg: error.message });
    }
}

//getting parking spots
export const getSpace = async (req, res) => {
    try {
        const spaces = await Spaces.find({ is_available: true }).populate("owner_id", "name email");
        res.status(200).json({ msg: "Space fetched successfully", spaces });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

//update the Parking spot
export const updateSpace = async (req, res) => {
    try {

        const updated = await updateSpaceService(req.params.id, data);

        return res.status(201).json({ msg: "Space updated successfully", updated });
        console.log(updated);
    } catch (error) {
        if (error.message === "SPACE_NOT_FOUND") {
            return res.status(404).json({ message: "parking space not found" });
        }
        else if (error.message === "UNAUTHORIZED_TO_UPDATE_THIS_SPACE") {
            return res.status(403).json({ message: "You are not authorized to update this space" });
        }
        return res.status(400).json({ msg: error.message });
    }
}

//delete parking spot 
export const deleteSpace = async (req, res) => {
    try {

        const deleted = await deleteSpaceService(req.params.id)
        res.status(201).json({ message: "Space deleted successfully" });
    } catch (error) {

        if (error.message === "PARKING_SPACE_NOT_FOUND") {
            return res.status(404).json({ message: "parking space not found" });
        }
        else if (error.message === "UNAUTHORIZED_TO_DELETE_THIS_SPACE") {
            return res.status(403).json({ message: "You are not authorized to delete this space" });
        }
        return res.status(500).json({ msg: error.message });
    }
}

export const confirmPayment = async (req, res) => {
    try {
        const { paid_by } = req.body;

        const bookingData = await confirmPaymentService(id, paid_by);

        res.status(201).json({
            msg: "payment confirmed by owner",
            bookingData
        })
    }
    catch (error) {

        if (error.message === "BOOKING_NOT_FOUND") {
            return res.status(404).json({ msg: "booking not found" });
        }
        else if (error.message === "UNAUTHORISED") {
            return res.status(403).json({ msg: "Not authorised" });
        }
        return res.status(500).json({ msg: error.message });
    }
}