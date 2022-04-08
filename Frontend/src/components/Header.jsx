import React from "react";
import '../styles/Header.scss'

const Header = () => {
  return (
    <nav>
      <img src="./icons/icon_menu.svg" alt="menu" className="menu" />
      <div className="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">platzi@example.com</li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;
