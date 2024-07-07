import Navbar from "../Navbar/Navbar";
import p1 from "../../images/p1.jpg";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
const UserProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <Navbar />
            <div className="flex justify-center">
                <div className="userDetails w-1/2 mt-[20px]">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="block">Hello,</span>
                            <span>{user?.name}</span>
                        </div>

                        <span>Order details</span>
                    </div>
                    {/* <hr />
                    <div className="py-2 px-1 bg-slate-500 flex-col flex mt-[8px]">
                        <div className="message-item mb-3">
                            <span className="block font-bold">Item</span>
                            <span>Image: <img src={p1} alt="product_image" className="product-image w-[50px]" /></span>
                            <span className="block">Price:</span>
                            <span className="block">Quantity: </span>
                            <span className="block">Total:</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default UserProfile;