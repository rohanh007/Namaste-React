import { useEffect, useState } from "react"
import Shimmer from "./shimmer";
import {CDN_URL} from "../utils/constant"

const Restaurantmenu=()=>{
    const [menulistdata ,setmenulistdata]=useState([]);
    useEffect(()=>{
        apifetch();
    },[])
    
    const apifetch = async ()=>{
         const menudata= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=692493&catalog_qa=undefined&submitAction=ENTER")
         const menujson=await menudata.json();
         //console.log(menujson);
         let data=menujson?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
         //console.log(data);
         setmenulistdata(data);

        }
        console.log(menulistdata);
      
        // if((menulistdata.length)===0 )return (<Shimmer></Shimmer>);
    // console.log(menuitem);
     const {
        name,
        imageId,
        cloudinaryImageId,
        cuisines,
        avgRating,
        deliveryTime
     }=menulistdata[3]?.card?.card?.itemCards[0]?.card?.info
     console.log(menulistdata[3]?.card?.card?.itemCards[0]?.card?.info); 
    
    
    return (
        <div className="menu">
        <header className="menu-header">
          <div className="menu-header-left">
            <img src={CDN_URL + cloudinaryImageId} alt="Restaurent Info" />
          </div>
          <div className="menu-header-right">
            <div className="top">
              <h1>{name}</h1>
              <h3>{cuisines.join(', ')}</h3>
            </div>
            <div className="bottom">
              <h4 className="avg-rating">
                <span
                  className="icons"
                  style={{
                    position: 'relative',
                    top: '2px',
                    marginRight: '3px',
                  }}
                >
                  <AiOutlineStar />
                </span>
                <span>{avgRating}</span>
              </h4>
              <h4 className="time">
                <span
                  className="icons"
                  style={{
                    position: 'relative',
                    top: '2px',
                    marginRight: '3px',
                  }}
                >
                  <FiClock />
                </span>
                <span> {deliveryTime} MINS</span>
              </h4>
              <h3>{costForTwoMessage}</h3>
            </div>
          </div>
        </header>
  
        <div className="menu-main">
          <h2>Menu</h2>
          <h3 className="items">{itemCards.length} items</h3>
          <div className="menu-main-card-container">
            {itemCards.map((item) => (
              <div key={item.card.info.id} className="menu-card">
                <div className="menu-card-left">
                  <h2 className="menu-name">{item.card.info.name}</h2>
                  <h3 className="menu-price">
                    ₹
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </h3>
                  <h4 className="menu-description">
                    {item.card.info.description}
                  </h4>
                </div>
                <div className="menu-card-right">
                  <img src={CDN_URL + item.card.info.imageId} alt="Menu Info" />
                </div>
              </div>
            ))}
  
            {/* <li>{itemCards[0].card.info.name}</li>
          <li>{itemCards[1].card.info.name}</li>
          <li>{itemCards[2].card.info.name}</li> */}
          </div>
        </div>
      </div>
    );      
      
}

export default Restaurantmenu ;
