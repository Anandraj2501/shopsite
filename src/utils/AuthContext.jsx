import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BACKEND_URL } from "./BACKEND_URL";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState();
    const [error, seterror] = useState();
    const navigate = useNavigate();

    const islogin = () => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            setUser(user);
        }
    }

    const login = async (formData) => {
        try {
            setIsLoading(true);
            const response = await axios.post(`${BACKEND_URL}/signin`, formData);
            const data = response.data;

            console.log(data);

            if (data.user && data.user.token) {
                setUser(data.user);
                localStorage.setItem('user',JSON.stringify(data.user));
                setIsLoading(false);
                navigate("/");
            } else {
                setIsLoading(false);
                throw new Error("Invalid response data");
            }
        } catch (error) {
            setIsLoading(false);
            seterror(error.response.data.error);
            return;
        }
    }
    useEffect(() => {
        console.log("hello")
        islogin();
    }, [])

    return (
        <AuthContext.Provider value={{ login, isLoading, error, user,islogin,seterror }}>
            {children}
        </AuthContext.Provider>
    )
}

