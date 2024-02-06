import { useState } from "react";
import OfferCard from "./OfferCard";

const Offer=()=>{
    const[isVisible,setIsVisible]=useState("");
    
    return(
        <div>
            <h1 className="flex justify-center text-3xl font-bold m-3 p-2">  {"<<<<  OFFERS  >>>> "}</h1>

            <OfferCard   isVisible={isVisible ==="NewUser"} 
               setIsVisible={()=>setIsVisible((isVisible==="NewUser")?"":"NewUser")}
                title="For New User"
            />
            <OfferCard   isVisible={isVisible==="Premiume"} 
            setIsVisible={()=>setIsVisible((isVisible==="Premiume")?"":"Premiume")}
                title="For Premiume User"
            />
            <OfferCard   isVisible={isVisible==="Daily"} 
            setIsVisible={()=>setIsVisible((isVisible==="Daily")?"":"Daily")}
                title="Today Offer"
            />
        </div>
    )
    console.log("endOffer");
}
export default Offer;