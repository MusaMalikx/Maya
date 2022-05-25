import { Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import Products from '../products/Products';
import Orders from '../orders/OrdersBag';
import LoginSignUp from '../register/Register';
import Cart from "../cart/ShoppingCart";
import Profile from "../profile/Profile";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import 'bootstrap/dist/js/bootstrap.bundle';
import ProductInfo from "../products/ProductInfo";
import OrderInfo from "../orders/OrderInfo";
import AdminPanel from "../admin/AdminPanel";
import NewProduct from "../AddProduct/AddProduct";
import ProductList from "../admin/products";
import CheckoutConfirmed from "../checkout/CheckoutConfirmed";
import OrderCheckout from "../checkout/OrderCheckout";
import ScrollToTop from "../../utils/ScrollToTop";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navbar />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/login" element={<LoginSignUp />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/cart/checkout" element={<OrderCheckout />} />
                    <Route path="/cart/checkout/confirmed" element={<CheckoutConfirmed />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/products/:id" element={<ProductInfo />} />
                    <Route path="/orders/:id" element={<OrderInfo />} />
                    <Route path="/admin/addproduct" element={<NewProduct />} />
                    <Route path="/admin/products" element={<ProductList />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
