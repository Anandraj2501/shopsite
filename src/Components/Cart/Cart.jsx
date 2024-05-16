import Navbar from "../Navbar/Navbar";
import p1 from "../../images/p1.jpg";
import { useState } from "react";

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (e) => {
       if(e.target.value<1){
        return;
       }
        setQuantity(e.target.value);
    }
    return (
        <>
            <Navbar/>
            <div className="cart px-[18px]">
                <table className="border-collapse table-auto w-full mt-[60px]">
                    <thead className="border border-gray-300 border-l-0 border-r-0">
                        <tr className="py-[10px]">
                            <td className="w-[100px] py-[10px]">Product</td>
                            <td className="w-[25px] text-center">Quantity</td>
                            <td className="w-[25px]  text-center">Price</td>
                            <td className="w-[25px]  text-center">Total</td>
                            <td className="w-[25px]  text-center">Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" border-b border-gray-300">
                            <td className="w-[100px] py-[10px]"><img src={p1} alt="product" className="w-[70px]"/></td>
                            <td className="w-[25px]  text-center"><input type="number" value={quantity} onChange={handleQuantityChange} className="ml-[10px] w-[35px] border border-slate-400 mb-[10px] p-[5px]" /></td>
                            <td className="w-[25px]  text-center">2999</td>
                            <td className="w-[25px] text-center">2999</td>
                            <td className="w-[25px] text-center"><button className="bg-slate-500 px-[10px] py-[5px] rounded-md hover:text-white  w-[80px]">Remove</button></td>
                        </tr>

                        <tr className=" border-b border-gray-300">
                            <td className="w-[100px] py-[10px]"><img src={p1} alt="product" className="w-[70px]"/></td>
                            <td className="w-[25px]  text-center"><input type="number" value={quantity} onChange={handleQuantityChange} className="ml-[10px] w-[35px] border border-slate-400 mb-[10px] p-[5px]" /></td>
                            <td className="w-[25px]  text-center">2999</td>
                            <td className="w-[25px] text-center">2999</td>
                            <td className="w-[25px] text-center"><button className="bg-slate-500 px-[10px] py-[5px] rounded-md hover:text-white  w-[80px]">Remove</button></td>
                        </tr>

                        <tr className=" border-b border-gray-300">
                            <td className="w-[100px] py-[10px]"><img src={p1} alt="product" className="w-[70px]"/></td>
                            <td className="w-[25px]  text-center"><input type="number" value={quantity} onChange={handleQuantityChange} className="ml-[10px] w-[35px] border border-slate-400 mb-[10px] p-[5px]" /></td>
                            <td className="w-[25px]  text-center">2999</td>
                            <td className="w-[25px] text-center">2999</td>
                            <td className="w-[25px] text-center"><button className="bg-slate-500 px-[10px] py-[5px] rounded-md hover:text-white  w-[80px]">Remove</button></td>
                        </tr>
                       
                        
                    </tbody>
                </table>

                <div className="coupon_total mt-[40px] sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center">
                        <input type="text" name="coupon" placeholder="Enter Coupon Code" className="border border-gray-300 pl-[10px] py-[10px]"/>
                        <button className="bg-slate-500 ml-[10px] px-[10px] py-[10px] hover:text-white  w-[100px]">Apply Code</button>
                    </div>
                    <div className="flex flex-col mt-[20px] sm:mt-[0px]">
                        <span>Cart Total :</span>
                        <span className=" text-xl font-bold">₹ 8997</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;