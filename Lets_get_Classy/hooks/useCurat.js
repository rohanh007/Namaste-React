// import react from "react";
// import { useEffect, useState } from "react/cjs/react.production.min";

// const useCurat=(url)=>{
//     const [Curatdata , setCuratdata]=useState(null);


//     useEffect=()=>{
//         fetchdata();
//     }

//    const fetchdata= async()=>{
//       const data=await fetch(url);
//       const jsondata=data.json();
//       setCuratdata(jsondata);
//    }
//    return [Curatdata];
// }

// export default useCurat ;
import { useEffect, useState } from "react";

const useCurat = (url) => {
  const [curatData, setCuratData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setCuratData(jsonData);
      } catch (error) {
        console.error("Error fetching Curat data:", error.message);
      }
    };

    fetchData();
  }, [url]);

  return curatData;
};

export default useCurat;
