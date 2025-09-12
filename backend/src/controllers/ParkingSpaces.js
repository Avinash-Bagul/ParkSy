import ParkingSpot from "../models/ParkingSpot.js";

//creating parking spot
export const createParkingSpot = async (req, res) => {
    try {

        if (req.user.role !== "owner") {
            return res.status(403).json({ msg: "Only owners can create parking spots" });
        }

        const newSpot = new ParkingSpot({
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
export const getParkingSpot = async (req, res) => {
    try {
        const spaces = await ParkingSpace.find({ is_available: true }).populate("user_id", "name email");
        res.json(spaces);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

//update the Parking spot
export const updateParkingSpot = async (req, res) => {
    try {
        const updated = await ParkingSpace.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

//delete parking spot 
export const deleteParkingSpot = async (req, res) => {
    try {
        const deleted = await ParkingSpot.findByIdAndDelete(req.params.id);
        res.json({ msg: 'parking spot deleted' });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}