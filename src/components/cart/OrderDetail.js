import styles from "../../pages/cart/Cart.module.css"

const OrderDetail = ({ cart }) => {
    return (
        <div>
            <div className="mb-5">
                <div className={`${styles.blockheader}`}>
                    <h6>Order Summary</h6>
                </div>

                <div className={`${styles.blockbody} bg-light pt-1`}>
                    <div>
                        <p style={{ fontSize: "0.787rem" }}>Shipping and additional costs are calculated based on values you have entered.</p>
                        <div className="d-flex flex-col mt-5 ">
                            <div className="d-flex flex-row justify-content-between py-3 mb-4">
                                <span>Order Subtotal</span>
                                <span>{cart.subtotal + ' Rs'}</span>
                            </div>
                            <div className="d-flex flex-row justify-content-between py-3 mb-4">
                                <span>Shipping and handling</span>
                                <span>{'500 Rs'}</span>
                            </div>
                            <div className={`d-flex flex-row justify-content-between mb-4 py-3 ${styles.sepration}`}>
                                <span>Tax</span>
                                <span>$0.00</span>
                            </div>
                            <div className="d-flex flex-row justify-content-between mb-4 py-3 fw-bold">
                                <span>Total</span>
                                <span>{String(parseInt(cart.subtotal) + 500) + ' Rs'}</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OrderDetail