import { BsTelephone } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"
import { IoMdCart } from "react-icons/io"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
// import { useSelector, useDispatch } from "react-redux"
// import { selectUser, setUser } from "../../features/userSlice"

const Navbar = () => {

    const [y, setY] = useState(null);
    const navigate = useNavigate()
    const [bool, setBool] = useState(true)
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')))
    // const [loading, setLoading] = useState(false)
    // const dispatch = useDispatch()
    // const bool = useSelector(selectUser)
    // console.log(bool)

    useEffect(() => {
        setY(window.scrollY);

        const handleNavigation = e => {
            const window = e.currentTarget;
            setY(window.scrollY);

        };

        // const checkUser = async () => {
        //     await axios.get('/user/check/authentication').then(function (res) {
        //         setBool(res.data.bool)
        //         console.log(res.data.bool)
        //     }).catch(function (err) {
        //         console.log(err)
        //     })
        // }

        // checkUser();
        setAuth(JSON.parse(localStorage.getItem('auth')))

        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    });

    const handleLogout = async (e) => {
        e.preventDefault();

        // await axios.get('/user/destroy/authentication').then(function (res) {
        //     console.log(res)
        // })
        // setSession(false);
        // setLoading(true)
        // setBool(false)
        // dispatch(setUser(false))
        localStorage.setItem('auth', JSON.stringify(null));
        setAuth(JSON.parse(localStorage.getItem('auth')))
        navigate('/login')

    }

    return (
        <div className={` ${y > 50 && 'mt-[4rem]'}`}>
            <div className="container-fluid hidden md:flex bg-[#e9ecef] p-2 py-3 text-sm space-x-5 text-muted tracking-widest">
                <div className=" flex items-center">
                    <BsTelephone className="me-2" />
                    020-800-456-747
                </div>
                <div className="border-l border-gray-500" />
                <div>
                    Free shipping on orders over $300
                </div>
            </div>
            <div className={`navbar navbar-expand-lg navbar-light container-fluid p-2 ${y > 50 && 'fixed-top bg-white shadow-[2px_1px_10px_4px_rgba(0,0,0,0.3)]'}`}>
                <div className="navbar-brand cursor-pointer" >
                    <Link to={'/'}>
                        <p className="uppercase tracking-[0.8rem] text-2xl font-bold">Maya.</p>
                    </Link>
                </div>
                {/* <a className="navbar-brand" href="#">Navbar</a> */}

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse lg:flex lg:justify-end" id="navbarSupportedContent">
                    <div className="navbar-nav mb-2 mb-lg-0 flex items-center">
                        {
                            auth ?
                                <>
                                    <li>
                                        <div className="flex text-2xl space-x-7 my-3 lg:mr-6">
                                            <Link to={'/profile'}>
                                                <FaRegUserCircle className="cursor-pointer" />
                                            </Link>
                                            <Link to={'/cart'}>
                                                <IoMdCart className="cursor-pointer" />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/products'}>
                                            <p className="nav-link tracking-widest cursor-pointer">Products</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`/orders`}>
                                            <p className="nav-link tracking-widest cursor-pointer" aria-current="page" href="/products">Orders</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link tracking-widest mb-1 lg:mb-0 lg:mr-1 cursor-pointer"
                                            onClick={handleLogout}
                                        >Logout</p>
                                    </li>
                                </>
                                :
                                <>

                                    <li className="nav-item">
                                        <Link to={'/login'}>
                                            <p className="nav-link tracking-widest mb-1 lg:mb-0 lg:mr-1 cursor-pointer">Login</p>
                                        </Link>
                                    </li>
                                </>
                        }
                        {/* <li className="nav-item">
                            <Link to={'/products'}>
                                <p className="nav-link tracking-widest cursor-pointer">Products</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/orders'}>
                                <p className="nav-link tracking-widest cursor-pointer" aria-current="page" href="/products">Orders</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {
                                bool ?
                                    <p className="nav-link tracking-widest mb-1 lg:mb-0 lg:mr-1 cursor-pointer"
                                        onClick={handleLogout}
                                    >Logout</p>
                                    :
                                    <Link to={'/login'}>
                                        <p className="nav-link tracking-widest mb-1 lg:mb-0 lg:mr-1 cursor-pointer">Login</p>
                                    </Link>
                            }
                        </li> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar