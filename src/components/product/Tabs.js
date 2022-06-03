import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./ProductDetail.module.css"
import { MdArrowLeft, MdArrowRight } from "react-icons/md"

// import Image from "next/image"

const Tabs = ({ item }) => {

    const [reviews, setReviews] = useState(null)
    const [name, setName] = useState("")
    const [rating, setRating] = useState(5)
    const [comment, setComment] = useState("")
    const [pages, setPages] = useState([])
    const [val, setVal] = useState("1")

    // console.log(name, rating, comment);

    useEffect(() => {
        const getReviews = async () => {
            await axios.get(`/reviews/product/${item._id}?p=${val}`)
                .then((res) => {
                    // console.log(res)
                    setReviews(res.data.reviews)
                    setPages(res.data.pages)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        getReviews();
    }, [item._id, val])

    const handleReview = async (e) => {
        e.preventDefault()
        if (name && rating && comment) {

            await axios.post('/reviews', {
                name: name,
                rating: rating,
                comment: comment,
                PID: item._id
            }).then((res) => {
                console.log(res)
                alert("Review Saved!")
            })
                .catch((err) => {
                    console.log(err)
                    alert(err.message)
                })
        }
        else {
            alert("Kindly fill all the inputs!")
        }
    }

    const handleClick = (e) => {
        setVal(e.target.value)
        const reviews = async () => {
            await axios.get(`/reviews/product/${item._id}?p=${val}`).then(function (res) {
                setReviews(res.data.reviews)
            })
        }
        reviews()
    }

    return (
        <div className="container-xxl ">
            <div className="mt-5 text-sm">
                <nav>
                    <div className="d-flex flex-column flex-sm-row nav nav-tabs" id="nav-tab" role="tablist">
                        {/* <button className={`${styles.navlink} nav-link active`} id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">Description</button> */}
                        <button className={`${styles.navlink} nav-link active`} id="nav-reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button" role="tab" aria-controls="nav-reviews" aria-selected="false">Reviews</button>

                    </div>
                </nav>

                <div className="tab-content py-4" id="nav-tabContent">

                    {/* Reviews Tab */}
                    <div className="tab-pane fade show active" id="nav-reviews" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="row mb-5">
                            {
                                reviews &&
                                <div className="col-xl-9 col-lg-10 mx-auto">
                                    {/* Single Card */}
                                    {
                                        reviews.map((review, i) => (
                                            <div className={` ${styles.card}`}>
                                                <div >
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h5 className="mt-2 heading5">{review.name}</h5>
                                                        <span className="text-uppercase text-muted">{review.createdAt.substring(0, 10)}</span>
                                                    </div>
                                                    <div className="mb-4 d-flex mt-4">
                                                        {
                                                            [...Array(parseInt(review.rating))].map((rate, i) => (
                                                                <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-warning me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                            ))
                                                        }
                                                        {/* <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-warning me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                        <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-warning me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                        <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-warning me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                        <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-warning me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                        <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-warning me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg> */}
                                                    </div>
                                                    <p className="text-muted">
                                                        {review.comment}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    }

                                    <div className="text-center my-5">
                                        <div
                                            className="btn-toolbar hidden lg:flex items-center justify-center mt-10"
                                            role="toolbar"
                                            aria-label="Toolbar with button groups"
                                        >
                                            <div className="btn-group me-2 flex items-center" role="group" aria-label="First group">
                                                <MdArrowLeft className="text-2xl" />
                                                {
                                                    [...Array(pages)].map((page, i) => (
                                                        <button
                                                            type="button"
                                                            value={i + 1}
                                                            className="btn bg-[#f0f0f0] border-[1px] rounded-none border-gray-300"
                                                            onClick={handleClick}
                                                        >
                                                            {i + 1}
                                                        </button>
                                                    ))
                                                }
                                                <MdArrowRight className="text-2xl" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Form for review */}
                                    <div className="pt-5 px-3">
                                        <h4 className="mb-4 heading4">Leave a Review</h4>
                                        <form className="form mb-4" onSubmit={handleReview}>
                                            <div className="row">
                                                <div className="col-sm-6 mb-2">
                                                    <div>
                                                        <label className="form-label" htmlFor="name">Your Name *</label>
                                                        <input id="name" className="form-control" type="text" name="name" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 mb-2">
                                                    <div>
                                                        <label className="form-label" htmlFor="rating">Select Rating *</label>
                                                        <select name="rating" className="focus-shadow-0 form-select" id="rating" onChange={(e) => setRating(e.target.value)}>
                                                            <option value="5">★★★★★ (5/5)</option>
                                                            <option value="4">★★★★☆ (4/5)</option>
                                                            <option value="3">★★★☆☆ (3/5)</option>
                                                            <option value="2">★★☆☆☆ (2/5)</option>
                                                            <option value="1">★☆☆☆☆ (1/5)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="mb-4">
                                                <div>
                                                    <label className="form-label" htmlFor="email">Your Email *</label>
                                                    <input id="email" className="form-control" type="text" name="email" placeholder="Enter Your Email" />
                                                </div>
                                            </div> */}
                                            <div className="mb-4">
                                                <div>
                                                    <label className="form-label" htmlFor="review">Review text *</label>
                                                    <input id="review" className="form-control" type="text" name="review" placeholder="Enter your review" onChange={(e) => setComment(e.target.value)} />
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-outline-dark btn-form">Post review</button>
                                        </form>

                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tabs