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
            Le cycle des fluides corporels fait référence au processus par lequel le corps produit, utilise et élimine des fluides. Cela inclut le sang, la lymphe et d&apos;autres liquides corporels qui circulent dans le corps pour nourrir, protéger et éliminer les déchets. La circulation sanguine, le système lymphatique et les reins sont des éléments essentiels dans ce cycle, garantissant que les déchets sont éliminés efficacement et que l&apos;hydratation et les nutriments sont maintenus.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Océan</h2>
          <p>
            Le cycle de l&apos;eau est un processus continu qui décrit la circulation de l&apos;eau sur Terre. Il comprend l&apos;évaporation de l&apos;eau des océans, sa condensation sous forme de nuages, puis les précipitations sous forme de pluie ou de neige. Une partie de cette eau s&apos;écoule à nouveau vers les océans, et une autre partie entre dans les rivières, les lacs et les nappes phréatiques. Ce cycle est essentiel pour maintenir l&apos;équilibre écologique et pour le renouvellement de l&apos;eau douce.
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
