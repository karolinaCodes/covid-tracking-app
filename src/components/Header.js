import React, { Fragment } from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.navbar}>
      <p>Covid Tracker Canada</p>

      <ul className={styles.leftIcons}>
        <svg
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className={("h-6 w-6", styles.listItem)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <li className={styles.listItem}>
          <button>Sign in</button>
        </li>
        <li className={styles.listItem}>
          <button>Sign up</button>
        </li>
        <svg
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className={("h-6 w-6", styles.listItem)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </ul>
    </nav>
  );
}

export default Header;
