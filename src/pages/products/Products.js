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
// import List from "../../components/product/ProductList"
import { useEffect, useState } from "react";
import axios from "axios";
// import RecentSearches from "../search/RecentSearches"

const Products = () => {

    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')))
    const [List, setList] = useState(null)
    const [pages, setPages] = useState([])
    const [val, setVal] = useState("1")

    useEffect(() => {
        const getProducts = async () => {
            await axios.get(`/products?p=${val}`)
                .then((res) => {
                    console.log(res.data)
                    setList(res.data.products)
                    setPages(res.data.pages)
                })
                .catch((err) => console.log(err.message))
        }
        getProducts();
    }, [val])

    const handleClick = (e) => {
        setVal(e.target.value)
        const products = async () => {
            await axios.get(`/products?p=${val}`).then(function (res) {
                setList(res.data.products)
                setPages(res.data.pages)
            })
        }
        products()
    }

    return (
        <Layout title="Products">
            <div className="container-xxl">
                <h1 className="uppercase tracking-[0.8rem] py-20 text-center text-4xl lg:text-6xl whitespace-nowrap">
                    Products
                </h1>
                <SearchBar setList={setList} />
                {
                    List &&
                    <div className="py-20 space-y-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                            {List.map((item, i) => (
                                <ProductItem key={i} items={item} />
                            ))}
                        </div>
                        <div className="text-center my-5">
                            <div
                                className="btn-toolbar hidden lg:flex items-center justify-center mt-10"
                                role="toolbar"
                                aria-label="Toolbar with button groups"
                            >
                                <div className="btn-group me-2 flex items-center" role="group" aria-label="First group">
                                    <MdArrowLeft className="text-2xl" />
                                    {
                                        [...Array(pages)].map((page, i) => (
                                            <button
                                                type="button"
                                                value={i + 1}
                                                className="btn bg-[#f0f0f0] border-[1px] rounded-none border-gray-300"
                                                onClick={handleClick}
                                            >
                                                {i + 1}
                                            </button>
                                        ))
                                    }
                                    <MdArrowRight className="text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Layout>
    );
};

export default Products;