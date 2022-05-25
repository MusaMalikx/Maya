import React from "react";
import ProductInfo from "../../components/AddProduct/ProductInfo";
import Layout from "../../components/layout/Article";
const NewProduct = () => {
    return (
        <Layout title="AddProduct">
            <div className="container-xxl">
                <div className="pb-5 text-center tracking-widest">
                    <h1 className="uppercase tracking-[0.8rem] py-10 text-center text-4xl lg:text-6xl whitespace-nowrap">Add Product</h1>
                </div>
                <ProductInfo />
            </div>
        </Layout>
    )

}

export default NewProduct