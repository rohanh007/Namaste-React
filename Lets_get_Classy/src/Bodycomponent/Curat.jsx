import React from 'react';
const Curat =({
  action,
  id,
  imageId  
  
} )=>(
  
    <div className="curat-container">
      <div className="content-container">
        <div className="row">
          <div className="item">
            <div>
                <div className="image-container">
                  <img
                    className="image"
                    src={action.link}
                    alt="restaurants curated for dosa"
                    width="144" height="180" 
                  />
                </div>
                <div className="curat_title">
                  <h5>{action.text}</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  

);

export default Curat;