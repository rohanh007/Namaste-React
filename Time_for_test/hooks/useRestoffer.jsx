import { useState , useEffect } from "react";
import { RESTAURANT_MENU } from "../utils/constant";

const useRestoffer=(id)=>{
    const [Offerdata,setOfferdata]=useState([]);
    console.log(id);
     useEffect(()=>{
         const fetchdata = async () => {
             try {
                 const getdata = await fetch(RESTAURANT_MENU + id);
                 if (!getdata.ok) {
                     throw new error(`http error :${getdata.status}`);
                 }
                 const jsonlist= await getdata.json();
                 function checkjson(json) {
                     for (let i = 0; i < json.data.cards.length; i++) {
                         let offer = jsonlist?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle;

                         if (offer !== undefined) {
                            return offer;
                        }
                     }
                     
                 }
                 const offerlist= await checkjson(jsonlist);

                 setOfferdata(offerlist);
                 console.log(offerlist)
                 } catch (error) {
                 console.log(error);
                }
         }
         fetchdata();
     },[id])
     return Offerdata;
}

export default useRestoffer;