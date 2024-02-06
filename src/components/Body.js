import { useEffect, useState } from "react";
import Simmer from "./Simmer"
import Rescard from "./Rescard";
import Filtericon from "../utills/icons/Filter.svg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filter1col, setfiter1col] = useState(false);
  const [filter2col, setfiter2col] = useState(false);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();
    //optional chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const onlineStatus=useOnlineStatus();
  if(!onlineStatus) return <h1 className="text-2xl font-bold">Oops!!!  you are offline</h1>

  // conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Simmer/>
  ) : (
    <div className=" ">
      <div className="container  h-8 mb-2 sm:flex mb-0">
        <div className="flex ">
          <input
            type="text"
            className="flex border rounded-lg text-xl w-40 border-black bg-slate-50 p-2  ml-5 hover:bg-slate-100"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="flex border w-16 rounded-xl border-black bg-slate-50 hover:bg-slate-100"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name.includes(searchText)
              );
              setListOfRestaurants(filteredList);
            }}
          >
            {" "}
            <h4 className="ml-2">Search </h4>
          </button>
        </div>

        <button
          className={
            filter1col
              ? "flex border rounded-xl border-black px-1 ml-4 bg-slate-300"
              : "flex border rounded-xl border-black px-1 ml-4 bg-slate-50   hover:bg-slate-100"
          }
          onClick={() => {
            if (!filter1col) {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.2
              );
              setListOfRestaurants(filteredList);
            } else {
              fetchData();
              setfiter2col(false);
            }
            setfiter1col(!filter1col);
          }}
        >
          <img className=" w-6 my-1  " src={Filtericon} />
          <h1 className=""> Top Rated Restaurant</h1>
        </button>

        <button
          className={
            filter2col
              ? "flex border rounded-xl border-black px-1 ml-4 bg-slate-300"
              : "flex border rounded-xl border-black px-1 ml-4 bg-slate-50   hover:bg-slate-200"
          }
          onClick={() => {
            if (!filter2col) {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.sla.deliveryTime < 25
              );
              setListOfRestaurants(filteredList);
            } else {
              fetchData();
              setfiter1col(false);
            }
            setfiter2col(!filter2col);
          }}
        >
          <img className="w-6 my-1" src={Filtericon} />
          <h1 className=""> Fast delivery</h1>
        </button>
      </div>
      
      <div className="container ml-10 mt-10 flex justify-between flex-wrap mr-5">
        {listOfRestaurants.map((restaurant) => (    
         <Link key={restaurant.info.id} to={"/restaurent/"+ restaurant.info.id} > <Rescard  resData={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
