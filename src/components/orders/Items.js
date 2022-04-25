import React from "react";
import Item from "./Item";
function Items(props) {
  return (
    <div className="flex">
      <div className="mx-3 flex-grow">
        <div className="p-3 mt-4 flex flex-row justify-between mb-3" >

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
        {console.log(" details", props.details)}
        {props.details && props.details.map((item, i) => {
          console.log(item.name);
          return (<Item details={item} key={i} />)
        }
        )
        }
        {/* <Item details={props}></Item> */}
      </div>
    </div>
  );
}

export default Items;
