import { cuisinelist } from "../../utils/constant";
const Cuisinelist=(props)=>{
     const imageId=props.imageId;
    return (
    <div className="styles_slide" style={{ marginRight: "10px" }}>
  <div className="Carousel_slide">
    <div>
      <div  className="styles_container__1Nshr" style={{ width: "calc(-13.1765px + 5.88235vw)", height: "calc(-18.7245px + 8.35913vw)", minWidth: "calc(-13.1765px + 5.88235vw)", minHeight: "calc(-18.7245px + 8.35913vw)" }}>
        <button className="Ripple_container styles_containerImg__3AXGh">
          <img alt="" className="styles_img" loading="lazy" src={cuisinelist+imageId} />
        </button>
      </div>
      <div></div>
    </div>
  </div>
</div>

)
};
export default Cuisinelist;



