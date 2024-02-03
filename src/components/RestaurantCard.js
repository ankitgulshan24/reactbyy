import { FOOD_URL } from "../utils/constant";
import Body from "./Body";

const RestaurantCard=(props)=>{
    const {resData}= props;
    const{name, costForTwo, cuisines, cloudinaryImageId, sla, avgRating}=resData?.info;
    // 
    
    // console.log(resData.info.name);
    // const{name}=resData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.info;
    // console.log(name)
    return(
        // <div>dfjgjklgj</div>
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}> 
            <img className="res-image" src={FOOD_URL+cloudinaryImageId} alt="res-img"  />
            <h3>{name}</h3>
            <h4>{costForTwo }</h4>   
            <h5>{cuisines.join(",")}</h5>
            <h5>{sla.deliveryTime+"min "}</h5>
            <h5>{avgRating+"stars"}</h5>
        </div>
    )


}

export default RestaurantCard;