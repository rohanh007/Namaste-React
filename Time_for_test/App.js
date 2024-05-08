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
import Search from "./src/Search";
import SignIn from "./src/Auth/SignIn";
import { createBrowserRouter ,RouterProvider, Outlet  } from "react-router-dom";
import Cart from "./src/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Curatchoice from "./src/Curat_choice/Curatchoice";


const PageLayout =() =>(
  <Provider store={appStore}>
   <div className="App-container">
     <Header></Header>
     <Outlet/>
     {/* <Body/> */}
    </div>
    </Provider>
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
        path:"/Search",
        element:<Search/>,
       
      },
      {
        path:"/Help",
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
      },
      {
        path:"/collections/:curatid",
        element:<Curatchoice/>, 
      },
      {
        path:"/cart",
        element:<Cart/>, 
      },
    
    ],
    errorElement:<Error/>
  }  

])

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppLayout}/>);