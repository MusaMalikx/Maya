import React, { useEffect, useState } from 'react'
import TableRow from "./ProductRow"
import Item from "../orders/Item";
import axios from 'axios';

const ProductTable = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        const getProducts = async () => {
            await axios.get('/products/')
                .then((res) => {
                    console.log(res.data)
                    setProducts(res.data)
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }

        getProducts();

    }, [])

    return (
        <>
            <div className="table table-responsive my-20">
                <table className="table table-responsive-md table-borderless table-hover">
                    <thead className="bg-[#f8f9fa] text-dark">
                        <tr>
                            <th className="py-4 text-sm uppercase tracking-widest">Name</th>
                            <th className="py-4 text-sm uppercase tracking-widest">Category</th>
                            <th className="py-4 text-sm uppercase tracking-widest">Price</th>
                            <th className="py-4 text-sm uppercase tracking-widest">Stock</th>
                            <th className="py-4 text-sm uppercase tracking-widest">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((item, i) => {

                            return (<TableRow product={item} key={i} />)
                        })
                        }
                        {/*<TableRow/>*/}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ProductTable