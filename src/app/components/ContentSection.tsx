import React from 'react';
import styles from './Content.module.css';

const ContentSection = () => {
  return (
    <section className={styles.content}>
      <p>
        Race for Water renouvelle aujourd&apos;hui son engagement au service des océans et repart en mer avec de nouvelles
        ambitions : <strong>démontrer l&apos;importance d&apos;un Océan sain et vivant pour faire face au changement climatique</strong>, et
        promouvoir des solutions de décarbonation du transport maritime.
      </p>
    </section>
  );
};

export default ContentSection;
