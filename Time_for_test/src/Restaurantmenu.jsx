import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Shimmer from './Shimmer';
import shimmer from './shimmer';
import { CDN_URL } from '../utils/constant';
import { MENU_API } from '../utils/constant';
import Restheader from './restaurantmenuComponent/Restheader';
import useRestheader from '../hooks/useRestheader';
import('../template/css/restmenu.css')
// import { FiClock } from 'react-icons/fi';
// import { AiOutlineStar } from 'react-icons/ai';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  const [headerdata]= useRestheader(resId)
  console.log(headerdata);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {

  }
  // const fetchMenu = async () => {
  //   const data = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=${resId}&page_type=DESKTOP_WEB_LISTING`);
  //   const json = await data.json();
  //   console.log(json);
  //   const Recommended=json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info;
  //   console.log(Recommended);
  //   setResInfo(Recommended);
  // };
  // console.log(resInfo.groupedCard); 
  // if (resInfo === null) return <shimmer />;

  const {
    name,
    imageId,
    price,
    ratings,
    description,
  } = resInfo;
  // Log resInfo to check its structure
  // console.log(name);
  // console.log(imageId);
  // console.log(price);
  // console.log(ratings);x
  // console.log(description);

  // console.log("Name:", name);
  // console.log("Image ID:", imageId);


  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(itemCards);

  return (



    <div className="menu">
      <div className='menu_div'>
        <Restheader resId={resId} />

      </div>
      <header className="menu-header">
        <div className="menu-header-left">
          <img src={CDN_URL + imageId} alt="Restaurent Info" />
        </div>
        <div className="menu-header-right">
          <div className="top">
            <h1>{name}</h1>
            {/* <h3>{cuisines.join(', ')}</h3> */}
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
                {/* <AiOutlineStar /> */}
              </span>
              <span>{ratings?.aggregatedRating?.rating}</span>
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
                {/* <FiClock /> */}
              </span>
              <span> {price / 100} Rs</span>
            </h4>
            <h3>{description}</h3>
          </div>
        </div>
      </header>

      {/* <div className="menu-main">
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
          ))} */}

      {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
      {/* </div>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
