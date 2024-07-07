import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import AllProduct from './Components/AllProduct/AllProduct';
import Cart from './Components/Cart/Cart';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import 'react-toastify/dist/ReactToastify.css';
import Chatbot from './Components/Chatbot/Chatbot';
import { AuthContextProvider } from './utils/AuthContext';
import UserProfile from './Components/UserProfile/UserProfile';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/allproducts" element={<AllProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
        <Chatbot />
      </AuthContextProvider>
    </div>
  );
}

export default App;
