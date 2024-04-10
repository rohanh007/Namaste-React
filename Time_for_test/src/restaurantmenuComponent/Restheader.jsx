import Shimmerlist from "../shimmer";
import("../../template/css/RestaurantMenu.css")
const Restheader = ({ data }) => {
    console.log(data);
    if (!data) {
        return <Shimmerlist />
    }

    const {
        name,
        sla,
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        cuisines,
        multiOutlet,
        areaName,
        message
    } = data?.info;
    console.log(name);
    return (
        <div>
            <div className="restaurant-container">
                <div>
                    <h1 className="restaurant-name">{name}</h1>
                </div>
            </div>

            <div className="restaurant-info">
                <div className="restaurant-ratings-container">
                    <div className="restaurant-rating-icon"></div>
                    <div className="restaurant-ratings">
                        <div style={{ marginTop: '-2px' }}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                role="img"
                                aria-hidden="true"
                                strokeColor="rgba(2, 6, 12, 0.92)"
                                fillColor="rgba(2, 6, 12, 0.92)"
                            >
                                <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                                <path
                                    d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                                    fill="white"
                                ></path>
                                <defs>
                                    <linearGradient
                                        id="StoreRating20_svg__paint0_linear_32982_71567"
                                        x1="10"
                                        y1="1"
                                        x2="10"
                                        y2="19"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#21973B"></stop>
                                        <stop offset="1" stopColor="#128540"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="rating-value">{avgRating} ({totalRatingsString})</div>
                        <div className="separator">•</div>
                        <div className="cost-for-two">{costForTwoMessage}</div>
                    </div>
                    <div className="restaurant-cuisines">
                        <a href="/city/pune/north-indian-cuisine-restaurants">
                            <div className="cuisine-type">{cuisines.join(',')}</div>
                        </a>
                        <a href="/city/pune/barbecue-cuisine-restaurants">
                            <div className="cuisine-type">Barbecue</div>
                        </a>
                    </div>
                    <div className="restaurant-location-info">
                        <div className="sc-gAhbiu iZOSdl">
                            <div className="sc-igZIGL hmEpaW">
                                <div className="sc-flYmRt bGwlEe"></div>
                                <div className="sc-gkRewV eWycnI"></div>
                                <div className="sc-flYmRt bGwlEe"></div>
                            </div>
                            <div className="location-details">
                                <div className="location_inner">
                                <div className="label">{multiOutlet}</div>
                                <div className="location-name area">{areaName}</div>
                                {/* <div className="outlet-selector">
                                    <button className="change-outlet-button">▾</button>
                                </div> */}
                                </div>
                                <div className="delivery_detail">
                                <div className="delivery-time">{sla.slaString}</div>
                                </div>
                            </div>  
                        </div>
                        <hr className="separator-line" />
                        <ul className="delivery-info">
                            <li className="delivery-distance-fee">
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu" alt="DISTANCE_FEE_NON_FOOD_LM" aria-hidden="true" className="delivery-fee-icon"/>
                                <div className="msg"><b>{message}</b></div>
                            <span className="ScreenReaderOnly" tabindex="0">&lt;b&gt;3.7 kms&lt;/b&gt; | ₹42 Delivery fee will apply</span>   
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="additional-section"></div>
            </div>
        </div>
            );
};

            export default Restheader;
