import {Curatimage} from "../../utils/constant";
const Curat =({
  action,
  id,
  imageId,
  accessibility,  
  
} )=>(
  
    <div className="curat-container ">
      <div className="content-container">
        <div className="row">
          <div className="item">
            <div>
                <div className="image-container">
                  <img
                    className="image"
                    src={Curatimage+imageId}
                    alt={accessibility.altText}
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