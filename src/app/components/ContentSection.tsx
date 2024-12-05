import React from 'react';
import styles from './Content.module.css';

const ContentSection = () => {
  return (
    <section className={styles.content}>
      <p>
        Race for Water renouvelle aujourd’hui son engagement au service des océans et repart en mer avec de nouvelles
        ambitions : <strong>démontrer l’importance d’un Océan sain et vivant pour faire face au changement climatique</strong>, et
        promouvoir des solutions de décarbonation du transport maritime.
      </p>
      <div className={styles.imageContainer}>
        <img src="/images/ocean-boat.jpg" alt="Un bateau sur l'océan" />
      </div>
    </section>
  );
};

export default ContentSection;
