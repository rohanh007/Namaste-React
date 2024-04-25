import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Shimmer from './Shimmer';
import shimmer from './shimmer';
import { CDN_URL } from '../utils/constant';
import { MENU_API } from '../utils/constant';
import Restheader from './restaurantmenuComponent/Restheader';
import useRestheader from '../hooks/useRestheader';
import useRestoffer from '../hooks/useRestoffer';
import Restoffer from './restaurantmenuComponent/Restoffer';
import Toppicks from './restaurantmenuComponent/Toppicks';
import Accordian from './restaurantmenuComponent/Accordian';
import useToppick from '../hooks/useToppicks';
import('../template/css/restmenu.css')
// import { FiClock } from 'react-icons/fi';
// import { AiOutlineStar } from 'react-icons/ai';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  const headerdata= useRestheader(resId)
  const offerlist=useRestoffer(resId);
  const [Toppick,Menus]=useToppick(resId)
  // console.log(offerlist);
  console.log(Menus);
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
   console.log(resInfo);
  const Restaurantdetails = headerdata.filter((c) =>
   c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
   );

   const categories = Menus.filter((c) =>
   c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
   c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
   );
   console.log(categories);

if(!Restaurantdetails){
  return(<div>wait data is comming </div>)
}

  return (
    <div className="menu w-6/12 justify-between">
      <div className='menu_div'>
        <Restheader data={Restaurantdetails[0]?.card?.card} key={Restaurantdetails[0]?.card?.card?.info?.id} />
      </div>
      <div className='offer_div'>
        <Restoffer {...offerlist} key={Restaurantdetails[0]?.card?.card?.info?.id} />
      </div>
      <div className="menuheader">
        <svg aria-hidden="true" height="24" width="24" className="menusvg">
          <use xlinkHref="/core/sprite-2e61ee4e.svg#artDecoLeft24"></use>
        </svg>
        <div className="headertext headercss">MENU</div>
        <svg aria-hidden="true" height="24" width="24" className="menusvg">
          <use xlinkHref="/core/sprite-2e61ee4e.svg#artDecoRight24"></use>
        </svg>
      </div>
      <div className="top_pick">
        <Toppicks {...Toppick} />
      </div>
      <div className="accordian">
        {categories.map((menucategories)=>(<Accordian {...menucategories?.card} key={categories?.card?.card?.['@title']}/>))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
