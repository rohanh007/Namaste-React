import { useState } from "react";
import Accordianwithoutsubcategories from "./Accordianwithoutsubcategories";
import Accordiansubcategories from "./Accordiansubcategories";
import { useParams } from "react-router-dom";
import('../../template/css/restoffer.css')
const Accordian = ({ card}) => {
    console.log(card);
   

    const id =useParams();
    console.log(id);
    const {
        title,
        "@type": cardtype,
        itemCards,
        categories,
    } = card || {};
    const [isActive, setActive] = useState(false);


    return (
        <div className="accordian">
            <div className="accordian_item">
                <div className="accordian_title" onClick={() => setActive(!isActive)}>

                    <h3 className="categories_title">{title} </h3>
                    {/* {categories && categories.itemCards
                        ? categories.itemCards.length
                        : itemCards && itemCards.length
                            ? itemCards.length
                            : 0} */}
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                <div>
                    {isActive && <div>
                        {cardtype == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
                            <div>
                                {itemCards.map((items) => (<Accordianwithoutsubcategories key={items?.card?.info?.id} {...items} />))}
                            </div>
                        ) : cardtype == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
                            <div>

                                {
                                    categories.map((itemcategories) => (<Accordiansubcategories {...itemcategories} />))
                                }
                            </div>
                        ) : (
                            <div>Accoridan shows error </div>
                        )
                        }

                    </div>}
                </div>
            </div>
            <div class="space_div"></div>
            <div class="sperator_accordian"></div>
        </div>
    )
}


export default Accordian;