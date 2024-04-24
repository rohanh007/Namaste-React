import { useEffect, useState } from "react";
import("../template/css/Search.css")
import Cuisinelist from "./SearchPage/Cuisinelist";
import { POPULAR_SEARCH } from "../utils/constant";
import { Link } from "react-router-dom";
const Search = () => {
    const [Popularcuisine, SetPopularcuisine] = useState([]);
    useEffect(() => {
        Fetchdata = async () => {
            try {
                const data = await fetch(POPULAR_SEARCH);
                if (!data.ok) {
                    throw new Error(data.status);
                }
                const json = await data.json();
                console.log(json);
                async function checkJS(jsondata) {
                    for (let i = 0; i < json?.data?.cards.length; i++) {
                        let checkdata = jsondata?.data?.cards[i]?.card?.card?.imageGridCards?.info;
                        if (checkdata !== undefined) {
                            return checkdata;
                        }
                    }
                }
                const cuisine = await checkJS(json);
                SetPopularcuisine(cuisine);
                console.log(Popularcuisine);

            } catch (error) {
                console.log(error);
            }
        }
        Fetchdata();
    })



    return (
        <div className="search_container">
        <div className="searchbox_container">
          <div className="search_div search_css" data-testid="search-bar">
            <form>
              <div className="search_box_container">
                <div className="search">
                  <input type="text" className="input_box" placeholder="Search for restaurants and food" maxlength="200" />
                </div>
                <div className="search_icon">
                  <span className="icon-magnifier"></span>
                </div>
              </div>
              <input type="submit" hidden="" />
            </form>
          </div>
        </div>
        <div className="Cuisine_container">
          <div className="cuisine_inner">
            <div className="Search_wrapper__lQvnw cuisine_wrapper" data-testid="search-pl-wrapper">
              <div className="Search_divider__3ARUS cuisine_divider"></div>
              <div className="Search_widgetsV2__27BBR">
                <div></div>
              </div>
              <div className="Search_widgetsV2__27BBR">
                <div className="styles_container__jxIGl">
                  <div></div>
                  <div data-testid="grid-header" className="styles_headerContainer__2UgeD">
                    <div style={{ padding: "28px 0px 0px 16px" }}>
                      <h2 className="styles_headerContainerTitle"><span>Popular Cuisines</span></h2>
                      <span className="styles_headerContainerSubtitle" aria-hidden="true"></span>
                    </div>
                  </div>
                  <div data-testid="grid-container" aria-hidden="false" style={{ padding: "12px 16px 24px", marginTop: "8px", marginBottom: "8px" }}>
                    <div className="styles_slider" data-testid="grid-slider">
                      <div className="styles_row" data-testid="grid-row" >
                        {
                            Popularcuisine.map(cuisine=>(<Link className="link" key={cuisine.id}><Cuisinelist imageId={cuisine.imageId}/></Link>))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    )
}

export default Search;