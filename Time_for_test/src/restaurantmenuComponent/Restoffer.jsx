import { Link } from 'react-router-dom';
import Offercard from './Offercard';
import Shimmerlist from '../shimmer';
import Shimmer from '../ShimmerComponent/Shimmercard';

import('../../template/css/restoffer.css');
const Restoffer = ({ offers }) => {
     if(!offers)
     {
        return  <Shimmer/>
     }
    return  (
        <div className="offer_container">
            <div className="offer_header">
                <button aria-label="click here to move previous" className="previous_btn" disabled="">
                    <div className="arrowcss margin">
                        <svg aria-hidden="true" height="16" width="16" className="arrowsvg">
                            <use xlinkHref="/core/sprite-2e61ee4e.svg#arrowBack16"></use>
                        </svg>
                    </div>
                </button>
                <button aria-label="click here to move next" className="next_btn">
                    <div className="arrowcss">
                        <svg aria-hidden="true" height="16" width="16" className="sc-iGgWBj kDDZoM">
                            <use xlinkHref="/core/sprite-2e61ee4e.svg#arrowFront16"></use>
                        </svg>
                    </div>
                </button>
            </div>
            <div>
                <div className="offer_row">
                    <div className="offer_h2">
                        <div className="header_box">
                            <h2 className="header title">Deals for you</h2>
                            <div className="empty_div"></div>
                        </div>
                    </div>
                </div>
                    <div className="offer_box">
                        <div className="offer_row">
                             {
                                offers.map((offer)=>(<Link key={offer?.info?.offerIds} ><Offercard {...offer?.info}/></Link>))
                             }
                        </div>
                    </div>
                </div>
            </div>
        

    )
}

export default Restoffer