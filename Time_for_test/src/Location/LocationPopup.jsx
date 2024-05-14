import { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { getDataApiUrl } from '../../utils/constant';
import { getLocationDataFromSessionStorage, setLocationDataToSessionStorage } from '../sessionStorage';
import('../../template/css/location.css');

const LocationPopup = ({ islocopen, islocclose }) => {
    const [SearchLocation, setSearchLocation] = useState('');
    const [positionData, setPositionData] = useState(null);



    // Function to handle successful retrieval of position
    const gotPosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // Make a request to reverse geocode the coordinates to get the area name
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.lat && data.lon) { // Check if data is not null and contains latitude and longitude
                    const placeName = data.display_name;
                    const newPositionData = { latitude: data.lat, longitude: data.lon, placeName };
                    setPositionData(newPositionData);
                    setLocationDataToSessionStorage(newPositionData); // Update session storage
                } else {
                    console.error("Invalid data format received from reverse geocoding API");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
    
    

    // Function to handle failure in retrieving position
    const notGotPosition = () => {
        console.log("There is an issue in retrieving the current location.");
    };

    // If the location popup is not open, return null
    if (!islocopen) {
        return null;
    }

    console.log(positionData);

    return (
        <div className="pop_overlay" onClick={islocclose}>
            <div className="location_row">
                <div className='location_main' onClick={(e) => { e.stopPropagation() }}>
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
                                    <Link
                                        className="link"
                                        to={'/'}
                                        state={{
                                            area: { ...positionData }
                                        }}
                                    >
                            
                                    
                                    <div className="location_div_btn" onClick={()=>{
                                        navigator.geolocation.getCurrentPosition(gotPosition, notGotPosition);
                                    }}>
                                       
                                        <div className="icon-location-crosshair"></div>
                                        <div className="location_txt_div">
                                            <div className="location_txt">Get current location</div>
                                            <div className="location_gps">Using GPS</div>
                                        </div>
                                    </div>
                                    </Link>
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

export default LocationPopup;
