import React from 'react';
import ProductTable from "../../components/productList/ProductTable";
import img1 from "../../assets/orderDetails/product1.jpg"
import img2 from "../../assets/orderDetails/product2.jpg"
import img3 from "../../assets/orderDetails/product3.jpg"
import { Link } from "react-router-dom";
const ProductsList=()=>{
    const mystyle={
        textTransform: "uppercase",
        letterSpacing: ".3em",
        lineHeight: "1.5",
        padding: ".7rem .75rem",
        fontSize: ".6875rem",
        borderRadius: "0"
    }
    const products=[
        {
            id:"123",
            name:"BLACK TEE",
            image:img1,
            stock:"123",
            price:"$120.99"
        },
        {
            id:"432",
            name:"WHITE TEE",
            image:img2,
            stock:"60",
            price:"$100"
        },
        {
            id:"111",
            name:"JACKET",
            image:img1,
            stock:"89",
            price:"$90"
        },
        {
            id:"124",
            name:"SWEATER",
            image:img3,
            stock:"77",
            price:"$150"
        }
    ]
    return(
        <div className={`container`}>
            <h1 className="uppercase tracking-[0.8rem] py-10 text-center text-4xl lg:text-6xl whitespace-nowrap">PRODUCTS</h1>
            <div className={`flex justify-end pb-4`}>
                <Link to={'/admin/AddProduct'} >
                <button className={`btn btn-dark `} style={mystyle}>Add New</button>
                </Link>
            </div>
         <ProductTable products={products}/>
        </div>
    )
}
export default ProductsList