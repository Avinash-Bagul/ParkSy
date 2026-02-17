import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
    const isLogin = useSelector((state) => state.auth.isLogin);

    useEffect(() => {
        console.log("Updated User:", isLogin);
    }, [isLogin]);

    if (!isLogin) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
