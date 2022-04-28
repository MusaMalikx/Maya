import React from 'react'
import TableRow from "./ProductRow"
import Item from "../orders/Item";

const ProductTable = (props) => {
    return (
        <>
            <div className="table table-responsive ">
                <table className="table table-responsive-md table-borderless table-hover">
                    <thead className="bg-[#f8f9fa] text-dark">
                    <tr>
                        <th className="py-4 text-sm uppercase tracking-widest">Product ID</th>
                        <th className="py-4 text-sm uppercase tracking-widest">PRODUCT</th>
                        <th className="py-4 text-sm uppercase tracking-widest">PRICE</th>
                        <th className="py-4 text-sm uppercase tracking-widest">Stock</th>
                        <th className="py-4 text-sm uppercase tracking-widest tracking-widest">ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.products && props.products.map((item, i) => {

                            return (<TableRow product={item} key={i}/>)
                        }
                    )
                    }
                    {/*<TableRow/>*/}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ProductTable