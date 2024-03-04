import React from 'react';
const Curat =({
    

})=>(
  
    <div className="curat-container">
      <div className="container">
        <div className="inner-container">
          <h2 className="title">What's on your mind?</h2>
          <div className="placeholder"></div>
        </div>
      </div>
      <div className="content-container">
        <div className="row">
          {/* Repeat the following block for each item in your list */}
          <div className="item">
            <div>
              <a aria-label="restaurants curated for dosa" className="link">
                <div className="image-container">
                  <img
                    className="image"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png"
                    alt="restaurants curated for dosa"
                    width="144" height="180" 
                  />
                </div>
              </a>
            </div>
          </div>
          {/* Repeat the above block for each item in your list */}
        </div>
      </div>
    </div>
  
  

);

export default Curat;