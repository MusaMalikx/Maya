import { FaShippingFast, FaDollarSign } from "react-icons/fa"
import { RiContactsLine } from "react-icons/ri"

const DeliveryProcess = () => {
    return (
        <div className="bg-[#f8f9fa]">
            <div className="container-xxl flex flex-col justify-center items-center lg:flex-row lg:justify-between py-20">
                <div className="flex items-center py-10 lg:py-0">
                    <FaShippingFast className="text-3xl mr-3" />
                    <div>
                        <h1 className="uppercase tracking-widest font-semibold text-sm">Free shipping & return</h1>
                        <p className="text-muted text-xs">Free Shipping over $300</p>
                    </div>
                </div>
                <div className="border-l border-black h-10 hidden lg:block" />
                <div className="flex items-center py-10 lg:py-0">
                    <FaDollarSign className="text-3xl mr-3" />
                    <div>
                        <h1 className="uppercase tracking-widest font-semibold text-sm">Money Back Guarentee</h1>
                        <p className="text-muted text-xs">30 Days Money Back Guarentee</p>
                    </div>
                </div>
                <div className="border-l border-black h-10 hidden lg:block" />
                <div className="flex items-center py-10 lg:py-0">
                    <RiContactsLine className="text-3xl mr-3" />
                    <div>
                        <h1 className="uppercase tracking-widest font-semibold text-sm">020-800-456-747</h1>
                        <p className="text-muted text-xs">24/7 Available Support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryProcess