import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnnamereact , setbtnnamereact] =useState("LogIn");
   
  return (
    <div className="header-container">
      <div className="logo-container">
      <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="menu-container">
        <ul className="menu">
          <li className="menu-items"><Link to={"/"}>Home</Link></li>
          <li className="menu-items"><Link to={"/Menu"}>Menu</Link></li>
          <li className="menu-items"><Link to={"/About"}>About us</Link></li>
          <li className="menu-items"><Link to={"/contact"} >Contact us</Link></li>
          <li className="menu-items"><Link to={"/Specials"}>Specials</Link></li>
          <li className="menu-items">Cart</li>
          <button className="menu-items logibbtn" onClick={()=>{
            btnnamereact=="LogIn" ? setbtnnamereact("LogOut"):setbtnnamereact("LogIn")
          }}>{btnnamereact}</button>
        </ul>
        
      </div>
      
    </div>
    
        )};

export default Header;
