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
  (

  <div className="">
      <div className="image-container">
      
       <img
          className="image"
          src={Curatimage + imageId}
          alt={accessibility.altText}
          width="144" height="180"
        />

      </div>
  </div>



)};


export default Curat;