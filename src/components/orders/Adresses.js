import React from "react";

function Adresses() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className='bg-[#f8f9fa] pl-5 pt-5 pb-5 flex-grow' >
        <div className='h6 font-black'>INVOICE ADDRESS</div>
        <small>Jhon Brown</small>
        <small>13/25 New Avenue<br /> New Heaven<br /> 45Y 73J</small>
        <small>England</small>
        <div className="font-black "> Great Brittain</div>
      </div>
      <div className='bg-[#f8f9fa] pl-5 pt-5 pb-5 flex-grow'>
        <div className='h6 font-black'>SHIPPING ADDRESS</div>
        <small>Jhon Brown</small>
        <small>13/25 New Avenue<br /> New Heaven<br /> 45Y 73J</small>
        <small>England</small>
        <div className="font-black">Great Brittain</div>
      </div>
    </div>
  );
}

export default Adresses;
