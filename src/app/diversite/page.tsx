import React from 'react';
import styles from './eau.module.css';

const eau: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Humain VS Océan</h1><br></br>
      <h1 className={styles.title}>Eau</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2>Humain</h2>
          <p>
           Le corps humain est aussi un lieu de diversité de vie, mais sous une forme différente. Il héberge des milliards de micro-organismes, comme des bactéries et des virus, qui vivent principalement dans l'intestin. Ces micro-organismes jouent un rôle crucial dans la digestion, la protection contre les agents pathogènes et la régulation du système immunitaire. Le microbiome humain est souvent comparé à un écosystème vivant, où la diversité des espèces contribue à la santé globale du corps.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Océan</h2>
          <p>
            Les océans abritent une biodiversité incroyable, des créatures microscopiques comme le plancton aux géants marins comme les baleines. Les récifs coralliens, par exemple, sont des écosystèmes très riches qui soutiennent une grande variété d'espèces. La diversité de la vie marine est essentielle à l'équilibre écologique des océans, car chaque espèce joue un rôle, que ce soit dans la chaîne alimentaire, la production d'oxygène, ou la gestion des nutriments.
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <a href="/" className={styles.backButton}>Retour à l'accueil</a>
      </div>
    </div>
  );
};

export default eau;
