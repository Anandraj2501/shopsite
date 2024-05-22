import axios from "axios";
import { BACKEND_URL } from "./BACKEND_URL";
import { useState } from "react";

const useGetCart = () => {
    const [data, setData] = useState([]);
    const [error,setError] = useState();
    const getCart = async () => {
        try {
            const data = await axios.get(BACKEND_URL + "/getcart", { withCredentials: true });
            console.log(data);
            setData(data.data.cart);
        } catch (error) {
            setError(error.response.data.error);
        }

    }
    return { getCart,error,data };
}
export default useGetCart;