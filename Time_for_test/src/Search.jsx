import { useEffect, useState } from "react";
import("../template/css/Search.css")
import { POPULAR_SEARCH } from "../utils/constant";
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

            } catch (error) {
                console.log(error);
            }
        }
        Fetchdata();
    })



    return (
        <div className="container">
            <div className="search_container">
                <div className="search_box search_outer " >
                    <form>
                        <div className="from_container">
                            <div className="input_box">
                                <input type="text" className="input" placeholder="Search for restaurants and food" />
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
                    <div className="Search_wrapper" >
                        <div className="Search_divide _5iVPM"></div>
                        <div className="Search_widgets">
                            <div className="styles_container">
                                
                                <div className="styles_headerContainer">
                                    <div >
                                        <h2 className="styles_headerContainerTitle"><span>Popular Cuisines</span></h2>
                                        <span className="styles_headerContainerSubtitle" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div aria-hidden="false" >
                                    <div className="styles_slider" data-testid="grid-slider">
                                        <div className="styles_row" data-testid="grid-row">
                                            <div className="styles_slide" >
                                                <div className="Carousel_slide">
                                                    <div>
                                                        <div data-testid="image-info-container" className="styles_container" >
                                                            <button data-testid="image-info-ripple" className="Ripple_container styles_containerImg">
                                                                <img alt="" className="styles_img" loading="lazy" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966`} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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