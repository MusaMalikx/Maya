import styles from "./Checkout.module.css"
import Items from "../orders/Items"
import { BiChevronRight } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const UserDetails = ({ carts }) => {

    const [state1, setState1] = useState(true);
    const [state2, setState2] = useState(false);

    // console.log(carts)
    const navigate = useNavigate()

    const details = [
        {
            image_name: "product1",
            name: "SKULL TREE",
            size: "Large",
            color: "Green",
            price: "$65.00",
            quantity: "2",
            total: "$133.00"

        },
        {
            image_name: "product1",
            name: "BLACK TEE",
            size: "Medium",
            color: "none",
            price: "$55.00",
            quantity: "1",
            total: "$55.00"

        },
        {
            image_name: "product1",
            name: "WHITE TEE",
            size: "Meduim",
            color: "none",
            price: "$55.00",
            quantity: "1",
            total: "$55.00"

        }
    ]

    const handleOrder = async(e) => {
        e.preventDefault()
        
        setState1(true); 
        setState2(false);

        await axios.post('/order',{
            Cartid: carts._id
        })
        .then((res) => {
            console.log(res)
            navigate('/cart/checkout/confirmed')
        })
        .catch((err) => {
            console.log(err)
        })

    }

    return (
        <div>
            <nav>
                <div className="d-flex flex-column flex-sm-row nav nav-tabs" id="nav-tab" role="tablist">
                    <button className={`${styles.navlink} nav-link ${state1 && 'active'}`} id="nav-payment-tab" data-bs-toggle="tab" data-bs-target="#nav-payment" type="button" role="tab" aria-controls="nav-payment" aria-selected="false">Payment Method</button>
                    <button className={`${styles.navlink} nav-link ${state2 && 'active'}`} id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Order Review</button>
                </div>
            </nav>

            <div className="tab-content py-4" id="nav-tabContent">

                {/* Payment Tab */}
                <div className={`tab-pane fade ${state1 && 'active show'}`} id="nav-payment" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                        {/* <div class="accordion-item mb-4 accordion-flush">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button uppercase bg-[#f8f9fa] text-dark tracking-wider text-sm" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-optionOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    <strong>Credit Card</strong>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-optionOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" data-bs-parent="#accordionPanelsStayOpenExample">
                                <div class="accordion-body">
                                    <div className="lg:w-[450px] xl:w-[800px] tracking-widest">
                                        <div className="form-group">
                                            <div className="row text-sm">
                                                <div className="mb-4 col-md-6 text-muted uppercase">
                                                    <label className="form-label">Name on Card</label>
                                                    <input className="form-control" type="text" name="card_name" placeholder="Name on Card" />
                                                </div>

                                                <div className="mb-4 col-md-6 text-muted uppercase">
                                                    <label className="form-label">Card Number</label>
                                                    <input className="form-control" type="text" name="card_number" placeholder="Card Number" />
                                                </div>

                                                <div className="mb-4 col-md-4 text-muted uppercase">
                                                    <label className="form-label">Expiry Date</label>
                                                    <input className="form-control" type="text" name="card-expiry" placeholder="MM/YY"></input>
                                                </div>

                                                <div className="mb-4 col-md-4 text-muted uppercase">
                                                    <label className="form-label">cvc/cvv</label>
                                                    <input className="form-control" type="text" name="card-cvc" placeholder="123"></input>
                                                </div>

                                                <div className="mb-4 col-md-4 text-muted uppercase">
                                                    <label className="form-label">Zip</label>
                                                    <input className="form-control" type="text" name="card-zip" placeholder="123"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button collapsed uppercase bg-[#f8f9fa] text-dark tracking-wider text-sm" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-cashOnDelivery" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                    <strong>Cash on Delivery</strong>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-cashOnDelivery" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo" data-bs-parent="#accordionPanelsStayOpenExample">
                                <div class="accordion-body">
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input className="form-check-input" name="payment" checked={true} type="radio" />
                                                <label className="form-check-label ">Pay on Delivery</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 text-right">

                        <button type="submit" onClick={() => { setState1(false); setState2(true); }} className="btn btn-sm px-4 py-2 my-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest mx-auto">
                            <span>Continue to Order Review</span>
                            <BiChevronRight style={{ display: "inline" }} className="pr-1 text-xl" />
                        </button>
                    </div>
                </div>

                {/* Order Review Tab */}
                <div className={`tab-pane fade ${state2 && 'active show'}`} id="nav-review" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Items details={carts} />
                    {/* <Link to={'/cart/checkout/confirmed'}> */}
                        <div className="my-5 text-right">
                            <button onClick={handleOrder} type="submit" className="btn btn-sm px-4 py-2 my-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest mx-auto">
                                <span>Place an Order</span>
                                <BiChevronRight style={{ display: "inline" }} className="pr-1 text-xl" />
                            </button>
                        </div>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}

export default UserDetails