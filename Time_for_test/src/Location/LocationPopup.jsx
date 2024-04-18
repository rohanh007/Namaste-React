import { Link } from 'react-router-dom';

import('../../template/css/location.css');
const LocationPopup = ({ islocopen, islocclose }) => {
    if (!islocopen) {
        return null;
    }
    return (
        <div className="pop_overlay" onClick={islocclose}>
            <div className="location_row" >
                <div className='location_main' onClick={(e) => { e.stopPropagation() }} >
                    <div className='location_form'>
                        <div className='close_click'><Link onClick={islocclose}>close</Link></div>
                        <div className="location_form">
                            <div className="location_main_form ">
                                <input className="input_txt input_body input_pd" type="text" name="" placeholder="Search for area, street name.." value="" />
                                <div className="input_emp_div input_emp_div_cl"></div>
                                <label className="input_label input_pl"></label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default LocationPopup