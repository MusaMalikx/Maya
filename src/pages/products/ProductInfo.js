import Jacket from "../../assets/productDetail/jacket.jpg"
// import styles from "../../styles/ProductDetail.module.css"
// import { IoCart } from "react-icons/io5"
// import Image from "next/image"
import InfoDetails from "../../components/product/InfoDetails"
import Tabs from "../../components/product/Tabs"
import Layout from "../../components/layout/Article"
import Suggestion from "../../components/Card/Suggestion"

const ProductInfo = () => {

    return (
        <Layout title="Details">

            <div className="text-sm py-20">

                <div className="container-xxl ">
                    <div className="row">
                        <div className="col-lg-6 p-3  col-12 order-lg-1 order-2">
                            <img src={Jacket} height={800} width={600} alt="product" />
                        </div>

                        <div className="d-flex align-items-center ps-lg-5 mb-5 col-xl-5 col-lg-6 col-12 order-lg-2 order-1">
                            <InfoDetails />
                        </div>
                    </div>
                </div>

                {/* Tabs navbar*/}
                <Tabs />

                {/* You might also Like Section*/}
                <div className="container mb-5">
                    <div className="text-center">
                        {/* <h6 className="text-uppercase">You might also like</h6> */}
                        <Suggestion />
                    </div>
                </div>


            </div>
        </Layout>
    )
}

export default ProductInfo