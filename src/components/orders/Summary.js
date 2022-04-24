import React from "react";

function Summary() {
  return (
    <div className='bg-[#f8f9fa] mt-5 mb-5 pl-5 pt-5 pb-5 pr-5 md:mr-20 md:w-[300px]'>
      <div className='h6 mb-4 font-black'>ORDER SUMMARY</div>
      <small>
        Shipping and additional costs are calculated based on values you have
        entered.
      </small>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <small>Order Subtotal</small>
          <small>
            $390.00
          </small>
        </div>
        <div className='flex flex-row justify-between'>
          <small>
          Shipping and handling
          </small>
          <small>$10.00</small>
        </div>
        <div className='flex flex-row justify-between'>
          <small>
           Tax
          </small>
          <small>$0.00</small>
        </div>
        <div className='flex flex-row justify-between'>
          <small>
           Total
          </small>
          <div className='font-black'>$400.00</div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
