import { useEffect, useState } from "react";
import RestaurantCard from "../src/RestaurantCard";
import Filtertype from "./Offercomponents/Filtertype";
import { DATA_API } from "../utils/constant";
import { Link } from "react-router-dom";

import('../template/css/offerpage.css')
const Offer = () => {
    const [offerdata, setOfferdata] = useState([])
    const [isfilter_open ,setisfilter_open]=useState(false);

    const togglefilter=()=>{
        setisfilter_open(!isfilter_open);
    }

    useEffect(() => {
       const usefetchdata =async () => {
            try {
                const data =await fetch(DATA_API)
                //console.log(data);
                if (!data.ok) {
                    throw new Error(data.status);
                }
                const jsondata = await data.json();
                async function checkJsonData(jsonData) {
                    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                      let checkData = jsondata?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                      console.log(checkData)
                      //let offercheck=checkData?.info?.aggregatedDiscountInfoV2;
                      if (checkData !== undefined) {
                        return checkData;
                      }
                    }
                  }
                  const listdata=await checkJsonData(jsondata);
                  setOfferdata(listdata);
                console.log(jsondata);
            } catch (error) {
               console.log(error)
            }
            
        }
        usefetchdata();
    })
    return (
        <div>
          <div className="offerlist_container">
                <div className="offerlist_row ">
                     <div></div>
                     <div className="offerlist_header ">
                        <h1 className="headerlist_text">Restaurants With Great Offers Near Me</h1>
                     </div>
                     <div className="Filter_header">
                        <ul className="filter_ul">
                            <li className="filter_menu"><Link className="filter_click" onClick={togglefilter}>Filter</Link></li>
                            <li className="filter_menu"><div className="filter_click">Sort By</div></li>
                            <li className="filter_menu"><div className="filter_click">Fast Delivery</div></li>
                            <li className="filter_menu"><div className="filter_click">New on Swiggy</div></li>
                            <li className="filter_menu"><div className="filter_click">Rating</div></li>
                            <li className="filter_menu"><div className="filter_click">Pure Veg</div></li>
                            <li className="filter_menu"><div className="filter_click"></div></li>
                           
                        </ul>
                     </div>
                    <div>
                    {isfilter_open && <Filtertype isfilter_open={isfilter_open} isfilter_close={togglefilter} />}
                    </div>
                </div>
          </div>
        </div>
    );
}

export default Offer;