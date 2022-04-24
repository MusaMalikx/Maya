import { BsTwitter, BsFacebook, BsInstagram, BsPinterest, BsVimeo } from "react-icons/bs"
import { SiMinutemailer } from "react-icons/si"

const Information = () => {
    return (
        <div className="bg-[#D3DEDC">
            <div className="container-xxl py-20">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="space-y-3 py-3">
                        <h1 className="uppercase h5 font-semibold tracking-widest">MAYA.</h1>
                        <p className="text-xs text-muted tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        <div className="flex text-muted text-sm">
                            <BsTwitter className="me-3" />
                            <BsFacebook className="me-3" />
                            <BsInstagram className="me-3" />
                            <BsPinterest className="me-3" />
                            <BsVimeo className="me-3" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-20 md: mr-10">
                        <div className="space-y-3 py-3">
                            <h1 className="uppercase h5 font-semibold tracking-widest">shop</h1>
                            <div className="text-muted text-xs space-y-1 tracking-wider">
                                <p>For Women</p>
                                <p>For Men</p>
                                <p>Stores</p>
                                <p>Our Blog</p>
                                <p>Shop</p>
                            </div>
                        </div>
                        <div className="space-y-3 py-3">
                            <h1 className="uppercase h5 font-semibold tracking-widest">company</h1>
                            <div className="text-muted text-xs space-y-1 tracking-wider">
                                <p>Login</p>
                                <p>Register</p>
                                <p>Wishlist</p>
                                <p>Our Products</p>
                                <p>Checkouts</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3 py-3">
                        <h1 className="uppercase h5 font-semibold tracking-widest">DAILY OFFERS & DISCOUNTS</h1>
                        <p className="text-xs text-muted tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                        <form className="relative mt-3">
                            <input className="form-control rounded-none p-2 mr-20 text-sm border border-black" type="email" placeholder="Your Email Address" />
                            <button type="submit" className="absolute text-xl top-1 right-1 btn btn-sm"><SiMinutemailer /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information