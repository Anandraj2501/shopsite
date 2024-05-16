import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import AllProduct from './Components/AllProduct/AllProduct';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/singleproduct" element={<SingleProduct />}/>
        <Route path="/allproducts" element={<AllProduct />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
