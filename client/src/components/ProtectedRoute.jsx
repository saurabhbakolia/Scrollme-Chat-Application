import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    const { user } = useAuth();
    console.log("user", user);
    return user ? element : <Navigate to="/" />;
}

export default ProtectedRoute