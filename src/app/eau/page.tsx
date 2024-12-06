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
            L'eau représente environ 60% du poids total du corps humain. Elle est essentielle à tous les processus biologiques : digestion, circulation sanguine, élimination des déchets, et régulation thermique. L'eau aide à maintenir la stabilité des cellules et des organes. Par exemple, elle permet de dissoudre les nutriments et les transporteurs chimiques dans tout le corps. La déshydratation peut entraîner des dysfonctionnements graves, allant de la fatigue à des troubles cardiaques.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Océan</h2>
          <p>
            Les océans couvrent 71% de la surface de la Terre et contiennent environ 97% de l'eau de la planète. Cette immense quantité d'eau est cruciale pour la régulation du climat global, la production d'oxygène, et elle abrite une biodiversité exceptionnelle, des coraux aux grands mammifères marins. La salinité de l'eau et les différents niveaux de température influencent également la vie marine.
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
