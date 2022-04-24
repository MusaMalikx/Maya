import styles from "../../pages/cart/Cart.module.css"


const CartHeading = () => {
    return (
        <div className="container-xxl my-5">

        <h1 className={`text-center  text-6xl fw-bold ${styles.heading1}`}>
            SHOPPING CART
        </h1>
        <div className="text-center text-muted">
        Id commodo velit ullamco dolore non eiusmod deserunt.
        </div>

        </div>
    )
}

export default CartHeading