import {LOGO_URL} from "../utils/constant";
import { useState} from "react";


const Header= ()=>{

      const [btnname, setbtnname] = useState("LOGIN")
    return (
   
       <div className="header">
       <div className="logo-container">
           <img  className="logo" src={LOGO_URL} alt="logo"  />
       </div>
       <div className="nav-items">
       <ul>
           <li>Home</li>
           <li>About Us</li>
           <li>Contact Us</li>
           <li>Cart</li>
           <button className="login-btn" onClick={()=>{
            btnname==="LOGIN"? setbtnname("LOGOUT"): setbtnname("LOGIN");
           }}>{btnname}</button>
       </ul>
   
       </div>
   
   
   
   
   
       </div>
    )
   };

   export default Header;