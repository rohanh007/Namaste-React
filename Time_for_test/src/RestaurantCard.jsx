import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  sla,
  avgRating,
  aggregatedDiscountInfoV3,
}) => {
  return (
    <div className="food-card">
        <div className="restaurant-card">
          <img className="restaurant-image" src={CDN_URL + cloudinaryImageId} />
          <div className="discount-badge">
               {`${aggregatedDiscountInfoV3?.header || ''} ${aggregatedDiscountInfoV3?.subHeader || ''}`}
          </div>


        </div>
        <div className="restaurant-details">
          <div className="restaurant-name">{name}</div>
          <div className="restaurant-rating-time">
            <span className="rating">{avgRating}</span>
            <span className="separator">•</span>
            <span className="delivery-time">{sla.slaString}</span>
          </div>
          <div className="cuisine-type">{cuisines.join(", ")}</div>
          <div className="location">{locality}</div>
        </div>
    </div>

  );
};

export default RestaurantCard;