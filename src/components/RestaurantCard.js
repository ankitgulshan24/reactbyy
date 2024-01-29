import { FOOD_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData}= props;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}> 
            <img className="res-image" src={FOOD_URL} alt="res-img"  />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisine}</h4>
            <h5>{resData.price}</h5>
            <h5>{resData.delivery_time}</h5>
        </div>
    )


}

export default RestaurantCard;