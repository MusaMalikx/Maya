import { useState } from "react"
import { BsSearch } from "react-icons/bs"

const CardItem = ({ items }) => {

    const [hover, setHover] = useState(false)

    return (
        <div>
            <div className="relative w-[210px] cursor-pointer mb-2" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className="border-b-2 border-b-black flex w-[210px]" >
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

                    <img className="z-10" src={items.pic} width={206} height={310} alt="last viewed 1" />
                </div>

                {
                    hover &&
                    <div className="h-[312px] w-[210px] z-10 absolute bg-[#fffffe] top-0 bg-opacity-75 text-white flex justify-center items-center border-b-2 border-b-sky-600">
                        <button className="btn btn-dark rounded-none uppercase text-xs tracking-widest py-2 px-4 flex ">
                            <div className="flex items-center justify-center flex-grow">
                                <BsSearch className="me-2" /><span>View</span>
                            </div>
                        </button>
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

export default CardItem