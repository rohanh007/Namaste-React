import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [ListofRes, setListofRes] = useState(resList);

   return ( <div className="body-container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for your favorite food..."
        ></input>
        <button className="search-button">Search</button>
      </div>
      <div className="search-container">

       <button className="search-button" onClick={()=>{

              const filterdata=ListofRes.filter((res)=>res.data.avgRating > 4);
              setListofRes(filterdata);
              
       }}>Top rated restaurants</button>

      </div>
  
      <div className="cart-container">
        {/* <RestaurantCard resData={resList[0]}/>
        <RestaurantCard resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/>
        <RestaurantCard resData={resList[3]}/>
        <RestaurantCard resData={resList[4]}/>
        <RestaurantCard resData={resList[5]}/>
        <RestaurantCard resData={resList[6]}/>
        <RestaurantCard resData={resList[7]}/>
        <RestaurantCard resData={resList[8]}/>
        <RestaurantCard resData={resList[9]}/>
        <RestaurantCard resData={resList[10]}/>
        <RestaurantCard resData={resList[11]}/>
        <RestaurantCard resData={resList[12]}/> */}
 
        {ListofRes.map(restaurant=> 
        (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))}
      </div>
    </div>)
  };
 
export default Body ;