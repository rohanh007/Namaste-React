import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  const [btnnamereact , setbtnnamereact] =useState("LogIn");
   
  return (
    <div className="header-container">
      <div className="logo-container">
      <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="menu-container">
        <ul className="menu">
          <li className="menu-items">Home</li>
          <li className="menu-items">Menu</li>
          <li className="menu-items">About us</li>
          <li className="menu-items">Contact us</li>
          <li className="menu-items">Specials</li>
          <li className="menu-items">Cart</li>
          <button className="menu-items logibbtn" onClick={()=>{
            btnnamereact=="LogIn" ? setbtnnamereact("LogOut"):setbtnnamereact("LogIn")
          }}>{btnnamereact}</button>
        </ul>
      </div>
    </div>
    
        )};

export default Header;