import RestaurantCard from "./RestaurantCard";
import Shimmerlist from "./shimmer";
import resList from "../utils/mockdata";
import { useDispatch } from "react-redux";
import { useState ,useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { DATA_API} from "../utils/constant";
import { addsearchres } from "../Slices/Searchlistslice.js";
import Curat from "./Bodycomponent/Curat";
import useCurat from "../hooks/useCurat";
import('../template/css/restmenu.css');
import('../template/css/restoffer.css');

const Body = () => {
  const [ListofRes, setListofRes] = useState([]);
  const [filterListofRes, setfilterListofRes] = useState([]);
  const [searchtext ,setsearchtext]= useState('');
  const curatlist=useCurat(DATA_API);
  const containerref=useRef(null);
  console.log(curatlist);
  
   useEffect(()=>{
      fetchdata();
   }, []);

   const handlePreviousClick = () => {
    if (containerref.current) {
        containerref.current.scrollBy({
            left: -200, 
            behavior: 'smooth',
        });
    }
};
 const handlenextclick=()=>{
    if(containerref.current)
    {
        containerref.current.scrollBy({
            left:200,
            behavior:'smooth'
        })
    }
 }
// console.log(ListofRes);
  const fetchdata = async () => {
    const data = await fetch(DATA_API);
    //console.log(data);
    // if (!data.ok) {
    //   console.error(`Error: ${data.status} - ${data.statusText}`);
    //   const textResponse = await data.text();
    //   console.log(textResponse);
    //   // Handle error gracefully, return or throw an error
    //   return;
    // }
    const json = await data.json();
    //console.log(json);
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
      //console.log(listdata);
      setListofRes(listdata);
      setfilterListofRes(listdata);

  

  };

  
   
  
   
  //   if(ListofRes.length==0)
  // {
  //  return <Shimmer/>;
  // }
   const areaname=ListofRes[0]?.info?.areaName;
   return (ListofRes.length)===0? (
    <Shimmerlist/>
  ) : (<div className="body-container" >
    <div className="container">
    <div className="offer_header">
        <button aria-label="click here to move previous" className="previous_btn" disabled="" >
          <div className="arrowcss margin">
          
            <svg aria-hidden="true" height="16" width="16" className="arrowsvg">
               <FaArrowLeftLong/>
            </svg>
          </div>
        </button>
        <button aria-label="click here to move next" className="next_btn" onClick={handlenextclick}>
          <div className="arrowcss">
            <svg aria-hidden="true" height="16" width="16" className="sc-iGgWBj kDDZoM">
            <FaArrowRightLong/>
            </svg>
          </div>
        </button>
      </div>
      <div className='tp_headerb_row'>
        <div class="tp_header">
          <div class="tp_block">
            <h2 class="title">What's on your mind?</h2>
            <div class="tp_empty"></div>
          </div></div>
      </div>
      <div className="curat-container" ref={containerref}>
        {curatlist.map(curatdishes => (<Link className="link" key={curatdishes.id} to=""><Curat {...curatdishes} /></Link>))}
      </div>
    </div>
    {/* <div className="filter"> */}

    {/* <div className="search-container">
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
      </div> */}
    {/* <div className="search-container">

       <button className="search-button" onClick={()=>{

              const filterdata=ListofRes.filter((res)=>res.info.avgRating > 4);
              setListofRes(filterdata);
              
       }}>Top rated restaurants</button>

      </div> */}
    {/* </div> */}

    <div className="title-body">
      <h2 className="res-title">Restaurants with online food delivery in {areaname}</h2>
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

      {filterListofRes.map(restaurant =>
      (<Link className="link" key={restaurant?.info?.id} to={'/restaurant/' + restaurant?.info?.id}><RestaurantCard {...restaurant?.info}  /></Link>
      ))}
    </div>
  </div>)
};

export default Body;




