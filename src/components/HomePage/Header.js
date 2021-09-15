import React, { Fragment } from "react";
import styles from "./Header.module.css";
import "./Header.module.css";
import Menu from "./Menu";

function Header() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.heading}>Covid Tracker Canada</h1>
      <ul className={styles.leftIcons}>
        <li>
          <Menu />
        </li>
        <li className={styles.listItem}>
          <button className={styles.signInBtn}>Sign in</button>
        </li>
        <li className={styles.listItem}>
          <button className={styles.signUpBtn}>Sign up</button>
        </li>
        <li>
          <svg
            width="20px"
            color="#173A56"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
