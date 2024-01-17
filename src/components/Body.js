// import RES_LIST from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [listofRes, setlistofRes] = useState([]);

  useEffect(() => {
    fetchdata();
  }, [])


  const fetchdata = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const jsondata = await data.json();
    console.log(jsondata);
    setlistofRes(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(listofRes.length ===0){
    return <Shimmer />;
  }


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listofRes.filter(arg => arg.info.avgRating > 4.0)
          setlistofRes(filteredList);
        }}>
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
