import { useEffect, useState } from "react";
import { searchdata } from "../utils/constant";

const useSearch = () => {
    const [restsearch, setRestsearch] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(searchdata);

                if (!response.ok) {
                    throw new Error(`Fetch failed with status: ${response.status}`);
                }

                const jsonData = await response.json();
                const restaurantdata = jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
                setRestsearch(restaurantdata);
                console.log(jsonData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchdata();
    }, []); 

    useEffect(() => {
        console.log(restsearch); 
    }, [restsearch]);

    return restsearch;
};

export default useSearch;
