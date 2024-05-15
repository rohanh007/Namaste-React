import { useSelector } from 'react-redux';
import '../../template/css/Cartwithdata.css';
import useRestaurantname from '../../hooks/useRestaurantname';
import { Link } from 'react-router-dom';
import Cartaddeddata from './Cartaddeddata';
const Cartwithdata = () => {
    const cartdata = useSelector((store) => (store.cart.items))
    console.log(cartdata);
    const count=sessionStorage.getItem('count');
    
    
    console.log(count);
    const {
        resId
    } = cartdata[0][1];
    console.log(resId);
    const getresname = useRestaurantname(resId);
    const {
        name,
        locality,
        cloudinaryImageId,

    } = getresname;
    console.log(name);
    console.log(locality);
    console.log(cloudinaryImageId);

    return (
        <div className="cartwithdata_container">
            <div className='cartwithdata_row'>
                <button className="cartwithdata_btn_head">
                    <span className="cartwithdata_img_head">
                        <img
                            className=""
                            imageurl={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${cloudinaryImageId}`} 
                            height="50"
                            width="50"
                            imageid=""
                            alt="img renderer"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${cloudinaryImageId}`}                        />
                    </span>
                    <span className="cartwithdata_txt_head">
                        <div className="cartwithdata_txt_name">{name}</div>
                        <div className="cartwithdata_txt_city">{locality}</div>
                    </span>
                </button>
                <div className='datacart_container'>
                    <div className='datacart_row'>
                        <div className='empty_datacart'></div>

                        {/* write map function inside this div */}
                        <div className='datacart_main_container'>
                            <div>
                                {
                                    cartdata.map((data, index) => (
                                        <Link key={index}><Cartaddeddata {...data[0]?.info} /></Link>
                                    ))


                                }

                                <div className="cartadded_data_bill">
                                    <div className="cartadded_bill_head">Bill Details</div>
                                    <div className="cartadded_bill_div_exp">
                                        <div className="cartadded_bill_exp_text"><span>Item Total</span></div>
                                        <div className="cartadded_bill_exp_price"><span className=""><span></span><span className="cartadded_bill_price">427.62</span></span></div>
                                    </div>
                                    <div className="cartadded_bill_div_exp">
                                        <div className="cartadded_bill_exp_text">
                                            <div>Delivery Fee | 4.4 kms<div className="cartadded_bill_logo"><span className="icon-info"></span></div></div>
                                        </div>
                                        <div className="cartadded_bill_exp_price"><span className=""><span></span><span className="cartadded_bill_price">55</span></span></div>
                                    </div>
                                    <div className="cartadded_bill_space_between"></div>
                                    <div className="cartadded_bill_div_exp">
                                        <div className="cartadded_bill_exp_text"><span>Delivery Tip</span></div>
                                        <div className="cartadded_bill_exp_price"><span className="" style={{ color: 'rgb(228, 109, 71)' }}><span></span><span>Add tip</span></span></div>
                                    </div>
                                    <div className="cartadded_bill_div_exp">
                                        <div className="cartadded_bill_exp_text"><div>Platform fee<div className="cartadded_bill_logo"><span className="icon-info"></span></div></div></div>
                                    </div>
                                    <div className="cartadded_bill_exp_price"><span className=""><span></span><span className="cartadded_bill_price">5</span></span></div>
                                    <div className="cartadded_bill_div_exp">
                                        <div className="cartadded_bill_exp_text"><div>GST and Restaurant Charges<div className="cartadded_bill_logo"><span className="icon-info"></span></div></div></div>
                                    </div>
                                    <div className="cartadded_bill_exp_price"><span className="">       <span className="cartadded_bill_price">61.28</span></span></div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="post_bill_space"></div>
            <div className="cartadded_bill_total_div">
                <div>TO PAY</div>
                <div className="cartadded_bill_price_total">549</div>
            </div>

        </div>




    )
}

export default Cartwithdata;