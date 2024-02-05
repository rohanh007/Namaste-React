import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    
    <div className="restaurant-card">
      <div className="food-image">
      <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="food-info">
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        {/* <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        > */}
          {/* <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4> */}
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
      </div>
    </div>
  );
};

export default RestaurantCard;