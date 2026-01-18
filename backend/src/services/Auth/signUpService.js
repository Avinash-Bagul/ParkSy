import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const signUpService = async (name, email, password, role, phone_number) => {

    const exitsUser = await User.findOne({ email });
    if (exitsUser) {
        throw new Error("USER_ALREADY_EXISTS");
    }

    //hashing password 
    const hashedPassword = await bcrypt.hash(password, 10);

    //creating new user
    const newUser = new User({
        name,
        email,
        password_hash: hashedPassword,
        role,
        phone_number,
        date_joined: new Date(),
        status: "active",
    });

    await newUser.save();

    //generating token
    const token = jwt.sign(
        { id: newUser._id, role: newUser.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )
    //setting cookie

    //send response
    return ({
        token,
        user: { id: newUser._id, name, email, role, phone_number }
    });
}

export default signUpService;