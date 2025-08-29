import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { name, email, password, role, phone_number } = req.body;

    try {
        //find existing user
        const exitsUser = await User.findOne({ email });
        if (exitsUser) return res.status(400).json({ msg: 'User already exists' });

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
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        //send response
        res.status(201).json({
            token,
            user: { id: newUser._id, name, email, role, phone_number }
        });

    } catch (error) {
        res.status(500).json({ msg: `Server error ${error.message}` })
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        // 1. Validate input
        if (!email || !password) {
            return res.status(400).json({ msg: "Please provide email and password" });
        }

        //find user
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ msg: 'Invalid crediatials' });

        //compare password
        const ismatch = bcrypt.compare(password, user.password_hash);
        if (!ismatch) return res.status(400).json({ msg: 'Invalid crediatials' });

        user.last_login = new Date();
        await user.save();

        //generating token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        //set cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 15 * 60 * 1000, // 15 minutes
        });

        //send response
        res.status(200).json({
            msg: 'Login successfull',
            token,
            user:
            {
                user_id: user._id,
                name: user.name,
                email: user.email,
                phone_number: user.phone_number,
                role: user.role,
                profile_picture: user.profile_picture,
                status: user.status,
            }
        })

    } catch (error) {
        res.status(500).json({ msg: `Server error ${error.message}` });
    }
}
