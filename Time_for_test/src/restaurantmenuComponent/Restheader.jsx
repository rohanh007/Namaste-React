import Shimmerlist from "../shimmer";
import("../../template/css/RestaurantMenu.css")
const Restheader = ({data}) => {
      console.log(data);
      if(!data){
        return <Shimmerlist/>
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
      } =data?.info;
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
                        <div className="location-details">
                            <div className="label">{multiOutlet}</div>
                            <div className="location-name">{areaName}</div>
                            <div className="outlet-selector">
                                <button className="change-outlet-button">▾</button>
                            </div>
                        </div>
                        <div className="delivery-time">{sla.slaString}</div>
                    </div>
                </div>





            </div>

            <hr className="separator-line" />

            <ul className="delivery-info">
                <li className="delivery-distance-fee">
                    <img src="delivery_fee_icon.png" alt="Delivery fee icon" className="delivery-fee-icon" />
                    <div>{message}</div>
                </li>
            </ul>

            <div className="additional-section"></div>
        </div>

    );
};

export default Restheader;
