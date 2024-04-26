import { useEffect, useState } from "react"
import { RESTAURANT_MENU } from "../utils/constant";
const useRestaurantname=(resId)=>{
  const [getrestinfo ,setgetrestinfo]=useState([]);
     console.log(resId);
  useEffect(()=>{
         const fetchrestinfo = async()=>{
            
              try{
                const getrestinfo= await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=${resId}`);
           
                if(!getrestinfo.ok)
                {
                    throw new error(getrestinfo.status);
                }
                const getresjson= await getrestinfo.json();
                const restinfo=getresjson.data?.cards[2]?.card?.card?.info;
    
                setgetrestinfo(restinfo);
                console.log(restinfo);
                   
              }catch(e){
                console.log(e);
              }
         }
         fetchrestinfo();
  },[])

  return  getrestinfo;
}

export default useRestaurantname;