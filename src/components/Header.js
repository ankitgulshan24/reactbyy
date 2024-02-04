import {LOGO_URL} from "../utils/constant";
import { useState} from "react";
import { Link } from "react-router-dom";


const Header= ()=>{

      const [btnname, setbtnname] = useState("LOGIN")
    return (
   
       <div className="header">
       <div className="logo-container">
           <img  className="logo" src={LOGO_URL} alt="logo"  />
       </div>
       <div className="nav-items">
       <ul>
           <li><Link to="/">Home </Link></li>
           <li><Link to="/about">About Us</Link></li>
           <li> <Link to="/ContactUs">Contact Us</Link></li>
           <li><Link to="/Cart"> Cart</Link></li>
           <button className="login-btn" onClick={()=>{
            btnname==="LOGIN"? setbtnname("LOGOUT"): setbtnname("LOGIN");
           }}>{btnname}</button>
       </ul>
   
       </div>
   
   
   
   
   
       </div>
    )
   };

   export default Header;