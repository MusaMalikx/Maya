import React from 'react'
import TransactionRow from "./TransactionRow";
import TransRowSm from "./TransRowSm";
import styles from "./admin.module.css"
const TransactionTable=(props)=>{
    return(
        <div className={`${styles.revenue} mt-4 mb-10 p-3`}>
            <div className='d-none d-md-block'>
            <div className={`text-muted text-lg pl-2 mb-2 `}>Latest Transactions</div>
            <div className="table table-responsive ">
                <table className="table table-responsive-md table-borderless table-hover mb-0 pb-0">
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
            <div className='d-block d-md-none'>
                <div className="table table-responsive ">
                    <table className="table table-responsive-md table-borderless table-hover mb-0 pb-0">
                        <thead className="bg-[#f8f9fa] text-dark">
                        <tr>

                            <th className="py-4 text-sm uppercase tracking-widest text-center">Latest Transaction</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.trans && props.trans.map((item, i) => {

                                return (<TransRowSm trans={item} key={i}/>)
                            }
                        )
                        }

                        </tbody>
                    </table>
            </div>
                </div>
        </div>
    )
}
export default TransactionTable