import axios from "axios";
import { BACKEND_URL } from "./BACKEND_URL";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = ()=>{
    const [isLoading,setIsLoading] = useState(false);
    const [error,seterror] = useState();
    const navigate = useNavigate();
    const login = async(formData)=>{
        try{
            setIsLoading(true);
            const data = await axios.post(BACKEND_URL+"/signin",formData,{withCredentials:true});
            console.log(data);
            navigate("/");
            setIsLoading(false);
            return;
        }catch(error){
            setIsLoading(false);
            seterror(error.response.data.error);
            return;
        }
    }
    return {login,isLoading,error}
}

export default useLogin;