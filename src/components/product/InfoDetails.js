import styles from "./ProductDetail.module.css"
// import Image from "next/image"
import { IoCart } from "react-icons/io5"
import axios from "axios"
import { useState } from "react"


const InfoDetails = ({ item }) => {

    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')))
    const [quant, setQuant] = useState("1");
    // console.log(auth)
    // console.log(item)

    // console.log(quant)

    const handleCart = async (e) => {
        e.preventDefault()
        await axios.put(`/cart/${auth.user._id}`, {
            productID: item._id,
            count: quant
        })
            .then((res) => {
                console.log(res)
                alert("Product added to Cart Successfully!")
            })
            .catch((er) => {
                console.log(er)
                alert(er.message)
            })
    }

    return (
        <div className="text-sm">
            {
                item && <>
                    <h1 className={`${styles.heading1} mb-4 text-4xl`}>{item.name}</h1>

                    <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                        <ul className="list-inline mb-2 mb-sm-0">
                            <li className="list-inline-item h4 fw-light mb-0">{item.price + ' Rs'}</li>
                            {/* <li className="list-inline-item text-muted fw-light">
                <del>$90.00</del>
            </li> */}
                        </ul>

                        <div className="flex justify-end">
                            <div className="flex ms-5">
                                {/* {
                            [Array[[5]]].map(m => (
                                <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-primary me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            ))
                        } */}
                                {
                                    item && [...Array(parseInt(item.rating))].map((rate, i) => (
                                        <svg key={rate} style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-primary me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    ))
                                }
                                {
                                    item && [...Array(5 - parseInt(item.rating))].map((rate, i) => (
                                        <svg key={rate} style={{ width: "16px", height: "14", color: "lightgray" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-gray-300 me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    ))
                                }
                                {/* <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-primary me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-primary me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-primary me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg style={{ width: "16px", height: "14", color: "lightgray" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-gray-300 me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg> */}
                            </div>
                            {/* <span className="text-muted text-uppercase text-sm mt-1">
                25 reviews
            </span> */}
                        </div>

                    </div>
                    <p className="text-muted mb-5">
                        {item.desc}
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                    </p>

                    <form>
                        <div className="row">
                            {/* Size Option */}
                            {/* <div className="col-xl-6 col-12 col-sm-6 mb-5">
                        <h6 className={`${styles.formheading} tw-bold h6`}>
                            Size
                            <span className=""> (required)</span>
                        </h6>

                        <select style={{ cursor: "pointer" }} className={`form-select`} aria-label="Default select example">
                            {
                                item.size.sm && <option selected value="sm">Small</option>
                            }
                            {
                                item.size.md && <option value="md">Medium</option>
                            }
                            {
                                item.size.lg && <option value="lg">Large</option>
                            }
                            
                        </select>
                    </div> */}

                            {/* Type Option */}
                            {/* <div className="col-xl-6 col-12 col-sm-6 mb-5">
                        <h6 className={`${styles.formheading} tw-bold`}>
                            Type
                            <span className=""> (required)</span>
                        </h6>

                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                            <label style={{ borderRadius: "0px" }} className="btn btn-outline-secondary  me-2" htmlFor="btnradio1">Hoodie</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                            <label style={{ borderRadius: "0px" }} className="btn btn-outline-secondary  me-2" htmlFor="btnradio2">Zipper</label>
                        </div>
                    </div> */}

                            <div className="col-lg-6 col-12 mb-5">
                                <h6 className={`${styles.formheading} tw-bold mb-2`}>
                                    Items
                                    <span className=""> (required)</span>
                                </h6>
                                <input style={{ maxWidth: "5rem", textAlign: "center" }} type="number" min={0} name="quantity" className="form-control" onChange={(e) => setQuant(e.target.value)} />
                            </div>
                        </div>

                        <button className={`btn btn-dark ${styles.btncart} mb-5`} onClick={handleCart}>
                            <div className="d-flex align-items-center justify-content-center">
                                <IoCart className="mx-1" />
                                Add to Cart
                            </div>
                        </button>

                        <div className="list-unstyled">
                            <strong>Category: </strong>
                            <p className="text-muted link" >{item.category}</p>
                        </div>

                    </form>
                </>
            }
        </div>
    )

}

export default InfoDetails