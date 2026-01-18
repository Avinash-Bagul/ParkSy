import User from "../../models/User.js";
import mongoose from "mongoose";
const updateUserService = async (id, updationData) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("USER_ID_IS_INVALID");
    }

    const updatedUser = await User.findByIdAndUpdate(id, updationData, { new: true });

    if (!updatedUser) {
        throw new Error("USER_NOT_FOUND");
    }

    return updatedUser;

}

export default updateUserService;