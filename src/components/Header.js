import React, { Fragment } from "react";

function Header() {
  return (
    <nav>
      <p>Covid Tracker Canada</p>
      <ul>
        <li>Hamburger</li>
        <li>
          <button>Sign in</button>
        </li>
        <li>
          <button>Sign up</button>
        </li>
        <li>dark/light mode</li>
      </ul>
    </nav>
  );
}

export default Header;
