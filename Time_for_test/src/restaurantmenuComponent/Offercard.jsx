import('../../template/css/offercards.css')
const Offercard = ({ 
    header,
    couponCode,
    offerLogo

}) => {
    return (
        <div className="offer_card_box">
            <div style={{ position: "relative" }}>
                <div stroke="border_Secondary" className="offer_card_I offer_card_II">
                    <div data-testid="offer-card-container-0" className="offer_card_row">
                        <div className="offer_card">
                            <div className="offer_img">
                                <img className="" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${offerLogo}`} width="48" height="48" alt="50% Off Upto ₹100" />
                            </div>
                            <div className="offer_info">
                                <div className="offer_off">{header}</div>
                                <div className="offer_coupon">{couponCode}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>

    )
}

export default Offercard;