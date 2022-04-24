import { BsSearch, BsTelephone } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"
import { IoMdCart } from "react-icons/io"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../search/SearchBar"
// import { useRouter } from "next/router"

const Navbar = () => {

    // const router = useRouter()
    const [y, setY] = useState(null);

    useEffect(() => {
        setY(window.scrollY);

        const handleNavigation = e => {
            const window = e.currentTarget;
            setY(window.scrollY);

        };

        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, []);

    return (
        <div className="">
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
                        <li>
                            <div className="flex text-2xl space-x-7 my-3 me-3">

                                {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Launch demo modal
                                </button> */}

                                <BsSearch className="cursor-pointer hover:text-blue-700" data-bs-toggle="modal" data-bs-target="#exampleModal" />

                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <SearchBar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <BsSearch /> */}
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
                            <Link to={'/orders'}>
                                <p className="nav-link tracking-widest cursor-pointer" aria-current="page" href="/products">Orders</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/login'}>
                                <p className="nav-link tracking-widest mb-1 lg:mb-0 lg:mr-1 cursor-pointer">Login</p>
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar