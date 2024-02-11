import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU } from "../utils/constant";

const RestaurantMenu= ()=>{

    let resid= useParams();
    console.log(resid);
    let api= "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId="
    

    const [resinfo, setresinfo] = useState(null)

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async ()=>{
        const data= await fetch(MENU + resid);
        // const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId=252910");
       
        const json = await data.json();
        
        
        console.log(json.data);
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info.name);
        console.log(json);
        // console.log(json.data?.cards[0].card.card.info)
        setresinfo(json)
        
    }
    if(resinfo===null)return <Shimmer/>

    // const{name,areaName, city}=resinfo?.data?.cards[0].card.card.info

   

    const {itemCards}=resinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card

    
    return (
        <div>
        <p>this is here not fetcing the data </p>
        {/* <h1>{name}, {city}</h1>
        <h3>{areaName}</h3> */}
        {/* <h5>{itemCards[1].card.card.info.name}</h5> */}
        {/* <h5>{resinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info?.name}</h5> */}
        <ul>
            <li>{resinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info.name}</li>
            {itemCards.map((item)=><li>{item.card.info.name}- {item.card.info.price/100}</li>)}
            
        </ul>


        </div>


    );

};
export default RestaurantMenu;