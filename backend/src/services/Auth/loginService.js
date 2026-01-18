import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


const loginService = async (email, password) => {

    // 1. Validate input
    if (!email || !password) {
        throw new Error("EMAIL_AND_PASSWORD_NOT_PROVIDED");
        
    }

    //find user
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("INVALID_CREDIATIALS");
    };

    //compare password
    const ismatch = await bcrypt.compare(password, user.password_hash);
    
    if (!ismatch) {
        throw new Error("INVALID_CREDIATIALS");
    }

    // console.log(ismatch);

    user.last_login = new Date();
    await user.save();
    // console.log(user);

    //generating token
    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )

    return ({
        token, 
        user
    })
}

export default loginService;