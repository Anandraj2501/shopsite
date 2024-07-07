import { useContext, useState } from "react";
import { BACKEND_URL } from "./BACKEND_URL";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const useAddToCart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {user} = useContext(AuthContext);
    const [success,setSuccess] = useState();
    const addToCart = async(data) => {
        try {
            setIsLoading(true);
            console.log(user.token);
            const response = await axios.post(BACKEND_URL+"/cart",data,{
                headers:{
                    Authorization : `bearer ${user.token}`
                }
            });
            setIsLoading(false);
            console.log(response);
            setSuccess("Added to Cart")
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setSuccess("Please Login");
        }
    }
    return{addToCart,isLoading,success};

}
export default useAddToCart;