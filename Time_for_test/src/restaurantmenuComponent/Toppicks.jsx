import useToppick from '../../hooks/useToppicks';
import Shimmer from '../ShimmerComponent/Shimmercard';
import Toppickcard from './Toppickscard';

import('../../template/css/restmenu.css');
import('../../template/css/restoffer.css');
const Toppicks=({carousel})=>{
    const toppick=carousel;
    if(!toppick){
        return (
            <div></div>
        )
    }
    return (
        <div className="top_picks_container">
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
            <div className='tp_headerb_row'>
                <div class="tp_header">
                    <div class="tp_block">
                        <h2 class="title">Top Picks</h2>
                        <div class="tp_empty"></div>
                    </div></div>
            </div>
            <div className="top_pick_cards">
              <div className="top_pick_card">
                {
                     toppick.map((card)=>(<Toppickcard key={card?.bannerId} {...card}/>))
                }
              </div>
            </div>
            <div class="space_div"></div>
            <div class="sperator_accordian"></div>
        </div>
    )
}

export default Toppicks;