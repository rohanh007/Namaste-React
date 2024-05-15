import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Cartaddeddata=(info)=>{
    const [getcount, setcount]=useState(sessionStorage.getItem('count') || 0);
    const [getid ,setid]=useState(sessionStorage.getItem('id') || 0);
    const dispatch=useDispatch();
        console.log(info);
    const {
      name ,
      price,
     defaultPrice,
     id 
    }=info;
     
    useEffect(()=>{
        if (getcount === 0) {
            const itemIdToRemove =getid; 
            console.log(getid);
            dispatch({
                type: 'removeItem',
                payload: { itemId: itemIdToRemove }
            });
        }
},[getcount,getid])

    const handlesetid=(id)=>{
        setid(id);
    }
    const handlecountminus=()=>{
        setcount(getcount-1)
    } 
    const handlecountplus=()=>{
        setcount(getcount+1)
    }
    
     useEffect(()=>{
       sessionStorage.setItem('count',getcount);
       sessionStorage.setItem('cartitemid', getid)
     },[getcount,getid])
    
     console.log(getid);  
    return (
        <div>
            <div className='zeroheightdiv'></div>
            <div className='datacart_row_'>
                <div className='cartdatacontainer'>
                    <div className='offercartdata_row'>
                        {/* <i className="styles_icon__m6Ujp _2MJB6 icon-Veg styles_iconVeg__shLxJ" role="presentation" aria-hidden="true" style={{ lineHeight: '1.2' }}></i> */}
                        <div className='datacart_txt_name'>
                            {name}
                        </div>
                    </div>
                    <div className='offer_data_cart_container'>
                        <div className='offer_data_cart_row'>
                            <div className='cartadded_count' >
                                {/* <div className='cartadded_count_add'>
                                                                    ADD
                                                                </div> */}
                                <div className='cartadded_count_plus' onClick={()=>{handlesetid(id) ,handlecountplus()}}>
                                    +
                                </div>
                                <div className='cartadded_count_minus' onClick={()=>{handlesetid(id) , handlecountminus()} }>
                                    -
                                </div>
                                <div className='cartadded_count_data_minus' >
                                    {getcount}
                                </div>
                            </div>
                            <div className='cartadded_data_price'>
                                <span>{price ? (price / 100) : (defaultPrice / 100)}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Cartaddeddata;