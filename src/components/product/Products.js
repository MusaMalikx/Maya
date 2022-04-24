import CategoryItem from "./CategoryItem";
import CategoryList from "./ProductsCategoryList";
import JL from "./JacketsList";
import TBL from "./TopBlousesList";
import J from "./JeansList";
import SL from "./SweatersList";
import S from "./ShirtsList";
import ProductItem from "./ProductItem";
import { MdArrowLeft, MdArrowRight } from "react-icons/md"
import { RiSkipForwardMiniFill, RiSkipBackMiniFill } from "react-icons/ri"
// import RecentSearches from "../search/RecentSearches"

const Product = () => {
  return (
    <div className="container-xxl">
      <h1 className="uppercase tracking-[0.8rem] pt-20 text-center text-4xl lg:text-6xl whitespace-nowrap">
        Products
      </h1>
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
      <div className="py-20 space-y-5">
        {CategoryList.map((l, i) => (
          <CategoryItem key={i} name={l.name} index={i}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
              {l.name == "Jackets" &&
                JL.map((jl, k) => <ProductItem key={k} items={jl} />)}
              {l.name == "Top & Blouses" &&
                TBL.map((tbl, k) => <ProductItem key={k} items={tbl} />)}
              {l.name == "Jeans" &&
                J.map((j, k) => <ProductItem key={k} items={j} />)}
              {l.name == "Sweaters" &&
                SL.map((sl, k) => <ProductItem key={k} items={sl} />)}
              {l.name == "Shirts" &&
                S.map((s, k) => <ProductItem key={k} items={s} />)}
            </div>
          </CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default Product;
