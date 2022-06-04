import Layout from "../../components/layout/Article"
import StatsBlock from "../../components/admin/Statistics";
import RevenueBlock from "../../components/admin/Revenue";
import Chart from "../../components/admin/chart"
import TransactionTable from "../../components/admin/TransactionTable";
import img1 from "../../assets/orderDetails/product1.jpg"
import img2 from "../../assets/orderDetails/product2.jpg"
import img3 from "../../assets/orderDetails/product3.jpg"
import { Link, useNavigate } from "react-router-dom";
const AdminPanel = () => {
    const transactions = [
        {
            trackingID: "#1234",
            product: "BLACK TEE",
            image: img1,
            customer: "MUSA MALIK",
            date: "27-9-21",
            price: "$33",
            status: "Delivered"
        },
        {
            trackingID: "#4321",
            product: "WHITE TEE",
            image: img2,
            customer: "YAHYA KHAN",
            date: "21-4-22",
            price: "$21",
            status: "Pending"
        },
        {
            trackingID: "#4131",
            product: "RED TEE",
            image: img1,
            customer: "ABDULLAH",
            date: "2-2-21",
            price: "$67",
            status: "Pending"
        },
        {
            trackingID: "#0007",
            product: "GOLDEN TEE",
            image: img3,
            customer: "ABDULLAH NAEEM",
            date: "2-9-22",
            price: "$333",
            status: "Delivered"
        }
    ]
    const stats = [
        {
            percentage: "20",
            count: "200",
            profit: false
        }
        ,
        {
            percentage: "30",
            count: "50",
            profit: true
        }
        ,
        {
            percentage: "10",
            count: "120",
            profit: false
        }
        ,
        {
            percentage: "17",
            count: "103",
            profit: true
        }
    ]
    const data = {
        month: "12.4",
        week: "12.4",
        target: "12.4",
        total_revenue: "400",
        percentage: "70"
    }

    const monthly_data = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
    ];

    const navigate = useNavigate();

    return (
        <Layout title="Admin Panel">
            <div className="py-10 container-xxl ">
                <div className="text-center tracking-widest">
                    <h1 className="uppercase tracking-[0.8rem] py-10 text-center text-4xl lg:text-6xl whitespace-nowrap">Admin Panel</h1>
                </div>
                <Link to={'/admin/addproduct'}>
                    <button
                        className="btn btn-sm px-4 py-2 rounded-none btn-outline-dark flex items-center space-x-2 tracking-widest mx-auto mb-14"
                    >
                        <span>Add Product</span>
                    </button>
                </Link>

                <div className="flex">
                    <Link to={'/admin/view/users'}>
                        <button className="btn btn-sm px-4 py-2 rounded-sm btn-dark flex items-center space-x-2 tracking-widest mx-auto mb-14">View Users</button>
                    </Link>
                    <Link to={'/admin/view/products'}>
                        <button className="btn btn-sm px-4 py-2 rounded-sm btn-dark flex items-center space-x-2 tracking-widest mx-auto mb-14">View Products</button>
                    </Link>
                    <Link to={'/admin/view/orders'}>
                        <button className="btn btn-sm px-4 py-2 rounded-sm btn-dark flex items-center space-x-2 tracking-widest mx-auto mb-14">View Orders</button>
                    </Link>
                </div>

                <StatsBlock stats={stats} />
                {/* <div className={`row`}>
                    <div className={`col-12 col-lg-4`}>
                        <RevenueBlock revenue={data} />
                    </div>
                    <div className={`col-12 col-lg-8`}>
                        <Chart data={monthly_data} />
                    </div>
                    <div className={`col-12`}>
                        <TransactionTable trans={transactions} />
                    </div>
                </div> */}
            </div>
        </Layout>
    )
}

export default AdminPanel