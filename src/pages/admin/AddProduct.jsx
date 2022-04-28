import React from "react";
import ProductInfo from "../../components/AddProduct/ProductInfo";
const NewProduct = () => {
    return (
        <>

            <div className="pb-5 text-center tracking-widest">
                <h1 className="uppercase tracking-[0.8rem] py-10 text-center text-4xl lg:text-6xl whitespace-nowrap">Add Product</h1>
            </div>
            <ProductInfo/>
        </>
    )

}

export default NewProduct