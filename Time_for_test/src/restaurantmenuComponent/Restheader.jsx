import useRestheader from "../../hooks/useRestheader";
const Restheader = (resId) => {
    console.log(resId);
    const headerdata=useRestheader(resId)
    console.log(headerdata)
   
     const {
        name

     } =headerdata;
    
    return (
        <div className="RestaurantHeader">
            <div className="HeaderWrapper MarginBottom">
                <div className="NameAddressWrapper">
                    <div aria-hidden="true">
                        <p className="NameAddressName">{name}</p>
                        <p className="NameAddressCuisines"></p>
                    </div>
                    <div className="AreaWrapper" aria-label="">
                        <p className="Area" aria-hidden="true">fgfhnb</p>
                        <p className="LastMile" aria-hidden="true">werthrye</p>
                        <div className="OutletSelectorWrapper">
                            <button className="OutletSelector" aria-label="Selected outlet is Hinjawadi, 4.5 km away. Double tap to change outlet.">
                                <span className="OutletIcon">▾</span>
                            </button>
                        </div>
                    </div>
                </div>
                <button className="RatingsWrapper" data-testid="restaurant-ratings-header" aria-hidden="true">
                    <span className="AvgRating" aria-hidden="true">
                        <span className="icon-star"></span> <span></span>
                    </span>
                    <span className="TotalRatings" aria-hidden="true">1K+ ratings</span>
                </button>
            </div>
            <ul>
                <li className="MessageWrapper">
                    {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648208530/surgecreatives/info" alt="DISTANCE_FEE_NON_FOOD_LM" class="MessageIcon" aria-hidden="true"> */}
                    <span className="MessageText" aria-hidden="true">Far (4.5 kms) | Additional delivery fee will apply</span>
                    <span className="ScreenReaderOnly" tabindex="0">Far (4.5 kms) | Additional delivery fee will apply</span>
                </li>
            </ul>
            <hr class="DottedSeparator MarginBottom" aria-hidden="true"/>
            <div className="MarginBottom" aria-hidden="true">
                <ul className="TimeCostWrapper">
                    <li className="TimeCostItem">
                        <svg className="TimeCostIcon" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" stroke-width="1.3"></circle>
                            <path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path>
                        </svg>
                        <span>25-30 MINS</span>
                    </li>
                    <li class="TimeCostItem">
                        <svg class="TimeCostIcon" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <circle cx="9" cy="9" r="8.25" stroke="#3E4152" stroke-width="1.5"></circle>
                            <path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path>
                        </svg>
                        <span>₹250 for two</span>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Restheader;
