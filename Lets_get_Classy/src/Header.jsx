import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo  from '../template/img/kisspng-swiggy-office-business-online-food-ordering-delive-swiggy-5b251ebbacfa27.4233904815291593557085.png';
const Header = () => {
  const [btnnamereact , setbtnnamereact] =useState("LogIn");
   
  return (
    <div className="header-container">
      <div className="logo-container">
      <img className="logo" src={logo}></img>
      </div>
      <div className="menu-container">
        <ul className="menu">
          <li className="menu-items"><Link className="link" to={"/"}>Search</Link></li>
          <li className="menu-items"><Link className="link" to={"/Menu"}>Offers</Link></li>
          <li className="menu-items"><Link className="link" to={"/About"}>Help</Link></li>
          {/* <li className="menu-items"><Link to={"/contact"} >Contact us</Link></li>
          <li className="menu-items"><Link to={"/Specials"}>Specials</Link></li> */}
          <li className="menu-items">Cart</li>
          <button className="menu-items logibbtn" onClick={()=>{
            btnnamereact=="LogIn" ? setbtnnamereact("LogOut"):setbtnnamereact("LogIn")
          }}>{btnnamereact}</button>
        </ul>
        
      </div>
      
    </div>
    
        )};

export default Header;
