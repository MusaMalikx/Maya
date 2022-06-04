import axios from "axios"
import { useState } from "react"
import { BiSearch } from "react-icons/bi"

const SearchBar = ({ setList }) => {

    const [val, setVal] = useState("")

    // console.log(val);
    const handleSearch = async (e) => {
        e.preventDefault();
        await axios.get(`/products/search/${val}`)
            .then((res) => {
                // console.log(res)
                setList(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container-xxl">
            <div className="flex flex-col lg:flex-row bg-white p-1 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)]">
                <div className="relative flex-grow">
                    <BiSearch className="absolute text-[#cccccc] text-2xl ms-2 mt-[15px]" />
                    <input class="form-control me-2 pl-10 py-3 lg:border-none rounded-none" onChange={(e) => setVal(e.target.value)} type="search" placeholder="Search Keyword" aria-label="Search" />
                </div>
                <button className="btn btn-dark uppercase tracking-[.3em] rounded-none text-[.6875rem]" onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar