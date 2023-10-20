import React from 'react'

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  console.log("Reastaurant Card is called ", restaurant);

  return (
    <div className="restaurant_card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vwezenkxqvmo1pcjfzti"
        alt={name}
        className="res_img"
      />
      <div className="res_card_content">
        <h3>{name}</h3>
        <p>
          {areaName}, {cuisines.join(",")}{" "}
        </p>
        <p>{avgRatingString} stars</p>
        <p>{costForTwo} </p>
      </div>
    </div>
  );
};

export default RestaurantCard