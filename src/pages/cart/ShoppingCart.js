import Layout from "../../components/layout/Article"
import styles from "./Cart.module.css"
import OrderDetail from "../../components/cart/OrderDetail"
import CartProduct from "../../components/cart/CartProduct"
import CartProductList from "../../components/cart/CartProductList"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Cart = () => {

    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')))
    const [carts, setCarts] = useState(null)

    useEffect(() => {
        const getCarts = async () => {
            await axios.get(`/cart/${auth.user._id}`)
                .then((res) => {
                    console.log(res)
                    setCarts(res.data)
                })
                .catch((er) => {
                    console.log(er.message)
                })
        }
        getCarts();
    }, [auth.user._id])

    return (
        <Layout title="Shopping Cart">

            <div className="container-xxl">
                <div className="py-20">

                    <div className="pb-5 text-center tracking-widest">
                        <h1 className="uppercase tracking-[0.8rem] text-center text-4xl lg:text-6xl whitespace-nowrap">Shopping Cart</h1>
                    </div>
                    <div className="text-center text-muted">
                        Id commodo velit ullamco dolore non eiusmod deserunt.
                    </div>
                </div>

                <div className="text-sm">
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
                                carts && carts.products.map((cart, i) => (
                                    <>
                                        {/* <CartProduct pic={c.pic} name={c.name} size={c.size} color={c.color} price={c.price} quantity={c.quantity} total={c.total} /> */}
                                        <CartProduct cart={cart} cart_id={carts._id} />
                                    </>
                                ))
                            }

                            {/* Cart Confirm button */}
                            <div className={`d-flex my-5 justify-content-between items-center flex-column flex-lg-row`}>
                                <Link to={'/products'}>
                                    <div className="flex items-center">
                                        <svg style={{ width: "10px", height: "10" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10 me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                        <p className={`text-muted d-flex flex-row justify-content-center hover:underline hover:underline-offset-2 hover:cursor-pointer tracking-wider`} role="button" tabIndex="0">
                                            Continue Shopping
                                        </p>
                                    </div>
                                </Link>
                                <Link to={'/cart/checkout'} state={carts}>
                                    <p className="btn btn-sm px-4 py-2 my-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest mx-auto">
                                        Proceed to Checkout
                                    </p>
                                    {/* <button className={`btn btn-dark ${styles.btnproced}`}>Proceed to Checkout</button> */}
                                </Link>
                            </div>
                        </div>

                        {/* Order */}
                        <div className="col-lg-4">
                            {
                                carts &&
                                <OrderDetail cart={carts} />
                            }
                        </div>

                    </div>

                </div>
            </div>
        </Layout>

    )
}

export default Cart