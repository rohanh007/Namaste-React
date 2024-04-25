import { useSelector } from 'react-redux';
import '../../template/css/Cartwithdata.css';
const Cartwithdata=()=>{
     const cartdata= useSelector((store)=>(store.cart.items))
     console.log(cartdata);

     const {
        imageId,
        name,
     }=cartdata;


    return (
        <div className="cartwithdata_container">
            <button className="cartwithdata_btn_head">
                <span className="cartwithdata_img_head">
                    <img
                        className=""
                        imageurl={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/`}
                        height="50"
                        width="50"
                        imageid=""
                        alt="img renderer"
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/490629b70f89da8a5b93fc199ece335e"
                    />
                </span>
                <span className="cartwithdata_txt_head">
                    <div className="cartwithdata_txt_name">Pizza Hut</div>
                    <div className="cartwithdata_txt_city">Punawale</div>
                </span>
            </button>
            <div className="datacart_container">
                <div className="datacart_row">
                    <div className="empty_datacart"></div>
                    <div className="datacart_main_container">
                        <div>
                            <div className="datacart_row">
                                <div className="cartdatacontainer">
                                    <div className="offercartdata_row">
                                        <i className="icon-food" role="presentation" aria-hidden="true" style={{ lineHeight: '1.2' }}></i>
                                        <div className="datacart_txt_name">Margherita Pizza<div className="offer_data_txt">1 Free Delight for you</div></div>
                                    </div>
                                    <div className="offer_data_cart_container">
                                        <div className="offer_data_cart_row">
                                            <div className="offer_data_cart_div">
                                                <div className="offer_data_cart_count">1</div>
                                                <div className="offer_data_cart_free">Free</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* More items here */}
                            <div className="datacart_row_product">
                                <div className="cartdatacontainer">
                                    <div className="offercartdata_row">
                                        <i className="icon-food" role="presentation" aria-hidden="true" style={{ lineHeight: '1.2' }}></i>
                                        <div className="datacart_txt_name">Margherita Pizza<div className="offer_data_txt">1 Free Delight for you</div></div>
                                    </div>
                                    <div className="offer_data_cart_container">
                                        <div className="offer_data_cart_row">
                                            <div className="offer_data_cart_div">
                                                <div className="offer_data_cart_count_product">1</div>
                                                <div className="offer_data_cart">Free</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="_2JQh7" style={{ height: '51px' }}>
                            <textarea className="aeGJF" maxLength="140" style={{}}></textarea>
                            <div className="_2_0V3">Any suggestions? We will pass it on...</div>
                            <svg className="_3iLcN" viewBox="0 0 32 32">
                                <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"></path>
                            </svg>
                        </div> */}
                        {/* More components here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartwithdata;