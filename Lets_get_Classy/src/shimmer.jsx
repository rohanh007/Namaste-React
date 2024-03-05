const Shimmer =()=>(

  <div className="card">
        <div className="shimmerBG media">
          {/* <img className="restaurant-image" /> */}
          {/* <div className="discount-badge"></div> */}
        </div>
        <div className="shimmer-content">
          <div className="shimmerBG title-line"></div>
          <div className="shimmerBG title-line end">
            {/* <span className="rating"></span>
            <span className="separator">•</span>
            <span className="delivery-time"></span> */}
          </div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line end"></div>
        </div>
    </div>
  
)

const Shimmerlist=()=>{
  const shimmerlen=10;
   const shimmerArray=Array.from({length:shimmerlen}, (_,index)=>index);
  
   return (
    <div>
      {shimmerArray.map((index) => (
        <Shimmer key={index} />
      ))}
    </div>
  );
};



export default Shimmerlist ;