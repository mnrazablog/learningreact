import React, {useState, useEffect } from 'react'
import RestaurantCard from './restaurantCard'

const RestaurantList = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchdata();
  })
  
  // fetchdata function declaration
  const fetchdata= async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.919654&lng=77.608945&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
   const json = await data.json();
      setListOfRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

  }

  return (
    <div>
      <h2 className="text-center">All Restaurants near me</h2>
      <div className="flex">
        {listOfRestaurant.map((restaurant, i) => (
          <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantList