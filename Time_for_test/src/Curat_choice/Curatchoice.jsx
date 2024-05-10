import { Link, useLocation, useParams } from "react-router-dom";
import RestaurantCard from "../RestaurantCard";
import '../../template/css/collection.css';
import useCollectiondata from "../../hooks/useCollectiondata";
import { useParams } from "react-router-dom";


const Curatchoice=()=>{
    let { state}=useLocation();
    console.log(state);
    if (!state || !state.some) {
     
        return <div>No data available</div>;
    }
     const  {
       link,
       text,
       entityId
     }=state.some ;
    console.log(entityId);
    let collectionMatch = entityId.match(/collection_id=(\d+)/);
    let collection = collectionMatch ? collectionMatch[1] : null;

    let tags = entityId.match(/tags=([^&]+)/)[1];
    console.log(tags);
    console.log(collection);
    
    const data=useCollectiondata(collection ,tags);
    console.log(data);

    const collectionmasthead=data.filter((colhead)=>
        colhead?.card?.card?.['@type']==='type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead'
    )

    const collectionresdata=data.filter((colhead)=>
        colhead?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )
    // console.log(collectionmasthead);
     console.log(collectionresdata);

    return (
        <div className="collection_container">
            <div className="">
                {
                    collectionmasthead && (<div className="collection_header_c">
                        <div className="collection_title">{collectionmasthead[0]?.card?.card?.title}</div>
                        <div>
                            <div className="collection_description">
                                {collectionmasthead[0]?.card?.card?.description}
                            </div>
                        </div>
                    </div>)

                }
            </div>
            <div className="expo"><h2>Restaurants to explore</h2></div>
            <div className="collection_rescard">
                {
                     collectionresdata.map((res)=><Link className="link" key={res?.card?.card?.info?.id} to={'/restaurant/' +res?.card?.card?.info?.id}><RestaurantCard {...res?.card?.card?.info}  /></Link>
                    )
                }
            </div>
        </div>
    )
}

export default Curatchoice ;