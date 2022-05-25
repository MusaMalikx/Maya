import styles from "./admin.module.css"
import { FcContacts } from "react-icons/fc";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const StatisticItem = ({ stats, title, view, children }) => {
    return (
        <div className={`col-12 col-md-6 col-lg-3 my-2`}>
            <div className={`${styles.widget} d-flex flex-column mr-1 py-4 px-4 `} >
                <div className={`d-flex justify-content-between pb-3`}>
                    <strong className={`text-muted`}>{title}</strong>
                    <div className={`d-flex items-center`}>

                        {
                            stats.profit ?
                                <IoIosArrowUp style={{ color: "#008000" }} />
                                :
                                <IoIosArrowDown style={{ color: "red" }} />
                        }
                        {
                            stats.profit ?
                                <p style={{ color: "#008000" }}>{stats.percentage} %</p>
                                :
                                <p style={{ color: "red" }}>{stats.percentage} %</p>
                        }

                    </div>

                </div>
                <div className={`d-flex justify-content-between pb-3`}>
                    <b className={`text-muted text-xl`}>{stats.count}</b>

                </div>
                <div className={`d-flex justify-content-between pb-2`}>
                    <a className={`text-muted`} href="/">{view}</a>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}

export default StatisticItem