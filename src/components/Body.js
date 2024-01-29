import RestaurantCard from "./RestaurantCard";
import { apiresponse} from "../utils/mockdata";
import { useState } from "react";
const Body=()=>{
  const[List , setList]= useState(apiresponse);
    return(
    <div className="body">
        <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{
                //filter logic here
                console.log(apiresponse);
                 const filtered = List.filter((res)=>parseInt(res.price)>200);
                setList(filtered);
            }}> 
            Top Rated Restaurant </button>
        </div>
        <div className="res-container">
        {List.map((restaurant) =><
        RestaurantCard key={restaurant.id} resData={restaurant}/>)}
         </div>
    </div>)
};

export default Body;