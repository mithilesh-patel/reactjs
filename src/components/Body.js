import { RES_LIST } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {
            RES_LIST.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
  
          }
  
        </div>
      </div>
    );
  };
  
  
  export default Body;
  