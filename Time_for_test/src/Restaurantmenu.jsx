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
  const headerdata= useRestheader(resId)
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
   
  const Restaurantdetails = headerdata.filter((c) =>
   c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
   );

if(!Restaurantdetails){
  return(<div>wait data is comming </div>)
}

  return (
    <div className="menu w-6/12 justify-between">
      <div className='menu_div'>
        <Restheader data={Restaurantdetails[0]?.card?.card} key={Restaurantdetails[0]?.card?.card?.info?.id}/>
      </div>
    </div>
  );
};

export default RestaurantMenu;
