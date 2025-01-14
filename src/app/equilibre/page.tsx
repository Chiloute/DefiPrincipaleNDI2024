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
            L&apos;homéostasie désigne l&apos;équilibre interne du corps humain, où de nombreux processus physiologiques se régulent de manière autonome pour assurer la santé. Cela inclut la régulation du pH sanguin, des niveaux de glucose, de l&apos;hydratation, et de la température corporelle. Tout dérèglement de cet équilibre, comme dans le cas du diabète ou des troubles hormonaux, peut entraîner des maladies graves. L&apos;homéostasie est essentielle à la survie et à la stabilité du corps humain.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Océan</h2>
          <p>
            L&apos;équilibre écologique des océans est un état fragile où les populations d&apos;espèces et les ressources sont soutenues de manière durable. Cependant, l&apos;équilibre est menacé par la pollution, le surpêche, et le réchauffement climatique. Des événements comme la surchauffe des océans ou les marées noires peuvent déstabiliser cet équilibre et entraîner une perte de biodiversité. La conservation marine et la gestion des pêches sont essentielles pour maintenir cet équilibre.
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
