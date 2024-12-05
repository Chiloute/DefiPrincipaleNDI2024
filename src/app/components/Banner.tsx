import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h3>SI LA NAVIGATION ÉTAIT UN PAYS, ELLE SERAIT LE 6EME PLUS GRAND ÉMETTEUR DE CO2. HEUREUSEMENT, NOUS POUVONS UTILISER LE VENT ET LE SOLEIL POUR NOUS AMENER VERS LE FUTUR : OSONS LE CHANGEMENT, POUR L’OCÉAN.  </h3>
      </div>
    </div>
  );
};

export default Banner;
