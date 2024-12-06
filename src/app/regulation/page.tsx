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
            Le corps humain est composé à 60% d'eau et possède des systèmes complexes de régulation et d'équilibre.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Océan</h2>
          <p>
            Les océans couvrent 71% de la Terre, régulent le climat et sont une source essentielle de biodiversité.
          </p>
        </div>
      </div>
    </div>
  );
};

export default eau;
