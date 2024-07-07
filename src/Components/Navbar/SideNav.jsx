import { IoMdClose } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { CiUser } from "react-icons/ci";
const SideNav = ({ handleHamClick, sidenav }) => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <div className={`sidenav fixed  z-10 bg-slate-600 ${sidenav ? 'w-[200px] px-[10px] ' : 'w-[0px] px-[0px] '} h-[100vh] right-0 top-0 transition-width duration-500 ease-linear sm:hidden`}>
                {sidenav && (
                    <><span className="closebtn relative top-[22px]"><IoMdClose size={20} onClick={handleHamClick} /></span>
                        <div className="links-container flex flex-col relative top-[30px]">
                            <Link to="/allproducts"><span className="links my-[8px]">Categories</span></Link>
                            <Link to="/allproducts"><span className="links my-[8px]">New Arrivals</span></Link>
                            <Link to="/allproducts"><span className="links my-[8px]">Features</span></Link>
                            <Link to="/allproducts"><span className="links my-[8px]">Collection</span></Link>
                            {
                                user ? <CiUser size={20} /> : <Link to="/login"><span className="links my-[8px]">Login</span></Link>
                            }

                            <Link to="/cart" className="cart cursor-pointer my-[8px]"><CiShoppingCart size={20} /></Link>
                        </div></>)}
            </div>
        </>
    )
}
export default SideNav;