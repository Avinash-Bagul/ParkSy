import User from "../../models/User.js";


const getUsersService = async (req) => {

    if (req.user.role != "admin") {
       throw new Error("FORBIDDEN");
    }

    const users = await User.find();

    return users;
}

export default getUsersService;