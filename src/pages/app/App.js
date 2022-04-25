import { Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import Products from '../products/Products';
import Orders from '../orders/Orders';
import LoginSignUp from '../login/Login';
import Cart from "../cart/Cart";
import Profile from "../profile/Profile";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import 'bootstrap/dist/js/bootstrap.bundle';
import ProductInfo from "../products/ProductInfo";
import OrderInfo from "../orders/OrderInfo";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<ProductInfo />} />
        <Route path="/orders/:id" element={<OrderInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
