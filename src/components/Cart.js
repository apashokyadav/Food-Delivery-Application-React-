import { useDispatch, useSelector } from "react-redux";
import store from "../utills/store";
import Dish from "./Dish";
import { clearCart, removeItem } from "../utills/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleEvent1 = () => {
    dispatch(clearCart());
  };
  const handleEvent2 = (id) => {
    dispatch(removeItem(id));
  };

  console.log(items);
  return (
    <div className="flex justify-center">
      <div>
        <div className="flex justify-center my-5">
          <h1 className="font-bold text-2xl">Your Cart</h1>
        </div>

        <div className="boder border-b-4 pb-2 ">
          {items.map((item) => (
            <>
              <Dish key={item.id} dishdata={item} />
              <div className="flex justify-end">
                <button
                  onClick={() => handleEvent2(item.id)}
                  className=" px-1 border border-slate-500 rounded-lg bg-red-200 hover:bg-red-500"
                >
                  {" "}
                  Remove
                </button>
              </div>
            </>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleEvent1}
            className=" mt-2  px-2 border border-slate-300 bg-red-200 rounded-lg hover:bg-red-500"
          >
            ClearCart
          </button>
          {/* <button onClick={handleEvent2} className=" border border-slate-300 bg-red-400 rounded-lg " >RemoveItem</button> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
