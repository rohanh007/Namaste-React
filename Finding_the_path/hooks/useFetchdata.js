import { useEffect,useState } from "react";

const useFetch=(url)=>{

    const [listdata,setlistdata]=useState(null);

    useEffect(()=>{
        fetchdata(url);
    },[])

    const fetchdata=async (url)=>{
        const data=await fetch(url);
        const json=await data.json();



      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.success?.cards.length; i++) {
    
              // initialize checkData for Swiggy Restaurant data
            let checkData = json?.data?.success?.cards[i]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    
              // if checkData is not undefined then return it
            if (checkData !== undefined) {
                return checkData;
              }
            }
          }
        const listdata= await checkJsonData(json);
        setlistdata(listdata);

          
    }

}