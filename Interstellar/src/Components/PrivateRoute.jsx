import { useContext } from "react";
import { ContextDataProvider } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    
    let isAuth = localStorage.getItem('token');
    return isAuth ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoute;
