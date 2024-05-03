import { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

import('../../template/css/location.css');

const LocationPopup = ({ islocopen, islocclose }) => {
    const [SearchLocation , setSearchLocation]=useState('');
    const [getPosition ,setPosition]=useState('')   ;
    const [getlongitude,setlongitude]=useState('');
    const gotPosition=(position)=>{
        setPosition(position);
    }
    const Notgotposition=()=>{
        console.log("there is issue");
    }
     if (!islocopen) {
        return null;
    }
 console.log(getPosition);
    
    return (
        <div className="pop_overlay" onClick={islocclose}>
            <div className="location_row" >
                <div className='location_main' onClick={(e) => { e.stopPropagation() }} >
                    <div className='location_form'>
                        <div className='close_click'><Link onClick={islocclose}><IoMdClose/></Link></div>
                         <div className='comman_both location_com'>
                            <div className="location_main_form ">
                                <input className="input_txt input_body input_pd" type="text" name="" placeholder="Search for area, street name.." value={SearchLocation}  onChange={(e)=>{setSearchLocation(e.target.value.trim())}}/>
                                <div className="input_emp_div input_emp_div_cl"></div>
                                <label className="input_label input_pl"></label>
                            </div>
                            </div>
                        <div className='comman_both'>
                            <div className="location_pick_container">
                                <div className="location_pick_row">
                                    <div className="location_div_btn" onClick={()=>{
                                        navigator.geolocation.getCurrentPosition(gotPosition,Notgotposition)
                                    }}>
                                        <div className="icon-location-crosshair"></div>
                                        <div className="location_txt_div">
                                            <div className="location_txt">Get current location</div>
                                            <div className="location_gps">Using GPS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationPopup