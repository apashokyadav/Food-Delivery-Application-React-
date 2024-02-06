import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, reduceItem } from "../utills/cartSlice";

const Dish = ({ dishdata }) => {
  const dispatch = useDispatch();
  const handleEvent = () => {
    dispatch(addItem(dishdata));
  };
  const handleEvent2 = () => {
    dispatch(reduceItem(dishdata.id));
  };
  

  const items=useSelector(store=>store.cart.items);
  let Nocount=0;
  let index = items.findIndex(obj => obj.id === dishdata.id);
  if (index !== -1) {
         Nocount= items[index].count;
  }
  
  
  return (
    <div className="flex justify-between  border-t-2 h-20">
      <div>
        <div></div>
        <h1 className="text-base  ">{dishdata?.name}</h1>
        <h2 className="text-sm">{dishdata?.price}</h2>
        {/* <p>{dishdata?.description}</p> */}
      </div>
      <div> </div>
      <div>
        <div className="">
          <img
            className="w-16 mt-1 mr-1 h-12 border-2 rounded-lg"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
              dishdata.imageId
            }
          />
         
            <div className="h-5 px-1 mt-1 border border-slate-500 rounded-lg bg-green-200 flex justify-between items-center text-md font-bold hover:bg-green-400 ">
              <button className=" "
                onClick={handleEvent2}>-</button>
              <div>{Nocount}</div>
              <button
                className=""
                onClick={handleEvent}
              >
                +{" "}
              </button>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Dish;
