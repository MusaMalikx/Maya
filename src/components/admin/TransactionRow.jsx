import React from 'react'
import img1 from "../../assets/orderDetails/product1.jpg"
const TransactionRow=({trans})=>{
    return(

            <tr>
                <th className="pt-3 align-middle">{trans.trackingID}</th>
                <td className="pt-3  d-flex flex-column flex-md-row  align-items-center">
                    <img src={trans.image} style={{borderRadius:"30px"}} width="60" height="60" alt=""/>
                    <strong className=" text-muted">{trans.product}</strong>
                </td>
                <td className="pt-3 align-middle">{trans.customer}</td>
                <td className="pt-3 align-middle text-xs md:text-md">{trans.date}</td>
                <td className="pt-3 align-middle">{trans.price}</td>
                <td className="pt-3 align-middle">
                    <span className="badge bg-success">{trans.status}</span>
                </td>

            </tr>

    )
}
export default TransactionRow