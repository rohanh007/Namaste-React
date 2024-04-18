import { Link } from "react-router-dom";
import Filtertypes from "../../Data/FIltertypes";
import { useState } from "react";
const Filtertype=({isfilter_open,isfilter_close })=>{
    const [getid ,setgetid]=useState(null);
     console.log(Filtertypes[0].subtype);
    const subtype= (Filtertypes)=>{
       for(let i=0;i<Filtertypes.length;i++)

       {
        if(Filtertypes[i].id===getid)
        {
            return Filtertypes[i]?.subtype ;
        }
       }
    }
    const data=subtype(Filtertypes);
    console.log(data);
    console.log(getid);
    if(!isfilter_close) return null;

    return (
        <div  className="filter_popup_container">
            <div className="filter_mini_container">
                  <div className="mini_header">
                     <h3>Filter</h3>
                  </div>
                  <div className="sm_seperaotar"></div>
                  <div  className="content_div">
                     <div className="left_side_container">
                      <div className="typeul">
                        {
                            Filtertypes.map((item)=>{
                                return <div key={item.id} className="type_li"><Link className="type_click" onClick={()=>{setgetid(item.id)}}>{item.name}</Link></div>
                            })
                        }
                      </div>
                     </div>
                     <div className="right_side_container">
                          {
                            data.map((data)=>{
                                  
                            })
                          }
                     </div>

                  </div>
            </div>
        </div>
    )
}

export default Filtertype;