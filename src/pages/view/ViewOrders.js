import OrderTable from "../../components/orders/OrderTable";
import Layout from "../../components/layout/Article";
import UserProfile from "../../components/profile/UserProfile";
import { useEffect, useState } from "react";
import axios from "axios";
import ViewOrderDetails from "./ViewOrderDetails";

const ViewOrders = () => {

    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')))
    const [orders, setOrders] = useState(null)
    // console.log(auth)

    useEffect(() => {
        const getOrders = async () => {
            await axios.get(`/order`)
                .then((res) => {
                    // console.log(res)
                    setOrders(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        getOrders();

    }, [])

    return (
        <div>
            <Layout title="Orders">
                <div className="container-xxl py-20">
                    <div className="pb-4 text-center tracking-widest">
                        <h1 className="uppercase tracking-[0.8rem] pt-10 text-center text-4xl lg:text-6xl whitespace-nowrap">Your Orders</h1>
                    </div>
                    <div className="text-center text-muted pb-20">
                        Your orders in one place.
                    </div>

                    <div className="flex space-x-10 flex-col lg:flex-row">
                        <div className="flex-grow">
                            {
                                orders && <ViewOrderDetails orders={orders} />
                            }
                        </div>
                        {/* <div className="">
                            <UserProfile
                                name={"Julie Lescaut"}
                                address={"Ostrava, Czech Republic"}
                            />
                        </div> */}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ViewOrders