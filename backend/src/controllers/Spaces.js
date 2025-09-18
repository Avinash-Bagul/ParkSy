import Spaces from "../models/SpacesModel.js";

//creating parking spot
export const createSpace = async (req, res) => {
    try {

        if (req.user.role !== "owner") {
            return res.status(403).json({ msg: "Only owners can create parking spots" });
        }

        const newSpot = new Spaces({
            owner_id: req.user.id,  // ✅ take from token, not from body
            title: req.body.title,
            description: req.body.description,
            location_address: req.body.location_address,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            price_per_hour: req.body.price_per_hour,
            price_per_day: req.body.price_per_day,
            photo_url: req.body.photo_url,
            available_from: req.body.available_from,
            available_to: req.body.available_to
        });

        await newSpot.save();

        res.status(201).json({ msg: 'Parking space created', newSpot });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

//getting parking spots
export const getSpace = async (req, res) => {
    try {
        const spaces = await Spaces.find({ is_available: true }).populate("owner_id", "name email");
        res.json(spaces);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

//update the Parking spot
export const updateSpace = async (req, res) => {
    try {
        const SingleSpace = await Spaces.findById(req.params.id);
        if (!SingleSpace) {
            return res.status(404).json({ message: "parking space not found" });
        }

        if (String(req.user.id) !== String(SingleData.owner_id)) {
            return res.status(403).json({ message: "You are not authorized to update this space" });
        }

        const updated = await Spaces.findByIdAndUpdate(req.params.id)
        res.json(updated);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

//delete parking spot 
export const deleteSpace = async (req, res) => {
    try {

        const SingleData = await Spaces.findById(req.params.id);

        if (!SingleData) {
            return res.status(404).json({ message: "parking space not found" });
        }

        if (String(req.user.id) !== String(SingleData.owner_id)) {
            return res.status(403).json({ message: "You are not authorized to delete this space" });
        }

        await Spaces.findByIdAndDelete(req.params.id);

        res.status(201).json({ message: "Space deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}