import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../utils/constant";

const useRestheader = (id) => {
  const [RestHeader, setRestHeader] = useState([]);
  // console.log(id);
  useEffect(() => {
    const fetchheader = async () => {
      try {
        const getdata = await fetch(RESTAURANT_MENU+id);
        // console.log(getdata)
        if (!getdata.ok) {
          throw new Error(`Http Response Error :${getdata.status}`);
        }
        const headerdata = await getdata.json(); 
        const menu_data=headerdata?.data?.cards;
        
        setRestHeader(menu_data);
        console.log(RestHeader)
      } catch (error) {
        console.error("error message :", error.message)
      }
      
      console.log(RestHeader)
    }
    fetchheader();
  }, [id])
 console.log(RestHeader)
  return RestHeader;

}


export default useRestheader ;

