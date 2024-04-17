
import { useState } from 'react';
import('../../template/css/Signin.css')
const SignIn =({isOpen ,isClose ,children})=>{
    const [isSignup ,setisSignup]=useState(false);
    const [isreferral ,setisreferral]=useState(false);
    const Signuptoggle=()=>{
        setisSignup(!isSignup);
    }

    const Referraltoggle=()=>{
        setisreferral(!isreferral);
    }
    if (!isOpen) return null;
    return (
        <div className='pop_overlay'>
        <div className="signin_container">
            <div className="signin_row" style={{ left: "auto", right: "0px", transform: "translate(0%, 0px)" }}>
                <div className="signin_page">
                    <div className="">
                        <div style={{ paddingLeft: "40px", paddingRight: "160px", width: "562px" }}>
                            <div className="signin_logo" style={{ height: "130px" }}>
                                <span className="signin_header_span icon-close-thin" onClick={isClose}>close</span>
                                <div className="signin_txt">{isSignup ? ("SignUp"):("Login")}</div>
                                <div className="signin_div"></div>
                                <div className="litle_txt">or <a className="signup" onClick={Signuptoggle} >{isSignup ? ("login "):("Create account")}</a></div>
                                <img className="signin_img" imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" width="100" height="105" imageid="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" />
                            </div>
                            <form>
                                <div>
                                    <div className="_3Um38 signin_form_border">
                                        <input className="input_box" type="tel" name="mobile" id="mobile" tabindex="1" maxlength="10" autocomplete="off" value=""  />
                                        <div className="input_box_right"></div>
                                        <label className="sigin_placeholder " for="mobile">Phone number</label>
                                    </div>
                                    {
                                        isSignup && (
                                                <div>
                                                    <div className="_3Um38 signin_form_border">
                                                        <input className="input_box" type="tel" name="mobile" id="mobile" tabindex="1" maxlength="10" autocomplete="off" value="" />
                                                        <div className="input_box_right"></div>
                                                        <label className="sigin_placeholder " for="mobile">Name</label>
                                                    </div>
                                                    <div className="_3Um38 signin_form_border">
                                                        <input className="input_box" type="tel" name="mobile" id="mobile" tabindex="1" maxlength="10" autocomplete="off" value="" />
                                                        <div className="input_box_right"></div>
                                                        <label className="sigin_placeholder " for="mobile">Email</label>
                                                    </div>   
                                               
                                                 {isreferral ? (
                                                    <div className="_3Um38 signin_form_border">
                                                        <input className="input_box" type="tel" name="referral_code" id="referral_code" tabindex="1" maxlength="10" autocomplete="off" value="" />
                                                        <div className="input_box_right"></div>
                                                        <label className="sigin_placeholder" htmlFor="referral_code">Referral Code</label>
                                                    </div>
                                                ) : (
                                                    <div className="signin_referal">
                                                        <div className='referal_txt'><a className='referal_link' onClick={Referraltoggle}>Have a referral code ?</a></div>
                                                    </div>
                                                )}
                                           </div>
                                        )
                                    }
                                </div>
                                <div className="button_container">
                                    <a className="sigin_link"><input type="submit" style={{ display: "none" }} />{isSignup ? ("Continue"):("Login")}</a>
                                </div>
                                <div className="signin_tc">By clicking on Login, I accept the <a className="IBw2l" href="/terms-and-conditions">Terms &amp; Conditions</a> &amp; <a className="IBw2l" href="/privacy-policy">Privacy Policy</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SignIn;