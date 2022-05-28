import React, { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import noimage from "../../assets/products/no-image-icon-0.jpg"

const ProductInfo = () => {
    const [file, setFile] = useState("");

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [sm, setSm] = useState(false)
    const [md, setMd] = useState(false)
    const [lg, setLg] = useState(false)

    console.log(name,price,stock,category,description,sm,md,lg);

    const style_ob = {

        textTransform: "uppercase",
        letterSpacing: ".3em",
        lineHeight: "1.5",
        padding: ".7rem .75rem",
        fontSize: ".6875rem",
        borderRadius: "0"

    }
    return (

        <div className={`mx-5`}>
            <strong className={`bg-[#f8f9fa] w-full block  p-3 mt-4 tracking-widest`}>Product Details</strong>
            <form>
                <div className={`row`}>
                    <div className="col-12 col-lg-3 col-md-4 mt-4">
                        <div className={`row`}>
                            <div className={` d-flex flex-column`}>
                                <div className="col d-flex justify-content-center ">

                                    <img src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : noimage
                                    } width="200" height="200" className="img-thumbnail" alt="..." />
                                </div>
                                <div className="col text-center mt-2">
                                    <form>
                                        <div className="formInput">
                                            <label htmlFor="file">
                                                Product Image: <DriveFolderUploadOutlinedIcon style={{ cursor: "pointer" }} />
                                            </label>
                                            <input
                                                type="file"
                                                id="file"
                                                name="product"
                                                onChange={(e) => setFile(e.target.files[0])}
                                                style={{ display: "none" }}
                                            />
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-9 col-md-8">
                        <div className={`row mt-4`}>
                            <div className="col-12 col-lg-6 mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" placeholder="Modern Jacket" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="col-12 col-lg-6 mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <input type="text" className="form-control" placeholder="Jackets and tops"
                                    id="category"  onChange={(e) => setCategory(e.target.value)}  />
                            </div>

                            <div className="col-12 col-lg-6 mb-3">
                                <label htmlFor="stock" className="form-label">Stock</label>
                                <input type="number" placeholder="Stock Available" className="form-control" min="1"
                                    step="1" id="stock" onChange={(e) => setStock(e.target.value)} />
                            </div>
                            <div className="col-12 col-lg-6 mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" placeholder="$123 " className="form-control" min="1" step="any"
                                    id="price" onChange={(e) => setPrice(e.target.value)} />
                            </div>


                            <div className="col-12 col-lg-6  py-2">
                                <label htmlFor="sizes" className="form-label tracking-widest">Available Sizes: </label>
                                <div className={`ml-2 pt-2 border-b border-grey-500`}>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                            value="option1" onChange={(e) => setSm(e.target.checked)} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Small</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                            value="option2" onChange={(e) => setMd(e.target.checked)}/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Medium</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                            value="option3" onChange={(e) => setLg(e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="inlineCheckbox3">Large</label>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="col-12 col-md-6">*/}
                            {/*    <label htmlFor="avatar" className="text-sm tracking-widest btn">Add Product Picture</label>*/}
                            {/*    <input id="avatar" className="form-control p-2 rounded-none" name="avatar"*/}
                            {/*           accept="image/png, image/jpeg" type="file" />*/}
                            {/*</div>*/}
                            <div className="col-12 col-lg-6   mt-md-1">
                                <label htmlFor="description" className="form-label tracking-widest">Description</label>
                                <input type="text" placeholder="Add Product Description" className="form-control"
                                    id="description"  onChange={(e) => setDescription(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="d-flex justify-content-center px-4 mt-4 mb-5">
                    <button className={`btn btn-dark px-4`} style={style_ob}>Save</button>
                </div>
            </form>
        </div>
    )
}
export default ProductInfo