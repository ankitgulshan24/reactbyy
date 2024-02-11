import RestaurantCard from "./RestaurantCard";
import { apiresponse} from "../utils/mockdata";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body=()=>{
  const[List , setList]= useState([]);
  const [filtered, setfiltered] = useState([])
  const [searchtext, setsearchtext] = useState("")
  useEffect(()=>{
    fetchdata();
  },[]);

  const fetchdata= async()=>{
    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setfiltered(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
};
//con
// if(List.length===0){
//   return <Shimmer/>;
// }

//m-2


    return  List.length===0 ? <Shimmer/>: (
    <div className="body">
        <div className="filter"> 
        <div className="search">
          <input type="text" className="search-box" value={searchtext} 
            onChange={(e)=>{
              console.log(searchtext);
              setsearchtext(e.target.value);
            }}
          />
          <button onClick={(e)=>{
            //filter byy name
            //searchtext
            console.log(List);
            const filteredres= List.filter((res)=>{
              return res?.info?.name.toLowerCase().includes(searchtext.toLowerCase())
          });
            console.log(filteredres);
            setfiltered(filteredres);
          }

          }>Search</button>
        </div>
            <button className="filter-btn" 
            onClick={()=>{
                // filter logic here
                // console.log(apiresponse);  
                // console.log(List);
                 const filtered = List.filter((res)=>(res?.info?.sla?.deliveryTime)>30);
                 console.log(filtered);
                setfiltered(filtered);
            }}> 
            Top Rated Restaurant </button>
        </div>
        <div className="res-container">
        {filtered.map((restaurant) =>(<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>))}
        
         </div>
         
    </div>)
};

export default Body;

// {List.map((restaurant) => <RestaurantCard key={restaurant.id} resData={restaurant} />)}