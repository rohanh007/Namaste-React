import { useState } from "react";

const Accordian=({card})=>{
    console.log(card);
    const {
        title,
        "@type":cardtype,
    }=card || {};
    const [Activeindex ,setActiveindex]=useState([])
  
    return (
        <div className="Accordian_header">
          <div className="accordian_txt">
             <h3 className="accordian_title">{title}</h3>
          </div>
        </div>
    )
}


export default Accordian;