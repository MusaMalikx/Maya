import React from "react";
import Item from "./Item";
import SmallItem from "./SmallItem";
function Items(props) {
    return (
        <>
            <div className="flex d-none d-md-flex">
                <div className="mx-3 flex-grow">
                    <div className="p-3 mt-4 flex flex-row justify-between mb-3">

                        <div className='h6 font-black'>
                            ITEM
                        </div>
                        <div className='h6 font-black'>

                        </div>
                        <div className='h6 font-black'>
                            PRICE
                        </div>
                        <div className='h6 font-black'>
                            QUANTITY
                        </div>
                        <div className='h6 font-black'>
                            TOTAL
                        </div>
                    </div>

                    {
                        props.details && props.details.products.map((item, i) => {

                            return (<Item details={item} key={i} />)
                        })
                    }

                </div>
            </div>
            <div className='d-sm-block d-md-none'>
                <div className='p-3 bg-[#f8f9fa] mt-4 flex justify-center mb-3'>
                    <div className='h6 font-black tracking-wider'>ITEM</div>

                </div>
                {props.details &&
                    props.details.products.map((item, i) => {
                        return <SmallItem details={item} key={i} />;
                    })}
            </div>
        </>
    );
}

export default Items;
