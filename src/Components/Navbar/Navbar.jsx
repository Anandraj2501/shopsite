import { CiSearch,CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import SideNav from "./SideNav";
import { useState } from "react";
import {Link} from "react-router-dom";

const Navbar = ()=>{
    const [sidenav,setSideNav] = useState(false);
    const handleHamClick = ()=>{
        setSideNav(!sidenav);
    }
    return(
        <>
        <div className="navbar flex justify-between p-[18px] shadow-md items-center top-0 sticky z-10 bg-white">
            {/* left side */}
            <div className="brand-name-container">
                <span className="brand-name">DevShop</span>
            </div>

            {/* in middle */}
            <div className="links-container hidden cursor-pointer sm:block">
                <span className="links mx-[1vw]">Categories</span>
                <span className="links mx-[1vw]">New Arrivals</span>
                <span className="links mx-[1vw]">Features</span>
                <span className="links mx-[1vw]">Collection</span>
            </div>

            {/* in right */}

            <div className="right-container items-center hidden sm:flex">
                <span className="search mx-[1vw] cursor-pointer"><CiSearch size={20}/></span>
                <Link to="/cart" className="cart mx-[1vw] cursor-pointer"><CiShoppingCart size={20}/></Link>
                <span className="button-container mx-[1vw]">
                    <button className=" bg-slate-500 px-[10px] py-[5px] rounded-md">Login</button>
                </span>
            </div>
            <div className="hamburger block sm:hidden" onClick={handleHamClick}><RxHamburgerMenu size={20} /></div>
        </div>
        

        {/* hamburger */}
        
        <SideNav handleHamClick={handleHamClick} sidenav={sidenav} />
        </>
    )
}
export default Navbar;