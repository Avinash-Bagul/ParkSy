import signUpService from '../services/Auth/signUpService.js';
import loginService, { getSingleUserService } from '../services/Auth/loginService.js';

export const register = async (req, res) => {

    const { name, email, password, role, phone_number } = req.body;
    console.log(req.body);

    // console.log(req.body);
    try {

        const user = await signUpService(name, email, password, role, phone_number);

        res.cookie("token", user.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ msg: "Account created successfully", token: user.token });

    } catch (error) {

        if (error.message === "USER_ALREADY_EXISTS") {
            return res.status(400).json({ msg: 'User already exists' });
        }

        return res.status(500).json({ msg: `Server error ${error.message}` })
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);
    try {

        const credentials = await loginService(email, password);


        res.cookie("token", credentials.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 1000, // 60 minutes
        });

        //send response
        res.status(200).json({
            msg: 'Login successfull',
            user: credentials.user
            // :
            // {
            //     user_id: user._id,
            //     name: user.name,
            //     email: user.email,
            //     phone_number: user.phone_number,
            //     role: user.role,
            //     profile_picture: user.profile_picture,
            //     status: user.status,
            // }
        })


    } catch (error) {

        if (error.message === "EMAIL_AND_PASSWORD_NOT_PROVIDED") {
            return res.status(400).json({ msg: "Please provide email and password" });
        }

        if (error.message === "INVALID_CREDIATIALS") {
            return res.status(400).json({ msg: "Invalid credetials" });
        }

        return res.status(500).json({ msg: `Server error ${error.message}` });
    }
}


export const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",   
        secure: process.env.NODE_ENV === "production", 
    })

    return res.status(200).json({ msg: "Logged out successfully" });
}


export const getSingleUser = async (req, res) => {
    try {
        const singleUser = await getSingleUserService(req.params.id);

        res.status(200).json({msg: "User found ", singleUser});
    } catch (error) {
        if(error.message === "USER_NOT_FOUND"){
            return res.status(404).json({msg: "User not found"});

        }

        return res.status(500).json({msg: "Server Error", error: error.message});
    }
}