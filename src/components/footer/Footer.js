import DeliveryProcess from "./DeliveryProcess"
import Information from "./Information"

const Footer = () => {
    return (
        <div>
            <DeliveryProcess />
            <Information />
            <div className="bg-[#343a40] text-center text-white py-7">
                <div className="container-xxl text-xs text-center tracking-widest">
                    <p>© 2022, Your company. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer