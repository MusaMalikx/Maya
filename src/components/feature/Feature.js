import pic from "../../assets/feature/sale-circle.webp"

const Feature = () => {
    return (
        <div className="bg-[#dc3545] text-white min-h-[610px] flex">
            <div className="container-xxl flex justify-center items-center my-auto md:justify-between">
                <div className="flex flex-col justify-center space-y-7 items-center flex-grow">
                    <h1 className="uppercase tracking-[0.8rem] text-4xl lg:text-6xl whitespace-nowrap">Final Sales</h1>
                    <p>Up to</p>
                    <h1 className="text-5xl lg:text-8xl font-bold">70%</h1>
                    <p className="font-xs">* Free Shipping on orders over $70</p>
                    <a href="/category-2" role="button" tabIndex="0" className="btn btn-outline-light uppercase rounded-none tracking-[0.2rem] p-2 text-[13px]">shop now</a>
                </div>
                <div className="hidden md:block">
                    <img src={pic} width={523} height={600} alt="pic" />
                </div>
            </div>
        </div>
    )
}

export default Feature