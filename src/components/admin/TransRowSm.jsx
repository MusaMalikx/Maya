import React from 'react'
const TransRowSm=({trans})=>{
    return(
        <>
            <tr>
                <div className='flex flex-col  '>
                    <div className='flex justify-between mb-2'>
                        <strong className='tracking-wider'>TrackingID</strong>

                        <strong  style={{ display: "block" }}>
                            {trans.trackingID}
                        </strong>
                    </div>
                    <div className='flex flex-row mb-2'>
                        <img
                            src={trans.image}
                            height={80}
                            width={80}
                            alt='product image'
                        />
                        <div className='flex flex-col justify-center ml-1'>
                            <strong className='tracking-wider'>{trans.product}</strong>

                            <small className='text-muted' style={{ display: "block" }}>
                                Price : {trans.price}
                            </small>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='mt-auto mb-auto text-muted'>Customer</p>
                        <p className='mt-auto mb-auto'>{trans.customer}</p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='mt-auto mb-auto text-muted'>Date</p>
                        <p className='mt-auto mb-auto'>{trans.date}</p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='mt-auto mb-auto text-muted'>Status</p>
                        <span className="badge bg-success">{trans.status}</span>
                    </div>
                </div>
            </tr>
        </>
    )
}

export default TransRowSm