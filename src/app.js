import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import About  from "./components/About.js";
import ContactUs from "./components/ContactUs.js"
import Error  from "./components/Error.js";
import Cart from "./components/Cart.js";


const Applayout = ()=>{
    return(
<div className="app">
<Header/>
<Outlet/>

</div>

    )
}

const appRouter= createBrowserRouter ([
    {
        path: "/",
        element: <Applayout/>,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path: "/about",
                element:<About/>,
            },
            {
                path: "/ContactUs",
                element:<ContactUs/>
            },
            {
                path:"/Cart",
                element:<Cart/>
            }
        ],
        errorElement: <Error/>
    },
   


]);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)










































































