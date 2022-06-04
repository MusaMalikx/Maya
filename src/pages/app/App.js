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
import FileChecker from "../file/File";
import ViewProducts from "../view/ViewProducts";
import ViewOrders from "../view/ViewOrders";
import ViewOrderDetailsItem from "../view/ViewOrderDetailsItem";
import ViewUsers from "../view/ViewUsers";
import ResetPassword from "../reset/ResetPassword";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navbar />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/admin/view/products" element={<ViewProducts />} />
                    <Route path="/admin/view/orders" element={<ViewOrders />} />
                    <Route path="/admin/view/users" element={<ViewUsers />} />
                    <Route path="/admin/view/products/:id" element={<ProductInfo />} />
                    <Route path="/admin/view/orders/:id" element={<ViewOrderDetailsItem />} />
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
                    <Route path="/filing" element={<FileChecker />} />
                    <Route path="/resetpass/:id" element={<ResetPassword />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
