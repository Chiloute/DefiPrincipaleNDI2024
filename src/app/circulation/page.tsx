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
            La circulation sanguine est un réseau complexe qui transporte le sang, l&apos;oxygène et les nutriments à travers le corps humain. Le sang traverse des artères, des veines et des capillaires, permettant à chaque organe de recevoir ce dont il a besoin pour fonctionner. Le cœur agit comme une pompe, maintenant une pression constante pour faire circuler le sang. Un bon fonctionnement de ce système est vital pour la survie, et toute perturbation, comme l&apos;hypertension ou les maladies cardiovasculaires, peut avoir des conséquences graves.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Océan</h2>
          <p>
            Les courants marins, à la fois en surface et en profondeur, transportent la chaleur et les nutriments autour de la planète, influençant les climats locaux et mondiaux. Par exemple, le Gulf Stream transporte de l&apos;eau chaude de la région des Caraïbes vers l&apos;Europe, contribuant à un climat plus doux dans cette région. Ces courants sont également cruciaux pour la distribution des espèces marines et la santé des écosystèmes sous-marins.
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
