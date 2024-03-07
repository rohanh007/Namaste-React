import { Curatimage } from "../../utils/constant";
const Curat = ({
  action,
  id,
  imageId,
  accessibility,

}) => (

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



);

export default Curat;