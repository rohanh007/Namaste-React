const Cartfooter=()=>{
    return (
        <div className="cart_footer">
            <div className="footer_left_side_container">
                <div>
                    <div className="footer_first_small_container">
                        <div className="fs_msg">
                            <div className="fs_txt">Oops, something went wrong. Please clear your cart and try again.</div>
                        </div>
                        <button className="retry_btn">Retry</button>
                        <div className="fs_logo_container">
                            <span className="fs_span fs_logo"></span>
                        </div>
                    </div>
                    <div className="footer_first_small_container">
                        <div className="fs_msg">
                            <div className="fs_txt">Account</div>
                        </div>
                        <div className="footer_second_container">
                            <div className="ss_txt">To place your order now, log in to your existing account or sign up.</div>
                            <img className="ss_img" imageid="Image-login_btpq7r" height="140" width="147" imageurl="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r" />
                            <div className="btn_ss_container">
                                <div className="btn_txt_name btn_ss_txt">
                                    <div className="btn_click_ss">Have an account?</div>
                                    <div className="btn_login_ss">LOG IN</div>
                                </div>
                                <div className="second_ss_btn_container">
                                    <div className="second_ss_txt">New to Swiggy?</div>
                                    <div className="btn_login_ss">SIGN UP</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="footer_first_small_container">
                        <div className="fs_msg">
                            <div className="fs_txt">Payment</div>
                        </div>
                        <div className="fs_logo_container">
                            <span className="fs_span fs_logo"></span>
                        </div>
                    </div>
                    <div className="footer_first_small_container">
                        <div className="fs_msg">
                            <div className="fs_txt">Address</div>
                        </div>
                        <div className="fs_logo_container">
                            <span className="fs_span fs_logo"></span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer_right_side_container">
                <div className="footer_right_side_row">
                    <div className="">
                        <div className="footer_main_cart">
                            <div className="footer_empty_cart">Cart Empty</div>
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" className="footer_img_ca" alt="empty cart img" />
                            <div className="footer_text-_ep">Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cartfooter