// import { useState, useEffect } from "react";
// import { useParams } from "react-router"



// export default function SearchFood(){
    
//     const {id} = useParams();
    
//     const [food,setFood] = useState("")
//     const [RestData, setRestData] = useState([]);


//     useEffect(()=>{
        
//             async function fetchData() {
               
//                const proxyServer = "https://cors-anywhere.herokuapp.com/"
//                const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
//                const response = await fetch(proxyServer+swiggyAPI);
//                const data = await response.json();
//                const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//                const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
//                console.log(filterData);
//                setRestData(filterData);
//             }


           
//             fetchData();
//         },[])




//     return(
//         <div className="w-[80%] mx-auto mt-20">
//             <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"  placeholder="Search here" onChange={(e)=>setFood(e.target.value)}></input>
//         </div>
//     )
// }
// new functionality added
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function SearchFood() {
    const { id } = useParams();
    const [food, setFood] = useState("");
    const [RestData, setRestData] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter((items) => 'title' in items?.card?.card);
            setRestData(filterData);
            setFilteredItems([]); // initially empty
        }

        fetchData();
    }, [id]);

    useEffect(() => {
        if (food.trim() === "") {
            setFilteredItems([]); // no search → empty
            return;
        }

        const result = [];

        RestData.forEach(section => {
            section.card.card.itemCards?.forEach(item => {
                if (item.card.info.name.toLowerCase().includes(food.toLowerCase())) {
                    result.push(item.card.info);
                }
            });
        });

        setFilteredItems(result);
    }, [food, RestData]);

    return (
        <div className="w-[80%] mx-auto mt-20">
            <input
                className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border mb-8"
                placeholder="Search here"
                onChange={(e) => setFood(e.target.value)}
                value={food}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredItems.length === 0 && food && (
                    <p className="text-xl text-gray-500">No food found...</p>
                )}

                {filteredItems.map(item => (
                    <div
                        key={item.id}
                        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                    >
                        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                        {item.imageId && (
                            <img
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                                alt={item.name}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                        )}
                        <p className="mt-2 text-green-600 font-bold">₹{item.price / 100}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
