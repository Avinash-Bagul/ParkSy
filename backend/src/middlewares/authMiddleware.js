import jwt from 'jsonwebtoken';

const authMiddleware = (req,res,next) => {
    // console.log(req.cookies);
    const token = req.cookies.token;

    if(!token) return res.status(401).json({msg: "token is not provided"});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    } catch (error) {
        res.status(403).json({msg: "invalid or expired token"});
    }
    
}

export default authMiddleware;