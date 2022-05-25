import React from 'react'
import styles from "./admin.module.css"
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {percentage} from "tailwindcss/lib/util/dataTypes";

const RevenueBlock = ({revenue}) => {
    return (

        <div className={`${styles.revenue} d-flex flex-column px-1 pb-10 px-2 my-3`}>
            <div className={` my-2 text-muted`}>Total Revenue</div>
            <div className={` d-flex flex-column align-items-center mb-2`}>
                <div className={`my-2 relative`} style={{height: "100px", width: "100px"}}>
                    <CircularProgressbar styles={buildStyles({
                        textColor: "black",
                        pathColor: "#3e98c7",
                        trailColor: "#d6d6d6"

                    })} strokeWidth={5} value={revenue.percentage}/>
                    <span className='absolute top-10 left-9'>{`${revenue.percentage} %`}</span>
                </div>
                <div className={`my-2 text-muted`}>Total Sales Made Today</div>
                <div className={`my-2 text-4xl`}>$ {revenue.total_revenue}</div>
                <small className={`text-muted my-2 text-center`}>Previous transactions processing. Last payments may not
                    be included.</small>

            </div>


            <div className={` d-flex flex-row flex-lg-column  justify-content-around`}>
                <div className={` d-flex flex-lg-row flex-column  justify-content-lg-between  align-items-center`}>
                    <p className={`text-muted`} >Target</p>
                    <div className={'d-flex items-center'}>
                        <IoIosArrowDown style={{color:"red"}}/>
                        <p style={{color: "red"}}>${revenue.target}</p>
                    </div>
                </div>
                <div className={`  d-flex flex-lg-row flex-column justify-content-between  align-items-center`}>
                    <p className={`text-muted`} >Last Week</p>
                    <div className={'d-flex items-center'}>
                        <IoIosArrowDown style={{color:"red"}}/>
                        <p style={{color: "red"}}>${revenue.week}</p>
                    </div>

                </div>
                <div className={`  d-flex flex-lg-row flex-column justify-content-between  align-items-center`}>
                    <p className={`text-muted`} >Last Month</p>
                    <div className={'d-flex items-center'}>
                        <IoIosArrowUp style={{color:"#008000"}}/>
                        <p style={{color: "green"}}>${revenue.month}</p>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default RevenueBlock