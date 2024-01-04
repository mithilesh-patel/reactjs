import RES_LIST from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listofRes, setlistofRes] = useState([{
    info: {
      id: "3241",
      name: "Meghana Foods",
      cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
      locality: "Residency Road",
      areaName: "Residency Road",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      avgRating: 3.8,
    }


  },

  {
    info: {
      id: "3241",
      name: "KFC",
      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
      locality: "Residency Road",
      areaName: "Residency Road",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      avgRating: 4.6,
    }


  },
  {
    info: {
      id: "3241",
      name: "MFC",
      cloudinaryImageId: "nfieyqgxk1omknxfbluj",
      locality: "Residency Road",
      areaName: "Residency Road",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      avgRating: 4.3,
    }


  }

  ])

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList =listofRes.filter(arg => arg.info.avgRating>4.0)
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
