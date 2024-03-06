import { useEffect, useState } from "react"; const useCurat = (url) => {
    const [curatData, setCuratData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const jsonData = await response.json();
                console.log(jsonData);
                setCuratData(jsonData);
            } catch (error) {
                console.error("Error fetching Curat data:", error.message);
            }

            // async function checkJsonData(jsonData) {
            //     for (let i = 0; i < jsonData.data.cards.length; i++) {
            //         let datawant = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.info;
            //         if (datawant !== undefined) {
            //             return datawant;
            //         }
            //     }
            // }
            // const curatitems = await checkJsonData(jsonData);
            // console.log(curatitems);
            // setCuratData(curatitems);
        };

        fetchData();
    }, [url]);

    return curatData;
};

export default useCurat;
