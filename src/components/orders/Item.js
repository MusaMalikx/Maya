import React from "react";
// import Image from "next/image";
import img from "../../assets/orderDetails/product1.jpg";

function Item({details}) {
  return (
      <>
    <div className='flex justify-between pt-3 flex-grow'>
      <div className='flex flex-row '>
        <img src={details.image} height={80} width={80} alt='productimage' />
        <div className="flex flex-col justify-center ml-1">
          <strong>{details.name}</strong>
          {/* <small className='text-muted' style={{display:"block"}}>Size : {details.size}</small>
          <small className='text-muted' style={{display:"block"}}>Color : {details.color}</small> */}
        </div>
      </div>
      <p className="mt-auto mb-auto">{details.price}</p>
      <p className="mt-auto mb-auto">{details.quantity}</p>
      <p className="mt-auto mb-auto">{details.total}</p>
      
    </div>
   <hr/>
    </>
  );
}

export default Item;
