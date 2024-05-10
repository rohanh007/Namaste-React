import { useState ,useEffect } from "react";
const useCollectiondata=(collection , tags)=>{
      
     const [collectiondata ,setCollectiondata]=useState([]);
     console.log(collection);
     console.log(tags);
     useEffect(()=>{
        const fetchdata= async()=>{
            try{
                const getdata= await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&collection=${collection}&tags=${tags}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
                 if(!getdata.ok)
                    {
                        throw new error((await getdata).status);
                    }
                const collectiondata= await getdata.json();
                console.log(collectiondata);
                const collectionheader=collectiondata?.data?.cards;
                

                
                setCollectiondata(collectionheader);

                 console.log(collectionheader);
            }catch(e)
            {
                console.log(e);
            }
        }
    fetchdata();

     },[collection,tags])
    
    return collectiondata ;
}

export default useCollectiondata ;