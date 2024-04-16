import { useState } from "react";
import Accordianwithoutsubcategories from "./Accordianwithoutsubcategories";

const Accordiansubcategories = ({ itemCards ,title
}) => {
    console.log(title);
    const [issubActive, setissubActive] = useState(false);
    return (
        <div className="subcategories_container">
            <div className="subcategories_accordian_item">
                <div className="subcategories_title" onClick={() => setissubActive(!issubActive)}>
                    <div>{title}</div>
                    <div>{issubActive ? '-' : '+'}</div>
                </div>
                <div>
                    {
                        issubActive && <div>
                            {itemCards.map((items) => (<Accordianwithoutsubcategories key={items?.card?.info?.id} {...items} />))}

                        </div>
                    }
                </div>
            </div>
            {itemCards.map((items) => (<Accordianwithoutsubcategories key={items?.card?.info?.id} {...items} />))}
        </div>
    )
}

export default Accordiansubcategories