import React from 'react'
import { Link } from 'react-router-dom';
import img1 from "../../assets/orderDetails/product1.jpg";
const TableRow = ({ product }) => {

    return (
        <>
            <tr>
                <th className="pt-3 align-middle">{product.name}</th>
                <td className="pt-3 align-middle d-flex flex-column justify-content-center">
                    {/* <img src={product.category} style={{ borderRadius: "30px" }} width="60" height="60" alt="" /> */}
                    {/* <strong className=" text-muted">{product.price}</strong> */}
                    <strong className=" text-muted">{product.price}</strong>
                </td>
                <td className="pt-3 align-middle">{product.category}</td>
                <td className="pt-3 align-middle">{product.stock}</td>
                {/* <td className="pt-3 align-middle">{product.stock}</td> */}
                <td className="pt-3 align-middle">
                    <Link to={`/admin/view/products/${product._id}`} state={{ item: product }}>
                        <button
                            type="button"
                            className="btn btn-outline-dark btn-sm rounded-none"
                        >
                            View
                        </button>
                    </Link>
                </td>
            </tr>
        </>

    )
}
export default TableRow