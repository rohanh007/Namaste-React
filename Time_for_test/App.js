import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
// import About from "./src/About";
import Help from "./src/Help";
import Contact from "./src/Contact";
import Error from "./src/Error";
import Restaurantmenu from "./src/Restaurantmenu";
import Offer from "./src/Offer";
import { createBrowserRouter ,RouterProvider, Outlet  } from "react-router-dom";


const PageLayout =() =>(
   <div className="App-container">
     <Header></Header>
     <Outlet/>
     {/* <Body/> */}
    </div>
)

const AppLayout =createBrowserRouter([
  {
    path:"/",
    element:<PageLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
       
      },
      {
        path:"/About",
        element:<Help/>,
        
      },
      {
        path:"/Contact",
        element:<Contact/>, 
      
      },
      {
        path:"/Offer",
        element:<Offer/>, 
      },
      {
        path:"/restaurant/:resId",
        element:<Restaurantmenu/>, 
      }
    ],
    errorElement:<Error/>
  }  

])

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppLayout}/>);