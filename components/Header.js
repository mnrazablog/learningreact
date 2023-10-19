import React from 'react'
const logo = "../img/logo.png";
const Header = () => {
  return (
  <header>
    <nav>
        <a className="brand">
            <img src={logo} alt='Ranchi Foods Catering'/>
        </a>
    </nav>
  </header>
  )
}

export default Header