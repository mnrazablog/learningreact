import React from 'react'

const RestaurantCard = () => {
  return (
    <div className="restaurant_card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vwezenkxqvmo1pcjfzti"
        alt=""
        width={350}
        height={200}
      />
      <h3>Jashn The Restaurant</h3>
      <p>North Indian, Biryani, Chinese, Fast Food Purulia Road</p>
    </div>
  );
}

export default RestaurantCard