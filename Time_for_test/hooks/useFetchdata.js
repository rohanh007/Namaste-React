import { useEffect,useState } from "react";

const useFetch=(url)=>{

    const [listdata,setlistdata]=useState(null);

    useEffect(()=>{
        fetchdata(url);
    },[])

    const fetchdata=async (url)=>{
        const data=await fetch(url);
        const json=await data.json();

       console.log(json);
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

      
      const list=await checkJsonData(json);
      
      setlistdata(list);

     return [listdata];
          
    }

}

export default useFetch ;