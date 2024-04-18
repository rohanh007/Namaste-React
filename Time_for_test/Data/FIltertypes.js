const Filtertypes = [
    {
        name: 'Sort',
        id: '1',
        itemcheck:"checkbox",
        subtype: [
            {
                subname: 'Relevanc',
                subid: '11',
            },
            {
                subname: 'Delivery Time',
                subid: '12',
            },
            {
                subname: 'Rating',
                subid: '13'
            },
            {
                subname: 'Cost: Low to High',
                subid: '14'
            },
            {
                subname: 'Cost: High to Low',
                subid: '15'
            },

        ],

    },
    {
        name: 'Delivery Time',
        id: '2',
        subtype: [
            {
                subname: 'Fast Delivery',
                subid: '16',
            }


        ],
    },
    {
        name: 'Cuisines',
        id: '3',
        itemcheck:"checkbox",
        subtype: [
            { 
                id: 100,
                 name: "Andhra" },
            { 
                id: 101, 
                name: "Arabian" },
            { 
                id: 102, 
                name: "Asian" },
            { id: 103, name: "Awadhi" },
            { id: 104, name: "Bakery" },
            { id: 105, name: "Bangladeshi" },
            { id: 106, name: "Barbecue" },
            { id: 107, name: "Bengali" },
            { id: 108, name: "Beverages" },
            { id: 109, name: "Bihari" },
            { id: 110, name: "Biryani" },
            { id: 111, name: "Burger" },
            { id: 112, name: "Burgers" },
            { id: 113, name: "Cafe" },
            { id: 114, name: "Cakes and Pastries" },
            { id: 115, name: "Chaat" },
            { id: 116, name: "Chinese" },
            { id: 117, name: "Coffee" },
            { id: 118, name: "Combo" },
            { id: 119, name: "Continental" },
            { id: 120, name: "Default" },
            { id: 121, name: "Desserts" },
            { id: 122, name: "European" },
            { id: 123, name: "Fast Food" },
            { id: 124, name: "Goan" },
            { id: 125, name: "Grill" },
            { id: 126, name: "Healthy Food" },
            { id: 127, name: "Home Food" },
            { id: 128, name: "Hyderabadi" },
            { id: 129, name: "Ice Cream" },
            { id: 130, name: "Ice Cream Cakes" },
            { id: 131, name: "Ice cream" },
            { id: 132, name: "Indian" },
            { id: 133, name: "Indonesian" },
            { id: 134, name: "Italian" },
            { id: 135, name: "Italian-American" },
            { id: 136, name: "Jain" },
            { id: 137, name: "Japanese" },
            { id: 138, name: "Juices" },
            { id: 139, name: "Kashmiri" },
            { id: 140, name: "Kebabs" },
            { id: 141, name: "Kerala" },
            { id: 142, name: "Keto" },
            { id: 143, name: "Konkan" },
            { id: 144, name: "Korean" },
            { id: 145, name: "Lebanese" },
            { id: 146, name: "Lucknowi" },
            { id: 147, name: "Maharashtrian" },
            { id: 148, name: "Malaysian" },
            { id: 149, name: "Malwani" },
            { id: 150, name: "Mangalorean" },
            { id: 151, name: "Mexican" },
            { id: 152, name: "Middle Eastern" },
            { id: 153, name: "Momos" },
            { id: 154, name: "Mughlai" },
            { id: 155, name: "Navratri Special" },
            { id: 156, name: "Nepalese" },
            { id: 157, name: "North Eastern" },
            { id: 158, name: "North Indian" },
            { id: 159, name: "North indian" },
            { id: 160, name: "Oriental" },
            { id: 161, name: "Oriya" },
            { id: 162, name: "Paan" },
            { id: 163, name: "Pan-Asian" },
            { id: 164, name: "Pastas" },
            { id: 165, name: "Pizzas" },
            { id: 166, name: "Punjabi" },
            { id: 167, name: "Rajasthani" },
            { id: 168, name: "Rolls & Wraps" },
            { id: 169, name: "Rs.40 Off" },
            { id: 170, name: "Salads" },
            { id: 171, name: "Seafood" },
            { id: 172, name: "Sindhi" },
            { id: 173, name: "Singaporean" },
            { id: 174, name: "Snacks" },
            { id: 175, name: "South Indian" },
            { id: 176, name: "Steakhouse" },
            { id: 177, name: "Street Food" },
            { id: 178, name: "Sushi" },
            { id: 179, name: "Sweets" },
            { id: 180, name: "Tandoor" },
            { id: 181, name: "Thai" },
            { id: 182, name: "Thalis" },
            { id: 183, name: "Tibetan" },
            { id: 184, name: "Turkish" },
            { id: 185, name: "Vietnamese" },
            { id: 186, name: "Waffle" },
            { id: 187, name: "rolls" },
            { id: 188, name: "shawarma" },
            { id: 189, name: "American" }
        ]
    },
    {
        name: 'Explore',
        id: '4',
        itemcheck:"checkbox",
        subtype: [
            {
                subname: 'New on Swiggy',
                subid: '23',
            },
        ],
    },
    {
        name: 'Rating',
        id: '5',
        subtype: [
            {
                subname: 'Ratings 4.5+',
                subid: '24',
            },
            {
                subname: ' Ratings 4.0+',
                subid: '25',
            },
            {
                subname: 'Ratings 3.5+',
                subid: '26'
            }
        ],
    },
    {
        name: 'Veg/Nonveg',
        id: '6',
        itemcheck:"checkbox",
        subtype: [
            {
                subname: 'Pure Veg',
                subid: '27',
            },
            {
                subname: 'Non Veg',
                subid: '28',
            }
        ],
    }
]


export default Filtertypes;