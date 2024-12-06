'use client';

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
          <h1> <a href={"https://www.raceforwater.org/fr/"} target={"_blank"}> RACE FOR WATER</a> </h1>
        <span><a href={"https://www.raceforwater.org/fr/"} target={"_blank"}>A FOUNDATION TO PRESERVE WATER </a></span>
      </div>
      <div className={styles.nav}>
      </div>
    </header>
  );
};

export default Header;
