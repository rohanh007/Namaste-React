import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../utils/constant";

const useRestheader = (id) => {
  const [Restheader, setRestheader] = useState([]);
  // console.log(id);
  useEffect(() => {
    const fetchheader = async () => {
      try {
        const getdata = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5234811&lng=73.7183639&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        // console.log(getdata)
        if (!getdata.ok) {
          throw new Error(`Http Response Error :${getdata.status}`);
        }
        const headerdata = await getdata.json(); 
        //console.log(headerdata);
        async function Checkjson(json) {
          for (let i = 0; i < json?.data?.cards.length; i++) {
            let checkjson = json?.data?.cards[i]?.card?.card?.info;

            if (checkjson != undefined) {
              return checkjson;
            }
          }
        }
        const headinfo = await Checkjson(headerdata);
       // console.log(headinfo);
        setRestheader(headinfo);
        console.log(Restheader);
        
      } catch (error) {
        console.error("error message :", error.message)
      }
    }
    fetchheader();
  }, [id])
 console.log(Restheader)
  return Restheader;

}


export default useRestheader ;

