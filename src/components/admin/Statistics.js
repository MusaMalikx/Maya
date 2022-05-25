import React from 'react'
import { FcContacts } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./admin.module.css"
import StatisticItem from './StatisticItem';

const StatsBlock = ({ stats }) => {
    return (
        <div className={`row`}>
            <StatisticItem title={'Users'} stats={stats[0]} view={'See all users'}>
                <FcContacts size={30} />
            </StatisticItem>
            <StatisticItem title={'Orders'} stats={stats[1]} view={'Veiw all orders'}>
                <BsFillCartFill size={28} style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                    borderRadius: "5px"
                }} />
            </StatisticItem>
            <StatisticItem title={'Earnings'} stats={stats[2]} view={'View net earnings'}>
                <RiMoneyDollarCircleFill size={30} style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green", borderRadius: "5px" }} />
            </StatisticItem>

            <StatisticItem title={'Balance'} stats={stats[3]} view={'See details'} >
                <MdAccountBalanceWallet size={30} style={{
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                    color: "purple",
                    borderRadius: "5px"
                }} />
            </StatisticItem>
        </div>
    )
}
export default StatsBlock