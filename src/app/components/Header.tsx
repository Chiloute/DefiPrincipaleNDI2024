'use client';

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>RACE FOR WATER</h1>
        <span>A FOUNDATION TO PRESERVE WATER</span>
      </div>
      <div className={styles.nav}>
        <button className={styles.supportButton}>Menu</button>
        <button className={styles.menuButton}>Made by "Vive le café"</button>
      </div>
    </header>
  );
};

export default Header;
