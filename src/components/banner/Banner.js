
// import Image from "next/image";
import pic1 from "../../assets/banner/circle-slider-1.webp"
import pic2 from "../../assets/banner/circle-slider-2.webp"
import pic3 from "../../assets/banner/circle-slider-3.webp"
// Import Swiper styles
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
// import 'swiper/swiper-bundle.css';
// import './styles.css';
import "swiper/css/bundle";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export default function App() {

    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // const [controlledSwiper, setControlledSwiper] = useState(null);


    return (
        <>
            <Swiper id="main"
                // className="mySwiper"
                // thumbs={{ swiper: thumbsSwiper }}
                // controller={{ control: controlledSwiper }}
                // tag="section"
                // wrapperTag="ul"
                navigation
                pagination={{
                    dynamicBullets: true,
                }}
                spaceBetween={0}
                slidesPerView={1}
                speed={1000}
                // onInit={(swiper) => console.log('Swiper initialized!', swiper)}
                // onSlideChange={(swiper) => {
                //     console.log('Slide index changed to: ', swiper.activeIndex);
                // }}
                // onReachEnd={() => console.log('Swiper end reached')}
                >
                <SwiperSlide>
                    <div className="flex justify-around bg-[#f8fafb]">
                        <div className="d-none d-md-block ms-3 my-auto">
                            <h5 className="subtitle letter-spacing-5 text-uppercase text-muted mb-3 tracking-[0.5rem]">Special</h5>
                            <h1 className="leading-1 text-5xl font-semibold mb-3">Automn-colour coats</h1>
                            <p className="lead mb-4">Lorem ipsum dolor sit amet.<br /> Consectetur adipisicing elit.</p>
                            <a href="/category-2" role="button" tabIndex="0" className="btn btn-outline-dark uppercase rounded-none tracking-[0.2rem] p-2 text-[13px]">Start shopping</a>
                        </div>
                        <div>
                            <img src={pic3} alt='bg-1' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-around bg-[#f8fafb]">
                        <div className="d-none d-md-block ms-3 my-auto">
                            <h5 className="subtitle letter-spacing-5 text-uppercase text-muted mb-3 tracking-[0.5rem]">Special</h5>
                            <h1 className="leading-1 text-5xl font-semibold mb-3">Automn-colour coats</h1>
                            <p className="lead mb-4">Lorem ipsum dolor sit amet.<br /> Consectetur adipisicing elit.</p>
                            <a href="/category-2" role="button" tabIndex="0" className="btn btn-outline-dark uppercase rounded-none tracking-[0.2rem] p-2 text-[13px]">Start shopping</a>
                        </div>
                        <div>
                            <img src={pic2} alt='bg-1' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-around bg-[#f8fafb]">
                        <div className="d-none d-md-block ms-3 my-auto">
                            <h5 className="subtitle letter-spacing-5 text-uppercase text-muted mb-3 tracking-[0.5rem]">Special</h5>
                            <h1 className="leading-1 text-5xl font-semibold mb-3">Automn-colour coats</h1>
                            <p className="lead mb-4">Lorem ipsum dolor sit amet.<br /> Consectetur adipisicing elit.</p>
                            <a href="/category-2" role="button" tabIndex="0" className="btn btn-outline-dark uppercase rounded-none tracking-[0.2rem] p-2 text-[13px]">Start shopping</a>
                        </div>
                        <div>
                            <img src={pic1} alt='bg-1' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}


// {/* <div className="flex justify-around bg-[#f8fafb]">
//     <div className="d-none d-md-block ms-3 my-auto">
//         <h5 className="subtitle letter-spacing-5 text-uppercase text-muted mb-3 tracking-[0.5rem]">Special</h5>
//         <h1 className="leading-1 text-5xl font-semibold mb-3">Automn-colour coats</h1>
//         <p className="lead mb-4">Lorem ipsum dolor sit amet.<br /> Consectetur adipisicing elit.</p>
//         <a href="/category-2" role="button" tabIndex="0" className="btn btn-outline-dark uppercase rounded-none tracking-[0.2rem] p-2 text-[13px]">Start shopping</a>
//     </div>
//     <div>
//         <img src={pic1} alt='bg-1' />
//     </div>
// </div> */}

// import Image from "next/image";
// import pic1 from "../../assets/banner/circle-slider-1.webp"
// import pic2 from "../../assets/banner/circle-slider-2.webp"
// import pic3 from "../../assets/banner/circle-slider-3.webp"

// const Banner = () => {
//     return (
//         // data-bs-ride="carousel"

//         <div id="carouselExampleDark" className="carousel carousel-dark slide bg-[#f8fafb]" >
//             <div className="carousel-indicators">
//                 <button type="button" className="active " data-bs-target="#carouselExampleDark" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
//                 <button type="button" className="" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                 <button type="button" className="" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
//             </div>
//             <div className="carousel-inner">
//                 <div className="lg:mx-auto">
//                     <div className="carousel-item active" data-bs-interval="10000">
//                         <div className="flex justify-around">
//                             <div className="d-none d-md-block ms-3 my-auto">
//                                 <h5 className="subtitle letter-spacing-5 text-uppercase text-muted mb-3 tracking-[0.5rem]">Special</h5>
//                                 <h1 className="leading-1 text-5xl font-semibold mb-3">Automn-colour coats</h1>
//                                 <p className="lead mb-4">Lorem ipsum dolor sit amet.<br /> Consectetur adipisicing elit.</p>
//                                 <a href="/category-2" role="button" tabIndex="0" className="btn btn-outline-dark uppercase rounded-none tracking-[0.2rem] p-2 text-[13px]">Start shopping</a>
//                             </div>
//                             <div>
//                                 <Image src={pic1} alt='bg-1' />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item" data-bs-interval="2000">
//                         <div className="flex justify-around">
//                             <div>
//                                 <Image src={pic2} alt='bg-2' />
//                             </div>
//                             <div className="d-none d-md-block ms-3 my-auto">
//                                 <h5 className="subtitle letter-spacing-5 text-uppercase text-muted mb-3 tracking-[0.5rem]">Special</h5>
//                                 <h1 className="leading-1 text-5xl font-semibold mb-3">Automn-colour coats</h1>
//                                 <p className="lead mb-4">Lorem ipsum dolor sit amet.<br /> Consectetur adipisicing elit.</p>
//                                 <a href="/category-2" role="button" tabIndex="0" className="btn btn-outline-dark uppercase rounded-none tracking-[0.2rem] p-2 text-[13px]">Start shopping</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <div className="flex justify-around">
//                             <div className="d-none d-md-block ms-3 my-auto">
//                                 <h5 className="subtitle letter-spacing-5 text-uppercase text-muted mb-3 tracking-[0.5rem]">Special</h5>
//                                 <h1 className="leading-1 text-5xl font-semibold mb-3">Automn-colour coats</h1>
//                                 <p className="lead mb-4">Lorem ipsum dolor sit amet.<br /> Consectetur adipisicing elit.</p>
//                                 <a href="/category-2" role="button" tabIndex="0" className="btn btn-outline-dark uppercase rounded-none tracking-[0.2rem] p-2 text-[13px]">Start shopping</a>
//                             </div>
//                             <div>
//                                 <Image src={pic3} alt='bg-3' />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Banner