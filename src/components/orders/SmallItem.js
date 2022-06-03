import React from "react";

function Smallitem({ details }) {
    return (
        <>
            <div className='flex flex-col  pt-5 pb-2 ml-10 mr-10 mb-3'>
                <div className='flex flex-row mb-2'>
                    <img
                        src={details.image}
                        height={80}
                        width={80}
                        alt='productimage'
                    />
                    {/* <div className='flex flex-col justify-center ml-1'>
                        <strong className='tracking-wider'>{details.name}</strong>
                        <small className='text-muted' style={{ display: "block" }}>
                            Size : {details.size}
                        </small>
                        <small className='text-muted' style={{ display: "block" }}>
                            Color : {details.color}
                        </small>
                    </div> */}
                </div>
                <div className='flex justify-between'>
                    <p className='mt-auto mb-auto text-muted'>Price per item</p>
                    <p className='mt-auto mb-auto'>{details.price}</p>
                </div>

                <div className='flex justify-between'>
                    <p className='mt-auto mb-auto text-muted'>Quantity</p>
                    <p className='mt-auto mb-auto'>{details.quantity}</p>
                </div>

                <div className='flex justify-between'>
                    <p className='mt-auto mb-auto text-muted'>Total price</p>
                    <p className='mt-auto mb-auto'>{details.total}</p>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Smallitem;
