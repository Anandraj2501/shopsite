import { useContext, useState } from "react";
import { BACKEND_URL } from "./BACKEND_URL";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const useUpdateCart = (setData) => {
    const [isLoading, setIsLoading] = useState(false);
    const {user} = useContext(AuthContext);
    const [message, setMessage] = useState();

    const updateCart = async (id,quantity) => {
        try {
            setIsLoading(true);
            const response = await axios.put(BACKEND_URL+`/updatecart/${id}`,{quantity},{
                headers:{
                    Authorization : `bearer ${user.token}`
                }
            });
            setIsLoading(false);
            setData(response.data.cart)
        }
        catch (error) {
            setMessage("Cart Updation Failed");
            setIsLoading(false);
        }
    }
    return { updateCart, isLoading, message };
}

export default useUpdateCart;