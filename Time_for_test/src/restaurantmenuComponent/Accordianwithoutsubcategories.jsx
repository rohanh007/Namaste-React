import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { categories_img } from '../../utils/constant';
import useRestaurantname from '../../hooks/useRestaurantname';
import { addItem } from '../../Slices/Cartslice';

import('../../template/css/accordiancategories.css')
const Accordianwithoutsubcategories=({card})=>{
    const data=card;
    const  {
        imageId,
        name,
        price,
        description,
        ratings,
        defaultPrice
    }=card?.info
    
    const resId= useParams();
    console.log(resId);
    // const restinfo=useRestaurantname(resId);
    // console.log(restinfo); 
    
    const dispatch=useDispatch();
     const handleonclick=()=>{
       dispatch(addItem([data, resId]))
     }
    return (
        <div>
        <div data-testid="normal-dish-item" className="items_container">
          <div className="items_row">
            <p className="ScreenReaderOnly" tabIndex="0">
            </p>
            <div>
              <div aria-hidden="true" className="foodtype">
                <svg aria-hidden="true" height="16" width="16" className="foodtype_color">
                  <use xlinkHref="/food/sprite-1915a9c6.svg#vegVeg16"></use>
                </svg>
              </div>
              <div aria-hidden="true" className="items_name">{name}</div>
              <div className="items_price_container">
                <div aria-hidden="true" className="item_price_row">
                  <span className="item_price">
                    <div className="it_price">{price? price/100:defaultPrice/100}</div>
                  </span>
                </div>
              </div>
              <div className="items_rating_container">
                <div className="items_rating_row">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" fillColor="#116649">
                    <rect width="14" height="14" fill="white"></rect>
                    <path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#116649"></path>
                  </svg>
                </div>
                <div className="item_rating item_avg">{ratings?.aggregatedRating?.rating}</div>
                <div className="item_rating_count" style={{ marginLeft: '2px' }}>{`(${ratings?.aggregatedRating?.ratingCountV2 ? ratings?.aggregatedRating?.ratingCountV2 :0})`}</div>
              </div>
              <div className="item_description">
                <div aria-hidden="true" className="item_txt item_description">{description}</div>
              </div>
            </div>
            <div aria-hidden="true" className="item_card_container">
              <button aria-label="See more " className="item_card_btn">
                <img alt="" className="styles_itemImage" height="144" loading="lazy" width="156" src={categories_img+imageId}/>
              </button>
              <div className="item_operation_card">
                <div style={{ position: 'relative' }}>
                  <div className="item_operation">
                    <div className="item_cart_op">
                      <button className="item_btn btn_minus add-button-left-container">
                        <div className="item_sign">−</div>
                      </button>
                      <div className="item_add">
                        <button className="item_btn add_btn" >
                          <div className="item_sign">Add</div>
                        </button>
                        <button className="item_btn item_ad_btn add-button-center-container" onClick={handleonclick}>
                          <div className="item_sign">Add</div>
                        </button>
                        <button className="item_btn item_one">
                          <div className="item_sign">1</div>
                        </button>
                      </div>
                      <button className="sc-esYiGF sc-bbSZdi item_btn btn_plus add-button-right-container">
                        <div className="item_sign">+</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="categoriesdivider"></div>
        {/* <div></div> Remove this empty div */}
      </div>
      
  
    );
}


export default Accordianwithoutsubcategories;