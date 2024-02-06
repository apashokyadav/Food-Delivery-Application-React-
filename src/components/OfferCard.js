const OfferCard=({title,isVisible,setIsVisible})=>{
    console.log("offercard")
    return (
        <div className= " border border-gray-500 p-2 m-2 rounded-lg">
            <div className="flex justify-between text-2xl font-bold " >
            <h1 className="" > {title} </h1> 
            <button onClick={setIsVisible} className="hover:bg-slate-200 w-8 rounded-lg" >
                   <h2 > { isVisible?"⌄":"⌃"}</h2>
            </button> 
            </div>
           {isVisible &&
            <p>
            How to get 400 off on Nykaa? Offer DetailsNykaa Beauty Coupon Code: Flat Rs 400 off on beauty products from Nykaa. The minimum order value at Rs 1800 to get this offer. Apply coupon code 'FIRST400' to get this offer.
            </p>
            }
           
        </div>
    )
}
export default OfferCard;