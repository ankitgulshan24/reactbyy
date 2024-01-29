import React from "react";
import ReactDOM from "react-dom/client";

const Header= ()=>{
 return (

    <div className="header">
    <div className="logo-container">
        <img  className="logo" src="https://dynamic.brandcrowd.com/asset/logo/7628e6e4-aced-4ca2-be50-9f2bee547c71/logo-search-grid-1x?logoTemplateVersion=1&v=638018268549530000" alt="logo"  />
    </div>
    <div className="nav-items">
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
    </ul>

    </div>





    </div>
 )
};

const resObj={
    "name": "Goa Grills",
    "cuisine": "Goan",
    "price": "$$",
    "delivery_time": "30-45 minutes"
  };

const apiresponse=[
    {
        "id": 1,
        "name": "Spice Delight",
        "cuisine": "North Indian",
        "price": "$$",
        "delivery_time": "30-45 minutes"
      },
      {
        "id": 2,
        "name": "Curry Haven",
        "cuisine": "South Indian",
        "price": "$",
        "delivery_time": "20-35 minutes"
      },
      {
        "id": 3,
        "name": "Tandoor Treats",
        "cuisine": "Punjabi",
        "price": "$$$",
        "delivery_time": "40-55 minutes"
      },
      {
        "id": 4,
        "name": "Biryani Bliss",
        "cuisine": "Hyderabadi",
        "price": "$$",
        "delivery_time": "25-40 minutes"
      },
      {
        "id": 5,
        "name": "Dosa Diner",
        "cuisine": "South Indian",
        "price": "$",
        "delivery_time": "15-30 minutes"
      },
      {
        "id": 6,
        "name": "Mumbai Masala",
        "cuisine": "Street Food",
        "price": "$$",
        "delivery_time": "35-50 minutes"
      },
      {
        "id": 7,
        "name": "Chaat Corner",
        "cuisine": "North Indian",
        "price": "$",
        "delivery_time": "20-35 minutes"
      },
      {
        "id": 8,
        "name": "Paneer Palace",
        "cuisine": "Vegetarian",
        "price": "$$$",
        "delivery_time": "40-55 minutes"
      },
      {
        "id": 9,
        "name": "Samosa Street",
        "cuisine": "Street Food",
        "price": "$",
        "delivery_time": "15-30 minutes"
      },
      {
        "id": 10,
        "name": "Goa Grills",
        "cuisine": "Goan",
        "price": "$$",
        "delivery_time": "30-45 minutes"
      },
      {
        "id": 11,
        "name": "Chennai Chows",
        "cuisine": "South Indian",
        "price": "$$$",
        "delivery_time": "40-55 minutes"
      },
      {
        "id": 12,
        "name": "Butter Chicken Bistro",
        "cuisine": "Punjabi",
        "price": "$$",
        "delivery_time": "25-40 minutes"
      },
      {
        "id": 13,
        "name": "Kebab Kingdom",
        "cuisine": "Mughlai",
        "price": "$$$",
        "delivery_time": "35-50 minutes"
      },
      {
        "id": 14,
        "name": "Vada Pavilion",
        "cuisine": "Mumbai Street Food",
        "price": "$",
        "delivery_time": "20-35 minutes"
      },
      {
        "id": 15,
        "name": "Rajma Raj",
        "cuisine": "North Indian",
        "price": "$",
        "delivery_time": "15-30 minutes"
      }
  ]

const RestaurantCard=(props)=>{
    const {resData}= props;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}> 
            <img className="res-image" src="https://b.zmtcdn.com/data/pictures/3/19797003/3d18b35bc0120f92da033d6230ba68b5.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="res-img"  />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisine}</h4>
            <h5>{resData.price}</h5>
            <h5>{resData.delivery_time}</h5>
        </div>
    )


}

//you can use destructing of props object
// const RestaurantCard=({resname, cuisine, stars, time})=>{
//     return(
//         <div className="res-card" style={{backgroundColor:"red"}}> 
//             <img className="res-image" src="https://b.zmtcdn.com/data/pictures/3/19797003/3d18b35bc0120f92da033d6230ba68b5.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="res-img" srcset="" />
//             <h3>{resname}</h3>
//             <h4>{cuisine}</h4>
//             <h5>{stars}</h5>
//             <h5>{time}</h5>
//         </div>
//     )  


// }

const Body=()=>{
    return(
    <div className="body">
        <div className="search">Search Bar</div>
        <div className="res-container">

        {/* {apiresponse.map((restaurant) =><RestaurantCard resData={restaurant}/>)} */}


        {apiresponse.map((restaurant) =><
        RestaurantCard key={restaurant.id} resData={restaurant}/>)}
{/* 
        if we dont have unique id then we can pass the index too */}
        {/* {apiresponse.map((restaurant, index) =><RestaurantCard key={index} resData={restaurant}/>)} */}

        {/* <RestaurantCard resData= {apiresponse[1]} /> */}
        
        
        
        
        
         </div>
    </div>)
};




const Applayout = ()=>{
    return(
<div className="app">
<Header/>
<Body/>

</div>

    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)










































































