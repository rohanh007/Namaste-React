import { Curatimage } from "../../utils/constant";
import { Link } from "react-router-dom";
import Curatchoice from "../Curat_choice/Curatchoice";
const Curat = ({
  action,
  id,
  imageId,
  accessibility,

}) =>{
   console.log(action);
   console.log(imageId);
   console.log(accessibility);
   console.log("Action Link:", action?.link);

  return(
         <div className="">
      <div className="image-container">
      
       <img
          className="image"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`}
          alt={accessibility.altText}
          width="144" height="180"
        />

      </div>
  </div>
)};


export default Curat;