import { useEffect, useState } from "react";
import RestaurantCard from "../src/RestaurantCard";
import Filtertype from "./Offercomponents/Filtertype";
import { DATA_API } from "../utils/constant";
import { Link } from "react-router-dom";

import('../template/css/offerpage.css')
const Offer = () => {
  const [offerdata, setOfferdata] = useState([])
  const [isfilter_open, setisfilter_open] = useState(false);
  const togglefilter = () => {
    setisfilter_open(!isfilter_open);
  }

  useEffect(() => {
    const usefetchdata = async () => {
      try {
        const data = await fetch(DATA_API)
        //console.log(data);
        if (!data.ok) {
          throw new Error(data.status);
        }
        const jsondata = await data.json();
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            let checkData = jsondata?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
           // console.log(checkData)
            //let offercheck=checkData?.info?.aggregatedDiscountInfoV2;
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }
        const listdata = await checkJsonData(jsondata);
        setOfferdata(listdata);
         //console.log(jsondata);
      } catch (error) {
        console.log(error)
      }

    }
    usefetchdata();
  },[])
  console.log(offerdata);
  return (
    <div>
      <div className="offerlist_container">
        <div className="offerlist_row ">
          <div></div>
          <div className="offerlist_header ">
            <h1 className="headerlist_text">Restaurants With Great Offers Near Me</h1>
          </div>
          <div id="container-grid-filter-sort" className="swiggy_filter_css">
            <div>
              <div className="RefineWidget_filter">
                <div className="RefineWidget_filter_row">
                 
                    <div className="RefineWidget_filter_container">
                    <div className="RefineWidget_header_container">
                      <div className="refine_header">Filter</div>
                      {/* <svg aria-hidden="true" height="16" width="16" className="close_sign">
                        <use xlinkHref="/core/sprite-cc704d40.svg#filter16"></use>
                      </svg> */}
                    </div>
                  </div>
                  <div className="RefineWidget_filter_container">
                    <div className="RefineWidget_header_container">
                      <div className="refine_header">Sort By</div>
                      {/* <svg aria-hidden="true" height="16" width="16" className="close_sign">
                        <use xlinkHref="/core/sprite-cc704d40.svg#filter16"></use>
                      </svg> */}
                    </div>
                  </div>
                  <div className="RefineWidget_filter_container">
                    <div className="RefineWidget_header_container">
                      <div className="refine_header">Fast Delivery</div>
                      {/* <svg aria-hidden="true" height="16" width="16" className="close_sign">
                        <use xlinkHref="/core/sprite-cc704d40.svg#filter16"></use>
                      </svg> */}
                    </div>
                  </div>
                  <div className="RefineWidget_filter_container">
                    <div className="RefineWidget_header_container">
                      <div className="refine_header">New on Swiggy </div>
                      {/* <svg aria-hidden="true" height="16" width="16" className="close_sign">
                        <use xlinkHref="/core/sprite-cc704d40.svg#filter16"></use>
                      </svg> */}
                    </div>
                  </div>
                  <div className="RefineWidget_filter_container">
                    <div className="RefineWidget_header_container">
                      <div className="refine_header">Rating 4.0+</div>
                      <svg aria-hidden="true" height="16" width="16" className="close_sign">
                        <use xlinkHref="/core/sprite-cc704d40.svg#filter16"></use>
                      </svg>
                    </div>
                  </div>
                  <div className="RefineWidget_filter_container">
                    <div className="RefineWidget_header_container">
                      <div className="refine_header">Pure veg</div>
                      <svg aria-hidden="true" height="16" width="16" className="close_sign">
                        <use xlinkHref="/core/sprite-cc704d40.svg#filter16"></use>
                      </svg>
                    </div>
                  </div>
                  <div className="RefineWidget_filter_container">
                    <div className="RefineWidget_header_container">
                      <div className="refine_header">Offers</div>
                      <svg aria-hidden="true" height="16" width="16" className="close_sign">
                        <use xlinkHref="/core/sprite-cc704d40.svg#filter16"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {isfilter_open && <Filtertype isfilter_open={isfilter_open} isfilter_close={togglefilter} />}
          </div>
          <div className="restaurant_offer_container">
            <div className="offer_list_container">
              <div className="cart-container">
                  {
                    offerdata.map((resdata)=>(
                      <Link className="" key={resdata?.info?.id} ><RestaurantCard {...resdata?.info}/></Link>
                    ))
                    }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;