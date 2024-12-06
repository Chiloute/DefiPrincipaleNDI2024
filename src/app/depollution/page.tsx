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
            Le système immunitaire est le mécanisme de défense naturel du corps humain contre les agents pathogènes, les toxines et autres substances étrangères. Il identifie et élimine les menaces potentielles grâce à des cellules spécialisées comme les globules blancs, les anticorps et d&apos;autres composants biologiques. En plus de cette défense, le système lymphatique aide à nettoyer les cellules et les tissus des déchets métaboliques.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Océan</h2>
          <p>
           L&apos;autocurage des océans fait référence à la capacité des océans à se régénérer naturellement par des processus tels que la filtration des eaux par les écosystèmes marins et la dégradation des polluants par des bactéries et des micro-organismes. Cependant, la pollution plastique et chimique dépasse la capacité d&apos;auto-régénération des océans, ce qui nécessite des interventions humaines pour restaurer la santé des océans et éviter des dommages irréversibles.
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
