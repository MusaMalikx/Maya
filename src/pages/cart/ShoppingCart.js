import Layout from "../../components/layout/Article"
import styles from "./Cart.module.css"
import OrderDetail from "../../components/cart/OrderDetail"
import CartProduct from "../../components/cart/CartProduct"
import CartProductList from "../../components/cart/CartProductList"

const Cart = () => {

    return (
        <Layout title="Shopping Cart">

            <div>
                <div className="py-20">

                    <div className="pb-5 text-center tracking-widest">
                        <h1 className="uppercase tracking-[0.8rem] text-center text-4xl lg:text-6xl whitespace-nowrap">Shopping Cart</h1>
                    </div>
                    <div className="text-center text-muted">
                        Id commodo velit ullamco dolore non eiusmod deserunt.
                    </div>
                </div>

                <div className="container-xxl text-sm">
                    <div className="row mb-5">

                        <div className="col-lg-8 ">
                            {/* Cart Headings */}
                            <div className={`${styles.cartheader} text-center `}>
                                <div className="row">
                                    <div className="col-md-5">ITEM</div>
                                    <div className="d-none d-md-block col">
                                        <div className="row">
                                            <div className="col-md-3">Price</div>
                                            <div className="col-md-4">Quantity</div>
                                            <div className="col-md-3">Total</div>
                                            <div className="col-md-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Products rows*/}
                            {
                                CartProductList.map((c, i) => (
                                    <>
                                        <CartProduct pic={c.pic} name={c.name} size={c.size} color={c.color} price={c.price} quantity={c.quantity} total={c.total} />
                                    </>
                                ))
                            }

                            {/* Cart Confirm button */}
                            <div className={`d-flex my-5 justify-content-between flex-column flex-lg-row`}>

                                <div className="flex items-center">
                                    <svg style={{ width: "10px", height: "10" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10 me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                    <p style={{ textDecoration: "none" }} className={`text-muted btn btn-link d-flex flex-row justify-content-center `} role="button" tabIndex="0">
                                        Continue Shopping
                                    </p>
                                </div>
                                <button className={`btn btn-dark ${styles.btnproced}`}>Purchase</button>

                            </div>

                        </div>

                        {/* Order */}
                        <div className="col-lg-4">
                            <OrderDetail />
                        </div>

                    </div>

                </div>
            </div>
        </Layout>

    )
}

export default Cart