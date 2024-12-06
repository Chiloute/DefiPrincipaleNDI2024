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
            Le cycle des fluides corporels fait référence au processus par lequel le corps produit, utilise et élimine des fluides. Cela inclut le sang, la lymphe et d'autres liquides corporels qui circulent dans le corps pour nourrir, protéger et éliminer les déchets. La circulation sanguine, le système lymphatique et les reins sont des éléments essentiels dans ce cycle, garantissant que les déchets sont éliminés efficacement et que l'hydratation et les nutriments sont maintenus.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Océan</h2>
          <p>
            Le cycle de l'eau est un processus continu qui décrit la circulation de l'eau sur Terre. Il comprend l'évaporation de l'eau des océans, sa condensation sous forme de nuages, puis les précipitations sous forme de pluie ou de neige. Une partie de cette eau s'écoule à nouveau vers les océans, et une autre partie entre dans les rivières, les lacs et les nappes phréatiques. Ce cycle est essentiel pour maintenir l'équilibre écologique et pour le renouvellement de l'eau douce.
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
