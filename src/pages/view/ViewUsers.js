import OrderTable from "../../components/orders/OrderTable";
import Layout from "../../components/layout/Article";
import UserProfile from "../../components/profile/UserProfile";
import { useEffect, useState } from "react";
import axios from "axios";
import ViewOrderDetails from "./ViewOrderDetails";

const ViewUsers = () => {

    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')))
    const [users, setUsers] = useState(null)
    // console.log(auth)

    useEffect(() => {
        const getUsers = async () => {
            await axios.get(`/user`)
                .then((res) => {
                    console.log(res)
                    setUsers(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        getUsers();

    }, [])

    return (
        <div>
            <Layout title="Orders">
                <div className="container-xxl py-20">
                    <div className="pb-4 text-center tracking-widest">
                        <h1 className="uppercase tracking-[0.8rem] pt-10 text-center text-4xl lg:text-6xl whitespace-nowrap">Your Users</h1>
                    </div>
                    <div className="text-center text-muted pb-20">
                        Your users in one place.
                    </div>

                    <div className="flex space-x-10 flex-col lg:flex-row">
                        <div className="flex-grow">
                            {
                                users && users.map((user, i) => (
                                    <div key={i} className="flex items-center mx-auto space-x-5 text-xl tracking-widest">
                                        <p>{i + 1}</p>
                                        <img src={user.picture} className="h-32 w-32 rounded-full" alt="profile" />
                                        <strong>{user.name}</strong>
                                    </div>
                                ))
                            }
                        </div>
                        {/* <div className="">
                            <UserProfile
                                name={"Julie Lescaut"}
                                address={"Ostrava, Czech Republic"}
                            />
                        </div> */}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ViewUsers