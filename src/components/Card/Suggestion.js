import LastViewedItem from "./LastViewedItem";
import List from "./LastViewedList";
// import Image from "next/image";
import pic1 from "../../assets/banner/circle-slider-1.webp";
import pic2 from "../../assets/banner/circle-slider-2.webp";
import pic3 from "../../assets/banner/circle-slider-3.webp";
// Import Swiper styles
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
// import 'swiper/swiper-bundle.css';
// import './styles.css';
import "swiper/css/bundle";
import axios from "axios";
import ProductItem from "../product/ProductItem";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

// const [controlledSwiper, setControlledSwiper] = useState(null);

const Suggestion = ({ category }) => {

  const [products, setProducts] = useState(null)
  // console.log(category)

  useEffect(() => {
    const getSuggestions = async () => {
      axios.get(`/products/search/${category}`)
        .then((res) => {
          // console.log(res)
          setProducts(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getSuggestions()
  }, [])

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-xxl my-20">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h1 className="uppercase tracking-[0.1rem] text-2xl lg:text-4xl font-semibold whitespace-nowrap">
          You might also like
        </h1>
        <p className=" text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="my-20 mx-auto">
        <Swiper
          id="thumbs"
          className="ps-4 pb-5"
          spaceBetween={2}
          // slidesPerView={5}

          onSwiper={setThumbsSwiper}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            1536: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
          }}
        >
          {products && products.map((l, i) => (
            <SwiperSlide key={i}>
              <ProductItem items={l} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Suggestion;
