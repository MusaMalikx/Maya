import axios from "axios"
import { useState } from "react"
import styles from "../../pages/cart/Cart.module.css"
// import img from "next/img"
// import { useRouter } from "next/router"

const CartProduct = ({ cart, cart_id }) => {

    // const router = useRouter()
    // console.log(cart.id, cart_id)
    const [hide, setHidden] = useState(false)

    const handleCartRemove = async (e) => {
        e.preventDefault()

        axios.delete(`/cart/${cart_id}`, {
            data: {
                productID: cart.id
            }
        })
            .then((res) => {
                console.log(res)
                setHidden(true)
                alert('Cart Removed!')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="px-3">
                <div className="py-2">
                    <div className={`${hide ? 'hidden' : 'd-flex'} align-items-center text-start text-md-center row`}>
                        <div className="col-md-5 d-flex flex-row justify-content-between align-items-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <p>
                                    <img src={cart.image} alt="product1" width="80px" height="80px" />
                                </p>
                                <div className="text-start ms-3">
                                    <p className="text-uppercase text-dark"><strong>{cart.name}</strong></p>
                                    {/* <div className="text-muted text-sm">Size: {cart.size}</div>
                                    <div className="text-muted text-sm">Color: {cart.color}</div> */}
                                </div>
                            </div>
                            <p className={`${styles.cartremove} close mt-3 d-md-none`}>
                                <svg style={{ width: "10px", height: "10" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11 delete" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                                    <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                                </svg>
                            </p>
                        </div>

                        <div className="mt-4 mt-md-0  col-md-7 col-12">
                            <div className="align-items-center row">
                                <div className="col-md-3">
                                    <div className="row mb-2">
                                        <div className="d-md-none text-muted col-6">Price Per Item</div>
                                        <div className="text-end text-md-center col-md-12 col-6">
                                            {cart.price + ' Rs'}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row mb-2">

                                        <div className="d-md-none text-muted col-6">Quantity</div>
                                        <div className="text-end text-md-center col-md-12 col-6">
                                            {cart.quantity}
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row mb-2">
                                        <div className="d-md-none text-muted col-6">
                                            Total Price
                                        </div>
                                        <div className="text-end text-md-center col-md-12 col-6">
                                            {cart.total + ' Rs'}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-none d-md-block text-center col-md-2" onClick={handleCartRemove}>
                                    <a className={`${styles.cartremove}`} href="/">
                                        <svg style={{ width: "10px", height: "10" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11 delete" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                                            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CartProduct