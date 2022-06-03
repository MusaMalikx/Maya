import UserDetails from "../../components/checkout/Details";
import Layout from "../../components/layout/Article";
import OrderDetail from "../../components/cart/OrderDetail";
import { useLocation } from "react-router-dom";

const OrderCheckout = () => {

    const cart = useLocation().state
    // console.log(cart)

    return (
        <div>
            <Layout title="Customer Zone">
                <div className="py-20 container-xxl">
                    <div className="pb-4 text-center tracking-widest">
                        <h1 className="uppercase tracking-[0.8rem] py-10 text-center text-4xl lg:text-6xl whitespace-nowrap">Checkout</h1>
                    </div>

                    <div className="text-center text-muted pb-20">
                        Please fill in your details.
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <UserDetails carts={cart} />
                            </div>
                            <div className="col-lg-4">
                                <OrderDetail cart={cart} />
                            </div>
                        </div>

                    </div>
                </div>
            </Layout >

        </div>

    )
}

export default OrderCheckout