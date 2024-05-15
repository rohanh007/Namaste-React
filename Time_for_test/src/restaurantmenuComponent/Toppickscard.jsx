import { useDispatch } from 'react-redux';
import { addItem } from '../../Slices/Cartslice';
import Cartbtn from '../Cartbtn/Cartbtn';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import('../../template/css/toppickcard.css')
const Toppickcard=({
    creativeId,
    title,
    dish
})=>{
    const resi=useParams();
    console.log(resi);
    const [getcount, setcount] = useState(parseInt(sessionStorage.getItem('count')) || 0);

    // if(!getcount)
    //     {
    //         setcount(0);
    //     }
    const handlecountplus = () => {

        setcount(getcount + 1);
    }
    const handlecountminus = () => {

        setcount(getcount - 1);
    }

    useEffect(() => {
       
        sessionStorage.setItem('count', getcount);
    }, [getcount]);
  console.log(getcount);
   
     
    const {
         name,
         price,
         defaultPrice,  
         description,
         id
    }=dish?.info;
    console.log(dish);
    const dispatch=useDispatch();
    const handlecart=()=>{
        dispatch(addItem([dish, resi,{'itemId':id}]))
    }
    return(
        <div className="tp_cardbox">
            <div className="tp_Card_container" style={{ backgroundImage: "url('https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/green_placeholder')" }}>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${creativeId}`} alt={name} aria-hidden="true" />
                <div className="tp_Card_meta" style={{ color: "rgb(255, 255, 255)" }}>
                    {/* <p className="ScreenReaderOnly">Veg item. Chilli Paneer Sizzle. Description: Pizza topped with spiced paneer, a spicy schezwan sauce, juicy tomato, crunchy onion & capsicum and cheesy dressing. Price: 179 rupees.</p> */}
                    <div className="tp_Card_metaFooter">
                        <div className="tp_Card_price">
                            <div className="tp_price">{(price ? price:defaultPrice)/100}</div>
                        </div>
                        <div className="tp_Card_addButton">
                            <div style={{ position: "relative" }}>
                                <div className="buttons_div">
                                    {
                                        getcount===0 &&(
                                            <div className="btn_div_minus" onClick={handlecountplus}>
                                               
                                                <div className="btn_add" >
                                                    <button className="btncss add_div">
                                                        <div className="add">Add</div>
                                                    </button>
                                                    <button className="btncss addcss add-button-center-container" onClick={handlecart}>
                                                        <div className="add">Add</div>
                                                    </button>
                                                    {/* <button className="btncss countcss">
                                                <div className="add">1</div>
                                            </button> */}
                                                </div>
                                                {/* <button className="btncss plussign add-button-right-container">
                                            <div className=" add">+</div>
                                        </button> */}
                                            </div>

                                        )
                                    }
                                    {
                                        getcount>0 &&(
                                            <div>
                                                <Cartbtn  additem={handlecountplus} removeitem={handlecountminus} count={getcount} countsend={handlecart} />  
                                            </div>
                                        )
                                    }
                                    
                                    <div>
                                        {/* <Cartbtn/> */}
                                    </div>
                                    <div className="txt_div">
                                        <div className="txt">Customisable</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>

    )
}

export default Toppickcard;