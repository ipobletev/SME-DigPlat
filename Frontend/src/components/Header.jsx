import React from "react";
import '../styles/Header.scss'



const Header = () => {
  return (
    <nav>
      
      <div className="navbar-left">
        
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
