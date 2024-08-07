import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import SideNav from "./SideNav";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthContext";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
    const [sidenav, setSideNav] = useState(false);
    const { user } = useContext(AuthContext);
    const handleHamClick = () => {
        setSideNav(!sidenav);
    }
    return (
        <>
            <div className="navbar flex justify-between p-[18px] shadow-md items-center top-0 sticky z-10 bg-white">
                {/* left side */}
                <div className="brand-name-container">
                    <Link to="/" className="brand-name">DevShop</Link>
                </div>

                {/* in middle */}
                <div className="links-container hidden cursor-pointer sm:block">
                    <Link to="/allproducts"><span className="links mx-[1vw]">Categories</span></Link>
                    <Link to="/allproducts"><span className="links mx-[1vw]">New Arrivals</span></Link>
                    <Link to="/allproducts"><span className="links mx-[1vw]">Features</span></Link>
                    <Link to="/allproducts"><span className="links mx-[1vw]">Collection</span></Link>
                </div>

                {/* in right */}

                <div className="right-container items-center hidden sm:flex">
                    <span className="button-container mx-[1vw]">
                        {user ?

                            <Link to="/userprofile"><CiUser className=" cursor-pointer" size={20} /></Link>

                            :
                            <Link to="/login"><button className=" bg-slate-500 px-[10px] py-[5px] rounded-md hover:text-white">Login</button></Link>
                        }
                    </span>
                    <span className="search mx-[1vw] cursor-pointer"><CiSearch size={20} /></span>
                    <Link to="/cart" className="cart mx-[1vw] cursor-pointer"><CiShoppingCart size={20} /></Link>
                </div>
                <div className="hamburger block sm:hidden" onClick={handleHamClick}><RxHamburgerMenu size={20} /></div>
            </div>


            {/* hamburger */}

            <SideNav handleHamClick={handleHamClick} sidenav={sidenav} />
        </>
    )
}
export default Navbar;