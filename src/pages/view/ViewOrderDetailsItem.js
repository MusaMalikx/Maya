import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Article";
// import styles from "../../styles/profile.module.css";
import Items from "../../components/orders/Items";
import Adresses from "../../components/orders/Adresses";
import UserProfile from "../../components/profile/UserProfile";
import Summary from "../../components/orders/Summary";
import p1 from "../../assets/orderDetails/product1.jpg"
import p2 from "../../assets/orderDetails/product2.jpg"
import p3 from "../../assets/orderDetails/product3.jpg"
import axios from "axios";
import { useLocation } from "react-router-dom";


const ViewOrderDetailsItem = () => {

  const order = useLocation().state
//   console.log(order)

  // const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')))
  // const [orders, setOrders] = useState(null)
  // console.log(auth)

  // useEffect(() => {
  //   const getOrders = async () => {
  //     await axios.get(`/order/${auth.user._id}`)
  //       .then((res) => {
  //         console.log(res)
  //         setOrders(res.data)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }

  //   getOrders();

  // }, [])

  const details = [
    {
      image: p1,
      name: "SKULL TREE",
      size: "Large",
      color: "Green",
      price: "$65.00",
      quantity: "2",
      total: "$133.00"

    },
    {
      image: p2,
      name: "BLACK TEE",
      size: "Medium",
      color: "none",
      price: "$55.00",
      quantity: "1",
      total: "$55.00"

    },
    {
      image: p3,
      name: "WHITE TEE",
      size: "Meduim",
      color: "none",
      price: "$55.00",
      quantity: "1",
      total: "$55.00"

    }
  ]
  return (
    <Layout title="Order Details">
      <div className="container-xxl py-20">
        <div className='text-center pb-20'>
          {/* <div className={`${styles.heroheading} h1`}>
            CUSTOMER - ORDER DETAIL
          </div> */}
          <h1 className="uppercase tracking-[0.8rem] py-10 text-center text-4xl lg:text-6xl">ORDER DETAIL</h1>
          <div className="text-center text-muted">
            Order was placed on {order.createdAt.substring(0, 10)} and is currently Being
            prepared.
          </div>
          <small className="text-center text-muted text-xs">
            If you have any questions, please feel free to contact us, our
            customer service center is working for you 24/7.
          </small>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div className="flex-grow space-y-10">
            <Items details={order} />
            {/* <Summary /> */}
          </div>
          {/* <div className="mx-5">
            <UserProfile
              name={"Julie Lescaut"}
              address={"Ostrava, Czech Republic"}
            />
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default ViewOrderDetailsItem;
