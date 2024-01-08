
import React from "react";
import ReactDom from "react-dom/client";

// const heading =React.createElement("h1",{id:'heading'} ,"Namaste React 🚀");
// this is the react element 
const jsxheading=(<h1 className="head" tabIndex="2">Namaste React Using jSX 🚀🚀</h1>);


//react component 
// there are two components are present    
    // 1) class based components 
    // 2) functional components 

    
// example of functional  components and nested components 
const Footer = () =>(
    <h1>this functional component is Footer 👌👌</h1> 
)
const Body = (
 <h1>I am from Body 😒😒</h1>
)
const Title =(
    <h1>It's From Title component 😁😁</h1>
)
console.log(Title);
const FunctionalHeading =() =>(
 <div>
   {Title}
   {Body}
   { /* below syntaxes are used for call the functional nested compoents */}
   {/* <Footer/> */}
   {/* <Footer></Footer> */}
   {Footer()}
    <h1>Hi from functional components 🚀🚀</h1> 
 </div>
)


const root=ReactDom.createRoot(document.getElementById('root'));

root.render(<FunctionalHeading />);