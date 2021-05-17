import React from 'react';
import gitImg from "./github.svg";

const Nav = props => (
  <div>
      <nav className="navBar">
          <ul className="navContainer">
              <li><a href="https://github.com/Tomessy/Crypto"> <img src={gitImg} height="25" width="25"  alt="www.github.com/Tomessy/Crypto"></img> </a></li>
          </ul>
      </nav>
    </div>
);

export default Nav;