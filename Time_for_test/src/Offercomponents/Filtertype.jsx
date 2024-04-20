import { Link } from "react-router-dom";
import Filtertypes from "../../Data/FIltertypes";
import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import ('../../template/css/Filter_css_swiggy.css');
const Filtertype=({isfilter_open,isfilter_close })=>{
    const [getid ,setgetid]=useState(null);
    const [getsubtype,setsubtype]=useState(null);
    
       useEffect(()=>{
               const subtypedata=()=>{

                   for(let i=0;i<Filtertypes.length;i++)
                   {
                    if(Filtertypes[i].id===getid){
                        let subtypedata= Filtertypes[i].subtype;
                    }
                   }
                   return subtypedata
               }
               const datatypes=subtypedata();
               setsubtype(datatypes);
               console.log(datatypes);
       },[getid])
      if(!getsubtype)
      {
        return null;
      }

    console.log(getsubtype);
  
    console.log(getid);
    if(!isfilter_close) return null;

    return (
        <div  className="filter_popup_container">
            {/* <div className="filter_mini_container">
                  <div className="mini_header">
                     <h3>Filter</h3>
                     <span className="" onClick={isfilter_close}>close</span>
                  </div>
                  <div className="sm_seperaotar"></div>
                  <div  className="content_div">
                     <div className="left_side_container">
                      <div className="typeul">
                        {
                            Filtertypes.map((item)=>{
                                return <div key={item.id} className="type_li"><Link className="type_click" onClick={()=>{setgetid(item.id) ,setsubtype(item.subtype)}}>{item.name}</Link></div>
                            })
                        }
                      </div>
                     </div>
                     <div className="right_side_container">
                          {
                            getsubtype.map((data)=>{
                               return <div key={data.id} className="type_li"><Link className="type_click" >{data.subname}</Link></div>
                            })
                          }
                     </div>

                  </div> */}
            {/* </div> */}
       
        
        </div>
    )
}

export default Filtertype;