import Layout from "../../components/layout/Article";
import CheckoutReview from "../../components/checkout/Review";
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from "react-router-dom";

const CheckoutConfirmed = () => {
    return (
        <div>
            <Layout title="Customer Zone">
                <div className="py-10 container-xxl text-center">
                    <div className="pb-16 text-center tracking-widest">
                        <h1 className="uppercase tracking-[0.8rem] py-10 text-center text-4xl lg:text-6xl whitespace-nowrap">Order Confirmed</h1>
                    </div>

                    <div className="text-center flex justify-center text-8xl mb-5">
                        <BsCheck2Circle className="text-green-700" />
                    </div>

                    <div className="text-center text-2xl pb-6">
                        <strong>Thank you. Your order is confirmed.</strong>
                    </div>

                    <div className="text-center text-muted pb-10">
                        Your order hasn't shipped yet but we will send you ane email when it does.
                    </div>

                    <Link to={'/orders'}>
                        <button className="btn btn-sm px-4 py-2 my-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest mx-auto">
                            View or Manage Your Orders
                        </button>
                    </Link>

                    <div className="py-20">
                        <CheckoutReview />
                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default CheckoutConfirmed