import React, { useContext, useState } from "react";
import Title from "./Title";
import Searchicon from "../utills/icons/search.svg";
import Offericon from "../utills/icons/Offer.svg";
import Helpicon from "../utills/icons/Help.svg";
import Signinicon from "../utills/icons/Signin.svg";
import SignOuticon from "../utills/icons/SignOut.svg";
import Carticon from "../utills/icons/Cart.svg";
import { Link } from "react-router-dom";
import UserContext from "../utills/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [isSignin, setisSignin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="relative h-20 w-full border-2  flex m-2  justify-between  ">
      <Title />
      <div className="">
        <ul className=" flex text-xl font-bold justify-between mg-2 mt-3">
          <li className=" mx-3 px-1 flex justify-center hover:text-orange-400 cursor-pointer ">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" mx-3 px-1 flex-col item-center hover:text-orange-400 cursor-pointer ">
            <Link to="/offer" className="flex item-center">
              <img className=" mt-0 w-8" src={Offericon} />
              Offer
            </Link>
          </li>
          <li className=" mx-3 px-1   hover:text-orange-400 cursor-pointer">
            <Link className="flex items-center" to="/contact">
              <img className="m-1 mt-0 w-7" src={Helpicon} />
              Contact Us
            </Link>
          </li>
          <li className=" mx-3 px-1   hover:text-orange-400 cursor-pointer">
            <Link to="/cart " className="flex items-center ">
              <div className="flex-col">
                <div className="text-sm text-blue-900  w-12 h-3 flex justify-center rounded-full" >{cartItems.length}</div>
                <img className="w-12 h-7 flex justify-center " src={Carticon} />
              </div>
              Cart
            </Link>
          </li>
          <li className=" mx-3 px-1 flex items-center    hover:text-orange-400 cursor-pointer">
            <h1 className="mr-1 text-sky-600">
              {user.signin ? user.name : ""}{""}
            </h1>
            <Link to="/signin" className="flex justify-center">
              {/* <img className='m-1 mt-0 w-7' src={ isSignin? SignOuticon : Signinicon}/> */}
              <div
                className="text-lg  font-normal border border-gray-500 bg-sky-100 rounded-xl p-1 px-2"
                onClick={() => {
                  setUser({
                    name: "",
                    email: "",
                    signin: false,
                  });
                }}
              >
                {" "}
                {user.signin ? "LogOut" : "Login"}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
