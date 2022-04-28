import React from 'react'
import { FcContacts } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./admin.module.css"

const StatsBlock=({stats})=>{
    return(
        <div className={`row`}>

            <div className={`col-12 col-md-6 col-lg-3 my-2`}>
                <div className={`${styles.widget} d-flex flex-column mr-1 py-4 px-1 `} >
                    <div className={`d-flex justify-content-between pb-3`}>
                        <strong className={`text-muted`}>Users</strong>
                        <div className={`d-flex`}>

                            {
                                stats[0].profit ?
                                    <IoIosArrowUp style={{color:"#008000"}}/>
                                    :
                                    <IoIosArrowDown style={{color:"red"}}/>
                            }
                            {
                                stats[0].profit ?
                                <p style={{color:"#008000"}}>{stats[0].percentage} %</p>
                                :
                                    <p style={{color:"red"}}>{stats[0].percentage} %</p>
                            }

                        </div>

                    </div>
                    <div className={`d-flex justify-content-between pb-3`}>
                        <b className={`text-muted text-xl`}>{stats[0].count}</b>

                    </div>
                    <div className={`d-flex justify-content-between pb-2`}>
                        <a className={`text-muted`} href="/">See all users</a>
                        <FcContacts size={30}  />
                    </div>
                </div>
            </div>


            <div className={`col-12 col-md-6 col-lg-3  my-2`}>
                <div className={`${styles.widget} d-flex flex-column mr-1 py-4 px-1 `}>
                    <div className={`d-flex justify-content-between pb-3`}>
                        <strong className={`text-muted`}>Orders</strong>
                        <div className={`d-flex`}>
                            {
                                stats[1].profit ?
                                    <IoIosArrowUp style={{color:"#008000"}}/>
                                    :
                                    <IoIosArrowDown style={{color:"red"}}/>
                            }
                            {
                                stats[1].profit ?
                                    <p style={{color:"#008000"}}>{stats[1].percentage} %</p>
                                    :
                                    <p style={{color:"red"}}>{stats[1].percentage} %</p>
                            }
                        </div>

                    </div>
                    <div className={`d-flex justify-content-between pb-3`}>
                        <b className={`text-muted text-xl`}>{stats[1].count}</b>

                    </div>
                    <div className={`d-flex justify-content-between pb-2`}>
                        <a className={`text-muted`} href="/">View all orders</a>
                        <BsFillCartFill size={30} style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                            borderRadius: "5px"
                        }}/>
                    </div>
                </div>
            </div>


           <div className={`col-12 col-md-6 col-lg-3 my-2`}>
               <div className={`${styles.widget} d-flex flex-column mr-1 py-4 px-1 `}>
                   <div className={`d-flex justify-content-between pb-3`}>
                       <strong className={`text-muted`}>Earnings</strong>
                       <div className={`d-flex`}>
                           {
                               stats[2].profit ?
                                   <IoIosArrowUp style={{color:"#008000"}}/>
                                   :
                                   <IoIosArrowDown style={{color:"red"}}/>
                           }
                           {
                               stats[2].profit ?
                                   <p style={{color:"#008000"}}>{stats[2].percentage} %</p>
                                   :
                                   <p style={{color:"red"}}>{stats[2].percentage} %</p>
                           }
                       </div>

                   </div>
                   <div className={`d-flex justify-content-between pb-3`}>
                       <b className={`text-muted text-xl`}>${stats[2].count}</b>

                   </div>
                   <div className={`d-flex justify-content-between pb-2`}>
                       <a className={`text-muted`} href="/">View net earnings</a>
                      <RiMoneyDollarCircleFill size={30} style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" ,borderRadius: "5px"}}/>
                   </div>
               </div>

           </div>
            <div className={`col-12 col-md-6 col-lg-3 my-2`}>
                <div className={`${styles.widget} d-flex flex-column  py-4 px-1 `}>
                    <div className={`d-flex justify-content-between pb-3`}>
                        <strong className={`text-muted`}>Balance</strong>
                        <div className={`d-flex`}>
                            {
                                stats[3].profit ?
                                    <IoIosArrowUp style={{color:"#008000"}}/>
                                    :
                                    <IoIosArrowDown style={{color:"red"}}/>
                            }
                            {
                                stats[3].profit ?
                                    <p style={{color:"#008000"}}>{stats[3].percentage} %</p>
                                    :
                                    <p style={{color:"red"}}>{stats[3].percentage} %</p>
                            }
                        </div>

                    </div>
                    <div className={`d-flex justify-content-between pb-3`}>
                        <b className={`text-muted text-xl`}>${stats[3].count}</b>

                    </div>
                    <div className={`d-flex justify-content-between pb-2`}>
                        <a className={`text-muted`} href="/">See details</a>
                       <MdAccountBalanceWallet size={30} style={{
                           backgroundColor: "rgba(128, 0, 128, 0.2)",
                           color: "purple",
                           borderRadius: "5px"
                       }}/>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default StatsBlock