import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContextDataProvider = createContext();

export function AuthContextProvider({ children }) {
    
    const navigate=useNavigate();

    const [isAuth, setAuth] = useState(false);
    const [token, setToken] = useState(null);

    function LoginUser(token) {
        setToken(token);
        setAuth(true);
        localStorage.setItem('token',token);
    }

    function LogoutUser() {
        setToken(null);
        setAuth(false);
        localStorage.clear();
        navigate('/login');
    }

    return <ContextDataProvider.Provider value={{ LoginUser, LogoutUser, isAuth, token }}>{children}</ContextDataProvider.Provider>
}


