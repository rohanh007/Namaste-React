import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import About from "./src/About";
import Contact from "./src/Contact";
import Error from "./src/Error";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";


const PageLayout =() =>(
   <div className="App-container">
     <Header></Header>
     <Body/>
    </div>
)

const AppLayout =createBrowserRouter([
  {
    path:"/",
    element:<PageLayout/>,
    errorElement:<Error/>
  },
  {
    path:"/About",
    element:<About/>,
    errorElement:<Error/>
  },
  {
    path:"/Contact",
    element:<Contact/>,
    errorElement:<Error></Error>  
  }

])

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppLayout}/>);