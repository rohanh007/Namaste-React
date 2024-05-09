import { useEffect, useState } from "react"; 
import { DATA_API } from "../utils/constant";
const useCurat = (url) => {
    const [curatData, setCuratData] = useState(null);
     
    useEffect(() => {
        const fetchData = async (url) => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const jsonData = await response.json();
                async function checkJsonData(json) {
                    for (let i = 0; i < json?.data?.cards?.length; i++) {
                        let datawant = json?.data?.cards[i]?.card?.card?.imageGridCards?.info;
                        if (datawant !== undefined) {
                            return datawant;
                        }
                    }
                }
                console.log(jsonData);
                 const curatitems = await checkJsonData(jsonData);
                console.log(curatitems);
                setCuratData(curatitems);

            } catch (error) {
                console.error("Error fetching Curat data:", error.message);
            }

        };

        fetchData(url);
    },[]);
    console.log
    return curatData;
};

export default useCurat;
