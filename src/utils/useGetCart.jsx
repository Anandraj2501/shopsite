import axios from "axios";
import { BACKEND_URL } from "./BACKEND_URL";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const useGetCart = () => {
    const [data, setData] = useState([]);
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const {user} = useContext(AuthContext);
    const getCart = async () => {
        try {
            setLoading(true);
            const data = await axios.get(BACKEND_URL + "/getcart", {
                headers:{
                    Authorization : `bearer ${user.token}`
                }
            });
            console.log(data);
            setData(data.data.cart);
            setLoading(false);
        } catch (error) {
            setError(error.response.data.error);
            setLoading(false);
        }

    }
    return { getCart,error,data,setError,loading };
}
export default useGetCart;