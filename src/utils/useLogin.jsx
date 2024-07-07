import axios from "axios";
import { BACKEND_URL } from "./BACKEND_URL";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = ()=>{
    const [isLoading,setIsLoading] = useState(false);
    const [user,setUser] = useState();
    const [error,seterror] = useState();
    const navigate = useNavigate();
    const login = async(formData)=>{
        try{
            setIsLoading(true);
            const response = await axios.post(`${BACKEND_URL}/signin`, formData, { withCredentials: true });
            const data = response.data;

            console.log(data);

            if (data.user && data.user.token) {
                setUser(data.user);
                localStorage.setItem('userToken', data.user.token);
                setIsLoading(false);
                navigate("/");
            } else {
                setIsLoading(false);
                throw new Error("Invalid response data");
            }
        }catch(error){
            setIsLoading(false);
            seterror(error.response.data.error);
            return;
        }
    }
    return {login,isLoading,error,user}
}

export default useLogin;