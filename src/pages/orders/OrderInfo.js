import React from "react";
import Layout from "../../components/layout/Article";
// import styles from "../../styles/profile.module.css";
import Items from "../../components/orders/Items";
import Adresses from "../../components/orders/Adresses";
import UserProfile from "../../components/profile/UserProfile";
import Summary from "../../components/orders/Summary";
function OrderInfo() {
  const details = [
    {
      image_name: "product1",
      name: "SKULL TREE",
      size: "Large",
      color: "Green",
      price: "$65.00",
      quantity: "2",
      total: "$133.00"

    },
    {
      image_name: "product1",
      name: "BLACK TEE",
      size: "Medium",
      color: "none",
      price: "$55.00",
      quantity: "1",
      total: "$55.00"

    },
    {
      image_name: "product1",
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
        <div className='text-center'>
          {/* <div className={`${styles.heroheading} h1`}>
            CUSTOMER - ORDER DETAIL
          </div> */}
          <h1 className="uppercase tracking-[0.8rem] py-10 text-center text-4xl lg:text-6xl">CUSTOMER - ORDER DETAIL</h1>
          <p>
            Order #1735 was placed on 22/06/2013 and is currently Being
            prepared.
          </p>
          <small>
            If you have any questions, please feel free to contact us, our
            customer service center is working for you 24/7.
          </small>
        </div>
        <div className='flex flex-col lg:flex-row justify-center'>
          <div>
            <Items details={details} />
            <div className=' flex flex-col md:flex-row justify-center' >
              <Summary />
              <Adresses />
            </div>
          </div>
          <div className="mx-5">
            <UserProfile
              name={"Julie Lescaut"}
              address={"Ostrava, Czech Republic"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OrderInfo;
