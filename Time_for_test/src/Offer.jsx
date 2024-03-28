import { useEffect, useState } from "react";
import RestaurantCard from "../src/RestaurantCard";
import { DATA_API } from "../utils/constant";
const Offer = () => {
    const [offerdata, setOfferdata] = useState([])

    useEffect(() => {
        usefetchdata =async () => {
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
            <div id="container-grid-filter-sort" class="StyleWrapper__ContainerGridNoPadding-sc-10ym97a-8 jxkEGY">
                <div class="RefineWidget__RefineWidgetPlaceholder-sc-tnge6n-0 kxYTvS">
                    <div class="RefineWidget__RefineWidgetWrapper-sc-tnge6n-2 hcMwvY">
                        <div class="RefineWidget__RefineChip-sc-tnge6n-5 bqzcyf">
                            <div class="RefineWidget__StyledButtonChip-sc-tnge6n-6 gmcvor">
                                <span class="RefineWidget__StyledButtonChipSpan-sc-tnge6n-7 eLwmBD">
                                    <span class="RefineWidget__InnerSpan-sc-tnge6n-8 btmuvL">1</span>
                                </span>
                                <div class="sc-beySbM kjMzQn">Filter</div>
                                <svg><use xmlnsXlink="/core/sprite-cc704d40.svg#filter16"></use></svg>
                            </div>
                        </div>
                        <div class="RefineWidget__RefineChip-sc-tnge6n-5 bqzcyf">
                            <div class="sc-iuOPfm llxmpL">
                                <div class="sc-beySbM iwXNGZ">Sort By</div>
                                <svg><use xmlnsXlink="/core/sprite-cc704d40.svg#chevronDown12"></use></svg>
                            </div>
                        </div>
                        <div class="RefineWidget__RefineChip-sc-tnge6n-5 bqzcyf">
                            <div class="sc-cyZbSi bucQOg">
                                <div class="contents">
                                    <div class="sc-beySbM iwXNGZ">Offers</div>
                                    <svg><use xmlnsXlink="/core/sprite-cc704d40.svg#close12"></use></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div><RestaurantCard/></div> */}
        </div>
    );
}

export default Offer;