import React from "react";
// const logo = "../img/logo.png";
const Header = () => {
  return (
    <header>
      <nav>
        <a className="brand">
          <img
            src="" alt="Ranchi Foods Catering"
          />
        </a>
        <ul className="menu">
          <li>
            <a href="/home">Home</a>
          </li>
            <li>
              <a href="/home">Contact</a>
            </li>
            <li>
              <a href="/home">Delivery</a>
            </li>
            <li>
            <a href="/home">Genie Services</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
