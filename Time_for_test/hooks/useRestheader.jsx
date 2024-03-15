import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../utils/constant";

const useRestheader=(id)=>{
  const [Restheader ,setRestheader]=useState([]);
  
  useEffect(()=>{
      const fetchheader=async ()=>{
        try{
        const getdata= await fetch(RESTAURANT_MENU+id) ;
        if(!getdata.ok)
        {
            throw new Error(`Http Response Error :${getdata.status}`);
        }
        const headerdata= await getdata.json() ;
        async function Checkjson(json){
          for(let i=0;i<json?.data?.cards.length ;i++)
          {
             let checkjson=json?.data?.cards[i]?.card?.card?.info ;

             if(checkjson!=undefined)
             {
              return checkjson;
             }
          }
        }
        const headinfo=await Checkjson(headerdata);
        console.log(headinfo);
         setRestheader(headinfo);
        }catch(error){
               console.error("error message :" ,error.message)
        }
      }
      fetchheader();
  },[id])
  
  return [Restheader]

}

export default useRestheader ;

