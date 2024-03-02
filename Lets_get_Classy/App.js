import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import About from "./src/About";
import Contact from "./src/Contact";
import Error from "./src/Error";
import Restaurantmenu from "./src/Restaurantmenu";
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
        element:<About/>,
        
      },
      {
        path:"/Contact",
        element:<Contact/>, 
      
      },
      // {
      //   path:"/Menu",
      //   element:<Restaurantmenu/>, 
      // },
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