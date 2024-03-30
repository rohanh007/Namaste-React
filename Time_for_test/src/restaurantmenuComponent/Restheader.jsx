
const Restheader = (props) => {
    console.log(props.data);
//    const{
//     name
//    }=props.data;
    return (
        <div>
            <div className="restaurant-container">
                <div>
                    <h1 className="restaurant-name">{}</h1>
                </div>
            </div>

            <div className="restaurant-info">
                <div className="restaurant-ratings-container">
                    <div className="restaurant-rating-icon"></div>
                    <div className="restaurant-ratings">
                        <div className="rating-value">3.8 (100+ ratings)</div>
                        <div className="separator">•</div>
                        <div className="cost-for-two">₹600 for two</div>
                    </div>
                </div>

                <div className="restaurant-cuisines">
                    <a href="/city/pune/north-indian-cuisine-restaurants">
                        <div className="cuisine-type">North Indian,</div>
                    </a>
                    <a href="/city/pune/barbecue-cuisine-restaurants">
                        <div className="cuisine-type">Barbecue</div>
                    </a>
                </div>

                <div className="restaurant-location-info">
                    <div className="location-details">
                        <div className="label">Outlet</div>
                        <div className="location-name">Hinjawadi</div>
                        <div className="outlet-selector">
                            <button className="change-outlet-button">▾</button>
                        </div>
                    </div>
                    <div className="delivery-time">40-45 mins</div>
                </div>

            </div>

            <hr className="separator-line"/>

                <ul className="delivery-info">
                    <li className="delivery-distance-fee">
                        <img src="delivery_fee_icon.png" alt="Delivery fee icon" className="delivery-fee-icon"/>
                            <div><b>3.0 kms</b> | ₹45 Delivery fee will apply</div>
                    </li>
                </ul>

                <div className="additional-section"></div>
        </div>

    );
};

export default Restheader;
