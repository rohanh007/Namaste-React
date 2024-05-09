import { useLocation } from "react-router-dom";
import RestaurantCard from "../RestaurantCard";


const Curatchoice=()=>{
    let { state}=useLocation();
    console.log(state);
     const  {
       link,
       text
     }=state.some ;
    

    return (
        <div>
            <div>
                <h1>{text}</h1>
            </div>
            <div>
                <RestaurantCard/>
            </div>
        </div>
    )
}

export default Curatchoice ;