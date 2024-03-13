import Curatshimmer from "./ShimmerComponent/Curatshimmer";
import Shimmer from "./ShimmerComponent/Shimmercard";

const Shimmerlist=()=>{
  const shimmerlen=12;
   const shimmerArray=Array.from({length:shimmerlen}, (_,index)=>index);
  
   return (
    <div className="shimmer_card_container">
    <div className="Curat_shimmer">
        <Curatshimmer/>
    </div>
    <div className="">
      {shimmerArray.map((index) => (
        <Shimmer key={index} />
      ))}
    </div>
  </div>
  );
};



export default Shimmerlist ;