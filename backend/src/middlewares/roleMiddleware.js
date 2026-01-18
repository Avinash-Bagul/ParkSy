const roleMiddleware = (...allowdRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ msg: "Not logged in" });
        }

        if (!allowdRoles.includes(req.user.role)) {
            return res.status(403).json({ msg: "forbidden" });
        }

        next();
    }
}

export default roleMiddleware;