import React from 'react'
import TransactionRow from "./TransactionRow";
import styles from "./admin.module.css"
const TransactionTable=(props)=>{
    return(
        <div className={`${styles.revenue} mt-4 mb-10`}>
            <div className="table table-responsive ">
                <table className="table table-responsive-md table-borderless table-hover">
                    <thead className="bg-[#f8f9fa] text-dark">
                    <tr>
                        <th className="py-4 text-sm uppercase tracking-widest">Tracking ID</th>
                        <th className="py-4 text-sm uppercase tracking-widest">PRODUCT</th>
                        <th className="py-4 text-sm uppercase tracking-widest">Customer</th>
                        <th className="py-4 text-sm uppercase tracking-widest">Date</th>
                        <th className="py-4 text-sm uppercase tracking-widest">Amount</th>
                        <th className="py-4 text-sm uppercase tracking-widest ">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.trans && props.trans.map((item, i) => {

                            return (<TransactionRow trans={item} key={i}/>)
                        }
                    )
                    }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default TransactionTable