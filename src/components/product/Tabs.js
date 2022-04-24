import styles from "./ProductDetail.module.css"
// import Image from "next/image"

const Tabs = () => {
    return (
        <div>
            <div className="container mt-5 text-sm">
                <nav>
                    <div className="d-flex flex-column flex-sm-row nav nav-tabs" id="nav-tab" role="tablist">
                        <button className={`${styles.navlink} nav-link active`} id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">Description</button>
                        <button className={`${styles.navlink} nav-link`} id="nav-reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button" role="tab" aria-controls="nav-reviews" aria-selected="false">Reviews</button>

                    </div>
                </nav>

                <div className="tab-content py-4" id="nav-tabContent">
                    {/* Description Tab */}
                    <div className="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <table className="text-sm table">
                                    <tbody>
                                        <tr>
                                            <th className="text-uppercase fw-light border-0">Product #</th>
                                            <td className="text-muted border-0">451</td>
                                        </tr>
                                        <tr>
                                            <th className="text-uppercase fw-light border-0">Available Packaging</th>
                                            <td className="text-muted border-0">Packaging Available</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <table className="text-sm table">
                                    <tbody>
                                        <tr>
                                            <th className="text-uppercase fw-light border-0">Weight</th>
                                            <td className="text-muted border-0">dolor sit amet</td>
                                        </tr>
                                        <tr>
                                            <th className="text-uppercase fw-light border-0">Color</th>
                                            <td className="text-muted border-0">Light Black</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Tab */}
                    <div className="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="row mb-5">
                            <div className="col-xl-9 col-lg-10">
                                {/* Single Card */}
                                <div className={`dflex ${styles.card}`}>
                                    <div >
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="mt-2 heading5">Han Solo</h5>
                                            <span className="text-uppercase text-muted">dec 2018</span>
                                        </div>
                                        <div className="mb-4 d-flex">
                                            <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-warning me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-warning me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-warning me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-warning me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg style={{ width: "16px", height: "14" }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-warning me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                        </div>
                                        <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams,
                                            he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back,
                                            and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches
                                            into stiff sections
                                        </p>
                                    </div>
                                </div>

                                {/* Form for review */}
                                <div className="pt-5 px-3">
                                    <h4 className="mb-4 heading4">Leave a Review</h4>
                                    <form className="form mb-4">
                                        <div className="row">
                                            <div className="col-sm-6 mb-2">
                                                <div>
                                                    <label className="form-label" htmlFor="name">Your Name *</label>
                                                    <input id="name" className="form-control" type="text" name="name" placeholder="Enter Your Name" />
                                                </div>
                                            </div>

                                            <div className="col-sm-6 mb-2">
                                                <div>
                                                    <label className="form-label" htmlFor="rating">Select Rating *</label>
                                                    <select name="rating" className="focus-shadow-0 form-select" id="rating">
                                                        <option value="5">★★★★★ (5/5)</option>
                                                        <option value="4">★★★★☆ (4/5)</option>
                                                        <option value="3">★★★☆☆ (3/5)</option>
                                                        <option value="2">★★☆☆☆ (2/5)</option>
                                                        <option value="1">★☆☆☆☆ (1/5)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div>
                                                <label className="form-label" htmlFor="email">Your Email *</label>
                                                <input id="email" className="form-control" type="text" name="email" placeholder="Enter Your Email" />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div>
                                                <label className="form-label" htmlFor="review">Review text *</label>
                                                <input id="review" className="form-control" type="text" name="review" placeholder="Enter your review" />
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-outline-dark btn-form">Post review</button>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tabs