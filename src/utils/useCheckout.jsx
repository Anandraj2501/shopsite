import axios from "axios";
import { BACKEND_URL } from "./BACKEND_URL";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const useCheckout = () => {
    const [loading, setLoading] = useState(false);
    const {user} = useContext(AuthContext);

    const handleCheckOut = async (event,total, cartId) => {
        setLoading(true);
        try {
            const response = await axios.post(BACKEND_URL+"/checkOut", { total, cartId }, {
                headers:{
                    Authorization: `bearer ${user.token}`
                }
            });
            console.log(response);
            const order_id = response.data.order.id;

            var options = {
                key: "rzp_test_dxWr7puwaxDajl", // Enter the Key ID generated from the Dashboard
                amount: total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "DevShop",
                description: "Test Transaction",
                order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                callback_url: BACKEND_URL+"/paymentverification",
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#3399cc"
                }
            };

            var rzp1 = new window.Razorpay(options);
            rzp1.open();
            
        } catch (error) {
            console.error("Checkout error:", error);
        } finally {
            setLoading(false);
        }
    };

    return { handleCheckOut, loading };
};

export default useCheckout; 