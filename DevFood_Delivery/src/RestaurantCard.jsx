import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data;
  
    return (
      <div className="restaurant-card">
        <div className="food-image">
          <img
            className="food-image"
            src={CDN_URL+ cloudinaryImageId}
            alt="Food Image"
          />
        </div>
        <div className="food-info">
          <h3>{name}</h3>
          <h4>{cuisines.join(', ')}</h4>
          <h4>{avgRating} stars</h4>
          <h4>₹{costForTwo / 100} FOR TWO</h4>
          <h4>{deliveryTime} minutes</h4>
          <button className="order-button">Order Now</button>
        </div>
      </div>
    );
  };

  
export default RestaurantCard;