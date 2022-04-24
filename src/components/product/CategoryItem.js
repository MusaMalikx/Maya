import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md"
import { useState } from "react"

const CategoryItem = ({ name, index, children }) => {

    const [check, setCheck] = useState(false)

    return (
        <div onClick={() => setCheck(!check)} className="">
            <p className="d-grid">
                <button className="btn bg-[#e9ecef] flex justify-between items-center btn-sm font-semibold" data-bs-toggle="collapse" data-bs-target={`#category${index}`} aria-expanded="false" aria-controls="collapseExample">
                    <p>{name}</p>
                    {
                        check ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />
                    }
                </button>
            </p>
            <div className="collapse" id={`category${index}`}>
                <div className="card card-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CategoryItem