import React from 'react'
import img1 from "../../assets/orderDetails/product1.jpg";
const TableRow=({product})=>{
    return (
        <>
            <tr>
                <th className="pt-3 align-middle">{product.id}</th>
                <td className="pt-3 align-middle d-flex flex-column justify-content-center">
                    <img src={product.image} style={{borderRadius:"30px"}} width="60" height="60" alt=""/>
                    <strong className=" text-muted">{product.name}</strong>
                </td>
                <td className="pt-3 align-middle">{product.price}</td>
                <td className="pt-3 align-middle">{product.stock}</td>
                <td className="pt-3 align-middle">
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-sm rounded-none"
                    >
                        View
                    </button>
                </td>
            </tr>
        </>

    )
}
export default TableRow