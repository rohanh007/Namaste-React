import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";



const PageLayout =() =>(
   <div className="App-container">
     <Header></Header>
     <Body/>
    </div>
)

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<PageLayout/>);