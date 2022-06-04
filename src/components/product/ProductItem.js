import { useState } from "react"
import { BsSearch, BsFillCartPlusFill, BsViewList } from "react-icons/bs"
import { Link } from "react-router-dom"
// import { useRouter } from "next/router"

const ProductItem = ({ items }) => {

    const [hover, setHover] = useState(false)
    // console.log(items)
    // const router = useRouter()

    return (
        <div className="m-2">
            <div className="relative w-[250px] mb-2" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className="border-b-2 border-b-black flex w-[250px]" >
                    {
                        items.fresh ?
                            <div>
                                <div className="absolute top-3 -left-3 z-20 tracking-widest text-white bg-[#18a2b8] text-xs py-1 px-3 text-center uppercase">
                                    <span>Fresh</span>
                                </div>
                                <div className="bg-[#0c525d] top-[28px] -left-[0.5rem] absolute h-4 w-4 origin-center rotate-45" />
                            </div>
                            : items.sale ?
                                <div>
                                    <div className="absolute top-3 -left-3 z-20 tracking-widest text-white bg-[#3494e6] text-xs py-1 px-3 text-center uppercase">
                                        <span>Sale</span>
                                    </div>
                                    <div className="bg-[#1460a0] top-[28px] -left-[0.5rem] absolute h-4 w-4 origin-center rotate-45" />
                                </div>
                                : items.soldout && <div>
                                    <div className="absolute top-3 -left-3 z-20 tracking-widest text-white bg-[#dc3545] text-xs py-1 px-3 text-center uppercase">
                                        <span>sold out</span>
                                    </div>
                                    <div className="bg-[#921925] top-[28px] -left-[0.5rem] absolute h-4 w-4 origin-center rotate-45" />
                                </div>
                    }
                    <img className="z-10" src={items.image} width={250} height={354} alt="poster" />
                </div>
                {
                    hover &&
                    <div className="h-[377px] w-[250px] z-10 absolute bg-[#fffffe] top-0 bg-opacity-75 text-white flex justify-center items-center border-b-2 border-b-sky-600">
                        {/* <button className="btn btn-outline-dark p-2 rounded-none me-1 cursor-pointer">
                            <BsFillCartPlusFill />
                        </button> */}
                        <Link to={`/products/${items._id}`} state={{ item: items }} >
                            <button className="btn btn-dark rounded-none uppercase text-xs tracking-widest py-2 px-2 flex cursor-pointer ">
                                <div className="flex items-center justify-center flex-grow">
                                    <BsSearch className="me-2" /><span>View</span>
                                </div>
                            </button>
                        </Link>
                        {/* <button className="btn btn-outline-dark p-2 rounded-none ms-1 cursor-pointer">
                            <BsViewList />
                        </button> */}
                    </div>
                }
            </div>
            <div className="text-sm space-y-2">
                <p className="text-xs text-muted">{items.type}</p>
                <h2 className="uppercase tracking-widest font-semibold hover:underline cursor-pointer hover:underline-offset-1">{items.name}</h2>
                <p className="text-xs text-muted">{items.price}</p>
            </div>
        </div>
    )
}

export default ProductItem