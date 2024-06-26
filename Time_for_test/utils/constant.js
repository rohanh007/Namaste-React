import { useLocation } from "react-router-dom";
import { getLocationDataFromSessionStorage } from "../src/sessionStorage";


export const getDataApiUrl = () => {
  const sessionData = getLocationDataFromSessionStorage();
  console.log(sessionData);
  const latitude = sessionData && sessionData.latitude ? sessionData.latitude : 18.61610;
  const longitude = sessionData && sessionData.longitude ? sessionData.longitude : 73.72860;
  return `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
};


export const CDN_URL =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

export const LOGO_URL =
  'https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png';

export const MENU_API =
  'https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=';

 export const DATA_API='https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

export const Curatimage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const searchdata="https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860"

export const Help_data="https://www.swiggy.com/dapi/support/";

export const RESTAURANT_MENU="https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=";

export const ISSUES="https://www.swiggy.com/dapi/support/issues/";

export const POPULAR_SEARCH ="https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=18.61610&lng=73.72860";

export const cuisinelist='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/';

export const categories_img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";