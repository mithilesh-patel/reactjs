import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    // here we are defining a const. It is same as  resData = props.resData
  
    const {
      name,
      locality,
      areaName,
      costForTwo,
      cuisines,
      avgRating,
      totalRatingsString,
      cloudinaryImageId,
    } = resData.info;
    // the above is same as   ==>  name= resData.info.name
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL + cloudinaryImageId
          }
          alt=""
        />
        <h3>{name}</h3>
        <h3>Locality :  {locality}</h3>
        <h3>Area Name  : {areaName}</h3>
        <h3> Cost For Two : {costForTwo}</h3>
        <h3> Cuisines : {cuisines.join(", ")}</h3>
        <h3>Avg Rating : {avgRating}</h3>
        <h3>Total Ratings : {totalRatingsString}</h3>
      </div>
    );
  };


  export default RestaurantCard;