import CategoryItem from "../../components/product/CategoryItem";
import CategoryList from "../../components/product/ProductsCategoryList";
import JL from "../../components/product/JacketsList";
import TBL from "../../components/product/TopBlousesList";
import J from "../../components/product/JeansList";
import SL from "../../components/product/SweatersList";
import S from "../../components/product/ShirtsList";
import ProductItem from "../../components/product/ProductItem";
import { MdArrowLeft, MdArrowRight } from "react-icons/md"
import { RiSkipForwardMiniFill, RiSkipBackMiniFill } from "react-icons/ri"
import Layout from '../../components/layout/Article'
import SearchBar from "../../components/search/SearchBar";
import List from "../../components/product/ProductList"
// import RecentSearches from "../search/RecentSearches"

const Products = () => {
    return (
        <Layout title="Products">
            <div className="container-xxl">
                <h1 className="uppercase tracking-[0.8rem] py-20 text-center text-4xl lg:text-6xl whitespace-nowrap">
                    Products
                </h1>
                <SearchBar />
                <div className="py-20 space-y-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                        {List.map((item, i) => (
                            <ProductItem key={i} items={item} />
                        ))}
                    </div>
                    <div
                        className="btn-toolbar hidden lg:flex items-center justify-center mt-10"
                        role="toolbar"
                        aria-label="Toolbar with button groups"
                    >
                        <div className="btn-group me-2" role="group" aria-label="First group">
                            <button
                                type="button"
                                className="btn bg-[#f0f0f0] border-[1px] rounded-none border-gray-300"
                            >
                                <RiSkipBackMiniFill className="text-2xl" />
                            </button>
                            <button
                                type="button"
                                className="btn bg-[#f0f0f0] border-[1px] rounded-none border-gray-300"
                            >
                                <MdArrowLeft className="text-2xl" />
                            </button>
                            <button
                                type="button"
                                className="btn bg-[#139ff0] text-white border-[1px] rounded-none border-gray-300"
                            >
                                1
                            </button>
                            <button
                                type="button"
                                className="btn bg-[#f0f0f0] border-[1px] rounded-none border-gray-300"
                            >
                                2
                            </button>
                            <button
                                type="button"
                                className="btn bg-[#f0f0f0] border-[1px] rounded-none border-gray-300"
                            >
                                3
                            </button>
                            <button
                                type="button"
                                className="btn bg-[#f0f0f0] border-[1px] rounded-none border-gray-300"
                            >
                                4
                            </button>
                            <button
                                type="button"
                                className="btn bg-[#f0f0f0] border-[1px] rounded-none border-gray-300"
                            >
                                <MdArrowRight className="text-2xl" />
                            </button>
                            <button
                                type="button"
                                className="btn bg-[#f0f0f0] border-[1px] rounded-none border-gray-300"
                            >
                                <RiSkipForwardMiniFill className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Products;