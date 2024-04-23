import '../template/css/Cart.css';
import Cartfooter from './Cartcomponent/Cartfooter';
const Cart = () => {
    return (
        <div>
            <div className="cart_main_container">
                <div className="cart_main_screen">
                    <div className="cart_empty_div"></div>
                    <div className='cart_main_header'>Your cart is empty</div>
                    <div className='cart_detail'>You can go to home page to view more restaurants</div>
                    <div class="cart_button">See restaurants near you</div>
                </div>
                <div className='cart_main_footer'>
                   <Cartfooter/>
                </div>
            </div>
            <div className="warning_popup popupwarning_div">
                <div className="internal_warning">
                    <div className="warning_internal_popup">
                        <div className="warning_img">
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cart_error_icon_ymvz3v" className="" width="20" height="20" />
                        </div>
                        <div className="warning_text">
                            <div className="warning_txt">Oops! Something wrong</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Cart;