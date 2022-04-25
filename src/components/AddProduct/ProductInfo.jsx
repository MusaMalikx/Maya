import React from "react";
// import React from "@types/react";
const ProductInfo = () => {
    return (

        <div className={`mx-5`}>
            <strong className={`bg-[#f8f9fa] w-full block  p-3 mt-4 tracking-widest`}>Product Details</strong>
            <form>
                <div className={`row mt-4`}>
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" placeholder="Modern Jacket" className="form-control" id="name"/>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input type="text" className="form-control" placeholder="Jackets and tops" id="category"/>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="stock" className="form-label">Stock</label>
                        <input type="number" placeholder="Stock Available" className="form-control" min="1" step="1" id="stock"/>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" placeholder="$123 " className="form-control" min="1" step="any" id="price"/>
                    </div>
                    <div className="col-12 col-md-6  py-2">
                        <label htmlFor="sizes" className="form-label tracking-widest">Available Sizes: </label>
                        <div className={`ml-2 pt-2 border-b border-grey-500`}>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                       value="option1"/>
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Small</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                       value="option2"/>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Medium</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"
                                />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Large</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="avatar" className="text-sm tracking-widest btn">Add Product Picture</label>
                        <input id="avatar" className="form-control p-2 rounded-none" name="avatar"
                               accept="image/png, image/jpeg" type="file" />
                    </div>
                    <div className="col-12  mb-3 mt-3">
                        <label htmlFor="description" className="form-label tracking-widest">Description</label>
                        <input type="text" placeholder="Add Product Description" className="form-control"  id="description"/>
                    </div>
                </div>
                <div className="d-flex justify-content-center px-4 mt-4 mb-5">
                    <button className="btn btn-dark rounded-none mx-3">Add Product</button>
                </div>
            </form>
        </div>
    )
}
export default ProductInfo