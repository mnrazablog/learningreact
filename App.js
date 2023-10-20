
import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import Header from './components/Header';

import Footer from './components/Footer';
import RestaurantCard from './components/restaurantCard';

function App() {
  return(
    <>
    <Header/>
    <RestaurantCard/>
    <Footer/>
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);





export default App