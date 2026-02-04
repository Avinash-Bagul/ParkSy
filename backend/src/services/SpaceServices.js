import Booking from "../models/Booking.js";
import Spaces from "../models/SpacesModel.js";

export const createSpaceService = async (req) => {

    if (req.user.role !== "owner") {
        throw new Error("ONLY_OWNER_CAN_CREATE_SPACE");
    }

    const newSpot = new Spaces({
        owner_id: req.user.id,
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

    return newSpot;
}


export const getSpaceService = async (reqQuery) => {

    const {
        lat,
        lng,
        radius,
        available,
        minPrice,
        maxPrice,
        startDate,
        endDate,
        sort,
        page = 1,
        limit = 10
    } = reqQuery;

    const query = {}

    // Location based search by radius langitute, latitude
    if (lat && lng) {
        query.location = {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [Number(lng), Number(lat)]
                },
                $maxDistance: Number(radius) || 5000 // default 5km
            }
        };
    }


    // price based search
    if (minPrice || maxPrice) {
        query["pricing.per_hour"] = {};

        if (minPrice) {
            query["pricing.per_hour"].$gte = Number(minPrice);
        }

        if (maxPrice) {
            query["pricing.per_hour"].$lte = Number(maxPrice);
        }
    }


    // Date avialability filter

    if (startDate && endDate) {
      query["availability.available_from"] = {
        $lte: new Date(startDate)
      };

      query["availability.available_to"] = {
        $gte: new Date(endDate)
      };
    }


    // price based sorting
     let sortOption = {};

    if (sort === "price") {
      sortOption = { "pricing.per_hour": 1 };
    }

    if (sort === "price-desc") {
      sortOption = { "pricing.per_hour": -1 };
    }

    if (sort === "newest") {
      sortOption = { createdAt: -1 };
    }

    const spaces = await Spaces.find(query).sort(sortOption);

    if (!spaces) {
        throw new Error("SPACE_NOT_FOUND");
    }

    return spaces;
}


export const updateSpaceService = async (id, data) => {

    const SingleSpace = await Spaces.findById(id);
    console.log(SingleSpace);

    if (!SingleSpace) {
        throw new Error("SPACE_NOT_FOUND");
    }

    if (String(req.user.id) !== String(SingleSpace.owner_id)) {
        throw new Error("UNAUTHORIZED_TO_UPDATE_THIS_SPACE");
    }

    const updated = await Spaces.findByIdAndUpdate(id, data, { new: true })

    return updated;
}


export const deleteSpaceService = async (id) => {

    const SingleData = await Spaces.findById(id);

    if (!SingleData) {
        throw new Error("PARKING_SPACE_NOT_FOUND");

    }

    if (String(req.user.id) !== String(SingleData.owner_id)) {
        throw new Error("UNAUTHORIZED_TO_DELETE_THIS_SPACE");
    }

    await Spaces.findByIdAndDelete(id);

    return;
}


export const confirmPaymentService = async (id, paid_by) => {

    const bookingData = await Booking.findById(id);

    if (!bookingData) {
        throw new Error("BOOKING_NOT_FOUND");
    }

    if (req.user.role !== "owner") {
        throw new Error("UNAUTHORISED");
    }

    bookingData.payment_status = "paid";
    bookingData.paid_by = paid_by;
    await bookingData.save();
}