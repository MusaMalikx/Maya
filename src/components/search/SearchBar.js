import { BiSearch } from "react-icons/bi"

const SearchBar = () => {
    return (
        <div className="container-xxl">
            <div className="flex flex-col lg:flex-row bg-white p-1 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)]">
                <div className="relative flex-grow">
                    <BiSearch className="absolute text-[#cccccc] text-2xl ms-2 mt-[15px]" />
                    <input class="form-control me-2 pl-10 py-3 lg:border-none rounded-none" type="search" placeholder="Search Keyword" aria-label="Search" />
                </div>
                <button className="btn btn-dark uppercase tracking-[.3em] rounded-none text-[.6875rem]" data-bs-dismiss="modal" aria-label="Close">Search</button>
            </div>
        </div>
    )
}

export default SearchBar