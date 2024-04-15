import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../utils/constant";


const useToppick=(id)=>{
    const[Toppick,setToppick]=useState([]);
    const [Menus ,setMenus]=useState([]);

    useEffect(()=>{
        const fetchtoppick= async()=>{
            try{
                const gettoppick=await fetch(RESTAURANT_MENU+id);
                if(!gettoppick.ok){
                    throw new error(gettoppick.status);
                }
                const toppickjson= await gettoppick.json();
                const toppicklist=await toppickjson?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
                const menus=await toppickjson?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                setToppick(toppicklist);
                setMenus(menus);
            }catch(e){
                console.log(e)
            }
        }


        fetchtoppick();
    },[id])
    console.log(Toppick);
    return [Toppick,Menus] ;
}


export default useToppick;