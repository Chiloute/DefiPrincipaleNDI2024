import React from 'react';
import styles from './eau.module.css';
import Link from 'next/link';

const eau: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Humain VS Océan</h1><br></br>
      <h1 className={styles.title}>Eau</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2>Humain</h2>
          <p>
             Le corps humain est vulnérable à une multitude de maladies, allant des infections bactériennes et virales aux maladies chroniques comme le cancer et les troubles cardiovasculaires. Les facteurs environnementaux, génétiques et comportementaux influencent cette vulnérabilité. Par exemple, le stress et une mauvaise alimentation peuvent affaiblir le système immunitaire, rendant le corps plus susceptible aux maladies.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Océan</h2>
          <p>
            Les océans sont particulièrement vulnérables à la pollution, notamment les plastiques et les produits chimiques qui affectent non seulement les écosystèmes marins, mais aussi la chaîne alimentaire humaine. La montée des températures océaniques et les événements climatiques extrêmes, comme les tempêtes et les vagues de chaleur marines, rendent aussi les océans plus vulnérables. Cette vulnérabilité requiert des actions mondiales pour réduire l&apos;empreinte humaine.
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/" className={styles.backButton}>Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
};

export default eau;
