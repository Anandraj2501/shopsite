import Navbar from "../Navbar/Navbar";
import Products from "./Products";
import Filters from "./Filters";
const AllProduct = () => {
    return (
        <>
        <Navbar/>
            <div className="allproducts-container">
                <Products />
                <Filters/>
            </div>
        </>
    )
}

export default AllProduct;