import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import resList from "../utils/mockdata";
import { useState ,useEffect } from "react";
const Body = () => {
  const [ListofRes, setListofRes] = useState([]);
  const [filterListofRes, setfilterListofRes] = useState([]);
  const [searchtext ,setsearchtext]= useState('');
  
   useEffect(()=>{
      fetchdata();
   },[]);


// console.log(ListofRes);
    const fetchdata =async ()=>{
       const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING");
      //  console.log(data);
       const json =await data.json();

       async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

       //console.log(json);
      const listdata=await checkJsonData(json);
       console.log(listdata);
      setListofRes(listdata);
      setfilterListofRes(listdata);
    }
  //   if(ListofRes.length==0)
  // {
  //  return <Shimmer/>;
  // }

   return (ListofRes.length)===0? (
   <Shimmer/>
   ): ( <div className="body-container">
    {/* <div className="filter"> */}
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          value={searchtext}
          placeholder="Search for your favorite food..."
          onChange={(e)=>{
              setsearchtext(e.target.value);
          }}
        ></input>
        <button className="search-button"  onClick={()=>{
          
            const filterListofRes = ListofRes.filter((res)=>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              
            );
             setfilterListofRes(filterListofRes);
             console.log(filterListofRes);
        }}>Search</button>
      </div>
      <div className="search-container">

       <button className="search-button" onClick={()=>{

              const filterdata=ListofRes.filter((res)=>res.info.avgRating > 4);
              setListofRes(filterdata);
              
       }}>Top rated restaurants</button>

      </div>
      {/* </div> */}
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
 
        {filterListofRes.map(restaurant=> 
        (<RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
))}
      </div>
    </div>)
  };
 
export default Body ;