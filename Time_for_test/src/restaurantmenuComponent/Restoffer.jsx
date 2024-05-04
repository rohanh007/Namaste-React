import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Offercard from './Offercard';
import Shimmerlist from '../shimmer';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Shimmer from '../ShimmerComponent/Shimmercard';
import('../../template/css/restoffer.css');


const Restoffer = ({ offers }) => {
    const offerref=useRef(null);
    if(!offers)
    {
       return  <Shimmer/>
    }
  
   const handleofferprev=()=>{
    if(offerref.current)
    {
        offerref.current.scrollBy({
            left:-400,
            behavior:'smooth',
        });
    }
   };

    
   const handleoffernext=()=>{
    if(offerref.current)
    {
        offerref.current.scrollBy({
            left:400,
            behavior:'smooth',
        })
    }
   }

     
    return  (
        <div className="offer_container">
            <div className="offer_header">
                <button aria-label="click here to move previous" className="previous_btn" disabled="" onClick={handleofferprev}>
                    <div className="arrowcss margin">
                        <svg aria-hidden="true" height="16" width="16" className="arrowsvg">
                            <FaArrowLeft/>
                        </svg>
                    </div>
                </button>
                <button aria-label="click here to move next" className="next_btn" onClick={handleoffernext}>
                    <div className="arrowcss">
                        <svg aria-hidden="true" height="16" width="16" className="sc-iGgWBj kDDZoM">
                           <FaArrowRight/>
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
                    <div className="offer_box" >
                        <div className="offer_row" ref={offerref}>
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