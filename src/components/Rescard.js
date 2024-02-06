import Ratingicon from "../utills/icons/Rating.svg";
const Rescard = ({resData}) => {

    return (
   
      <div className='container  w-64  m-5 rounded-lg  hover:p-1 cursor-pointer '>
        <img className=' w-64 h-40  rounded-xl ' alt='' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId}/>
        <div className='ml-2'>
            <h3 className='font-bold'> {resData.name}</h3>
            <h4 className='font-bold'>{resData.cuisines.join(",")}</h4>
            <h4 className='font-bold flex' >
              {resData.avgRating}
              <img className="w-4" src={Ratingicon}/>

            </h4>
            <h4 className='font-bold'>{resData.sla.deliveryTime+" minutes"}</h4>
            <h5>{resData.locality},{resData.areaName}</h5>
        </div>
      </div>
    )
  }
  export default Rescard;