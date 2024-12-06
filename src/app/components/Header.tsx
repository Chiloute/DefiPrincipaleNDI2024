'use client';

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
          <a href={"https://www.raceforwater.org/fr/"} target={"_blank"}><h1> RACE FOR WATER </h1>
        <span>A FOUNDATION TO PRESERVE WATER</span></a>
      </div>
      <div className={styles.nav}>
      </div>
    </header>
  );
};

export default Header;
