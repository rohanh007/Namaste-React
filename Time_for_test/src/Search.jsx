// import { useEffect, useRef, useState } from "react";
// import("../template/css/Search.css")
// import Cuisinelist from "./SearchPage/Cuisinelist";
// import { DATA_API, POPULAR_SEARCH } from "../utils/constant";
// import useSearch from "../hooks/useSearch";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// const Search = () => {
//   const [Popularcuisine, SetPopularcuisine] = useState([]);
//   const [searchdata, setsearchdata] = useState([]);
//   const [filterdata ,setfilterdata]=useState([])
//   const restaurantsdata=useSearch();
//   console.log(restaurantsdata);
//   useEffect(() => {
//     Fetchdata = async () => {
//       try {
//         const data = await fetch(POPULAR_SEARCH);
      
//         if (!data.ok) {
//           throw new Error(data.status);
//         }
//         const json = await data.json();
//         // console.log(json);
//         async function checkJS(jsondata) {
//           for (let i = 0; i < json?.data?.cards.length; i++) {
//             let checkdata = jsondata?.data?.cards[i]?.card?.card?.imageGridCards?.info;
//             if (checkdata !== undefined) {
//               return checkdata;
//             }
//           }
//         }
//         const cuisine = await checkJS(json);
//         SetPopularcuisine(cuisine);
//         // console.log(Popularcuisine);

//       } catch (error) {
//         console.log(error);
//       }
//     }
//     Fetchdata();
//   },[]);

//   // const searchre=useSelector((store)=>store.Searchres)
//   // console.log(searchre);

//   const filterlistdata=restaurantsdata.filter((res)=>(
//     res.info.name.toLowerCase().includes(searchdata.toLowerCase()) ||
//     res.info.locality.toLowerCase().includes(searchdata.toLowerCase())
//    ))
   
// setfilterdata(filterlistdata);

//   const curat=useRef(null);
//    const handlethescroll =()=>{
//       if(curat.current)
//       {
//         curat.current.scrollBy({
//           left:200,
//           behavior:'smooth'
//         })
//       }
//    } 

// //  console.log(filterdata);
//   return (
//     <div className="search_container">
//       <div className="searchbox_container">
//         <div className="search_div search_css" data-testid="search-bar">
//           <form>
//             <div className="search_box_container">
//               <div className="search">
//                 <input type="text" className="input_box" placeholder="Search for restaurants and food" maxlength="200" value={searchdata} onChange={(e) => { setsearchdata(e.target.value) }} />
//               </div>
//               <div className="search_icon">
//                 <span className="icon-magnifier"></span>
//               </div>
//             </div>
//             {/* <input type="submit" hidden="" /> */}
//           </form>
//         </div>
//       </div>
//       <div className="Cuisine_container">
//         <div className="cuisine_inner">
//           <div className="Search_wrapper__lQvnw cuisine_wrapper" data-testid="search-pl-wrapper">
//             <div className="Search_divider__3ARUS cuisine_divider"></div>
//             <div className="Search_widgetsV2__27BBR">
//               <div></div>
//             </div>
//             {
//               searchdata.length === 0 ? (<div className="Search_widgetsV2__27BBR">
//                 <div className="styles_container__jxIGl">
//                   <div></div>
//                   <div data-testid="grid-header" className="styles_headerContainer__2UgeD">
//                     <div style={{ padding: "28px 0px 0px 16px" }}>
//                       <h2 className="styles_headerContainerTitle"><span>Popular Cuisines</span></h2>
//                       <span className="styles_headerContainerSubtitle" aria-hidden="true"></span>
//                     </div>
//                   </div>
//                   <div data-testid="grid-container" aria-hidden="false" style={{ padding: "12px 16px 24px", marginTop: "8px", marginBottom: "8px" }}>
//                     <div className="styles_slider" data-testid="grid-slider">
//                       <div className="styles_row" data-testid="grid-row" onMouseOver={handlethescroll}  ref={curat}>
//                         {
//                           Popularcuisine.map(cuisine => (<Link className="link" key={cuisine.id}><Cuisinelist imageId={cuisine.imageId} /></Link>))
//                         }
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>) : (

//                 <div>
                 
//                   <button className="search_subtypes" data-testid="autosuggest-item">
//                     <div className="search_subtypes_img">
//                       <img className="search_subtypes_img" imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" imageid="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" />
//                     </div>
//                     <div className="search_subtypes_div">
//                       <div className="search_subtypes_name">Pizza <b>Hut</b></div>
//                       <div className="search_subtypes_subname">Restaurant</div>
//                     </div>
//                   </button>
//                   <button className="search_subtypes" data-testid="autosuggest-item">
//                     <div className="search_subtypes_img">
//                       <img className="search_subtypes_img" imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" imageid="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" />
//                     </div>
//                     <div className="search_subtypes_div">
//                       <div className="search_subtypes_name">Pizza <b>Hut</b></div>
//                       <div className="search_subtypes_subname">Restaurant</div>
//                     </div>
//                   </button>
//                   <button className="search_subtypes" data-testid="autosuggest-item">
//                     <div className="search_subtypes_img">
//                       <img className="search_subtypes_img" imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" imageid="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" />
//                     </div>
//                     <div className="search_subtypes_div">
//                       <div className="search_subtypes_name">Pizza <b>Hut</b></div>
//                       <div className="search_subtypes_subname">Restaurant</div>
//                     </div>
//                   </button>
//                   <button className="search_subtypes" data-testid="autosuggest-item">
//                     <div className="search_subtypes_img">
//                       <img className="search_subtypes_img" imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" imageid="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" />
//                     </div>
//                     <div className="search_subtypes_div">
//                       <div className="search_subtypes_name">Pizza <b>Hut</b></div>
//                       <div className="search_subtypes_subname">Restaurant</div>
//                     </div>
//                   </button>
//                   <button className="search_subtypes" data-testid="autosuggest-item">
//                     <div className="search_subtypes_img">
//                       <img className="search_subtypes_img" imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" imageid="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" />
//                     </div>
//                     <div className="search_subtypes_div">
//                       <div className="search_subtypes_name">Pizza <b>Hut</b></div>
//                       <div className="search_subtypes_subname">Restaurant</div>
//                     </div>
//                   </button>

//                   <button className="search_subtypes" data-testid="autosuggest-item">
//                     <div className="search_subtypes_img">
//                       <img className="search_subtypes_img" imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" imageid="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7" />
//                     </div>
//                     <div className="search_subtypes_div">
//                       <div className="search_subtypes_name">Pizza <b>Hut</b></div>
//                       <div className="search_subtypes_subname">Restaurant</div>
//                     </div>
//                   </button>
                  

//                 </div>
//               )
//             }
//           </div>
//         </div>
//       </div>
//     </div>


//   )
// }

// export default Search;


import { useEffect, useRef, useState } from "react";
import("../template/css/Search.css")
import Cuisinelist from "./SearchPage/Cuisinelist";
import { DATA_API, POPULAR_SEARCH } from "../utils/constant";
import useSearch from "../hooks/useSearch";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
  const [Popularcuisine, SetPopularcuisine] = useState([]);
  const [searchdata, setsearchdata] = useState([]);
  const [filterdata ,setfilterdata]=useState([]);
  const restaurantsdata=useSearch();
  console.log(restaurantsdata);

  useEffect(() => {
    Fetchdata = async () => {
      try {
        const data = await fetch(POPULAR_SEARCH);
      
        if (!data.ok) {
          throw new Error(data.status);
        }
        const json = await data.json();
        
        async function checkJS(jsondata) {
          for (let i = 0; i < json?.data?.cards.length; i++) {
            let checkdata = jsondata?.data?.cards[i]?.card?.card?.imageGridCards?.info;
            if (checkdata !== undefined) {
              return checkdata;
            }
          }
        }
        const cuisine = await checkJS(json);
        SetPopularcuisine(cuisine);

      } catch (error) {
        console.log(error);
      }
    }
    Fetchdata();
  },[]);

  // Debounce function to delay filtering
  const debounce = (func, delay) => {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setsearchdata(value);
  };
// console.log(restaurantsdata[1].info.name)
  // Debounce the filtering function to avoid too many re-renders
  const debouncedFilter = useRef(debounce((value) => {
    console.log(value);
    const filterlistdata = restaurantsdata.filter((res) => (
      console.log("herlloooooo"),
      res.info.name.toLowerCase().includes(value.toLowerCase()) ||
      res.info.locality.toLowerCase().includes(value.toLowerCase())
    ));
    setfilterdata(filterlistdata);
  }, 300)).current;
 console.log(restaurantsdata);
 console.log(debouncedFilter("KFC"));
  useEffect(() => {
    debouncedFilter(searchdata);
    console.log(searchdata)
  }, [searchdata]);

  const curat = useRef(null);
  const handlethescroll = () => {
    if(curat.current) {
      curat.current.scrollBy({
        left:200,
        behavior:'smooth'
      });
    }
  };

   console.log(filterdata);
  return (
    <div className="search_container">
      <div className="searchbox_container">
        <div className="search_div search_css" data-testid="search-bar">
          <form>
            <div className="search_box_container">
              <div className="search">
                <input type="text" className="input_box" placeholder="Search for restaurants and food" maxLength="200" value={searchdata} onChange={handleSearchChange} />
              </div>
              <div className="search_icon">
                <span className="icon-magnifier"></span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="Cuisine_container">
        <div className="cuisine_inner">
          <div className="Search_wrapper__lQvnw cuisine_wrapper" data-testid="search-pl-wrapper">
            <div className="Search_divider__3ARUS cuisine_divider"></div>
            <div className="Search_widgetsV2__27BBR">
              <div></div>
            </div>
            {
              searchdata.length === 0 ? (
                <div className="Search_widgetsV2__27BBR">
                  <div className="styles_container__jxIGl">
                    <div></div>
                    <div data-testid="grid-header" className="styles_headerContainer__2UgeD">
                      <div style={{ padding: "28px 0px 0px 16px" }}>
                        <h2 className="styles_headerContainerTitle"><span>Popular Cuisines</span></h2>
                        <span className="styles_headerContainerSubtitle" aria-hidden="true"></span>
                      </div>
                    </div>
                    <div data-testid="grid-container" aria-hidden="false" style={{ padding: "12px 16px 24px", marginTop: "8px", marginBottom: "8px" }}>
                      <div className="styles_slider" data-testid="grid-slider">
                        <div className="styles_row" data-testid="grid-row" onMouseOver={handlethescroll}  ref={curat}>
                          {Popularcuisine.map(cuisine => (<Link className="link" key={cuisine.id}><Cuisinelist imageId={cuisine.imageId} /></Link>))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Render filtered data */}
                  {filterdata.map(item => (
                    <button className="search_subtypes" data-testid="autosuggest-item" key={item.id}>
                      <div className="search_subtypes_img">
                        <img className="search_subtypes_img" imageurl={item.imageUrl} imageid={item.id} alt="img renderer" src={item.imageUrl} />
                      </div>
                      <div className="search_subtypes_div">
                        <div className="search_subtypes_name">{item.info.name}</div>
                        <div className="search_subtypes_subname">{item.info.type}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
