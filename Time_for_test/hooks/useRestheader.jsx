import { useEffect, useState } from "react/cjs/react.production.min"

const useRestheader=(url)=>{
  const [Restheader ,setRestheader]=useState([]);
  
  useEffect(()=>{
      const fetchheader=async ()=>{
        try{
        const getdata= await fetch(url) ;
        if(!getdata.ok)
        {
            throw new Error(`Http Response Error :${getdata.status}`);
        }
        const headerdata=getdata.json() ;
        console.log(headerdata);
         setRestheader(headerdata);
        }catch{
               console.error("error message :" ,error.message)
        }
      }
      fetchheader();
  },[url])
  
  return [Restheader, setRestheader];

}

export default useRestheader ;

