import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2>UNE ODYSSÉE POUR L'OCÉAN ET CONTRE LE CHANGEMENT CLIMATIQUE</h2>
      </div>
    </div>
  );
};

export default Banner;
