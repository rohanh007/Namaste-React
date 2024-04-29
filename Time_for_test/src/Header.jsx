import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import LocationPopup from "./Location/LocationPopup";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import logo  from '../template/img/kisspng-swiggy-office-business-online-food-ordering-delive-swiggy-5b251ebbacfa27.4233904815291593557085.png';
import SignIn from "./Auth/SignIn";
import { useSelector } from "react-redux";
const Header = () => {
   const [isOpen,setisOpen]=useState(false)
   const [islocopen,setislocopen]=useState(false);

   const getlocationpopup=()=>{
    setislocopen(!islocopen);
   }
   const togglepopup=()=>{
    setisOpen(!isOpen)
   }

   const cart=useSelector((store)=>(store.cart.items));
   console.log(cart);
  return (
    <div className="header-container">
      <div className="logo-container">
      <img className="logo" src={logo}></img>
      <div className="getlocation">
          <div className=""><Link  className="link" onClick={getlocationpopup}>other</Link></div>
          <div>
          <LocationPopup islocopen={islocopen} islocclose={getlocationpopup}></LocationPopup>
          </div>
      </div>
      </div>
      <div className="menu-container">
        <ul className="menu_header">
          {/* <li className="menu-items"><Link className="link" to={"/"}>Search</Link></li> */}
          <li className="menu-items"><Link className="link" to={"/Search"}><span><CiSearch/></span>Search</Link></li>
          <li className="menu-items"><Link className="link" to={"/Offer"}><span><BiSolidOffer/></span>Offers</Link></li>
          <li className="menu-items"><Link className="link" to={"/Help"}><span><IoIosHelpCircleOutline/></span>Help</Link></li>
          {/* <li className="menu-items"><Link to={"/contact"} >Contact us</Link></li>
          <li className="menu-items"><Link to={"/Specials"}>Specials</Link></li> */}
          <li className="menu-items"><Link className="link" to={"/cart"}><span><RiShoppingCartLine/></span>({cart.length})Cart</Link></li>
          {/* <button className="menu-items logibbtn" onClick={()=>{
            btnnamereact=="LogIn" ? setbtnnamereact("LogOut"):setbtnnamereact("LogIn")
          }}>{btnnamereact}</button> */}
          <li className="menu-items"><Link className="link" onClick={togglepopup}><span><CiUser /></span>SignIn</Link></li>
          <div>
            <SignIn isOpen={isOpen}  isClose={togglepopup}/>
          </div>
        </ul>
        
      </div>
      
    </div>
    
        )};

export default Header;
