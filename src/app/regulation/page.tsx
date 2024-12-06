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
           Le corps humain maintient une température interne stable grâce à la thermorégulation. Le cerveau, notamment l&apos;hypothalamus, détecte les variations de température et déclenche des réponses comme la transpiration ou le frisson pour maintenir l&apos;équilibre thermique. Ce système est crucial pour le bon fonctionnement des enzymes et des organes. Par exemple, la fièvre est un mécanisme de défense contre les infections, mais des déséquilibres peuvent entraîner des troubles comme l&apos;hyperthermie ou l&apos;hypothermie.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Océan</h2>
          <p>
            Les océans possèdent un système de régulation thermique qui permet de maintenir une température relativement stable à l&apos;échelle planétaire. Les courants marins, la distribution de la chaleur solaire et les échanges de gaz comme le dioxyde de carbone jouent un rôle dans cette régulation. Ce système est essentiel pour soutenir la vie marine et réguler le climat terrestre. Une perturbation de cette régulation, comme celle causée par le réchauffement climatique, peut entraîner des phénomènes tels que l&apos;élévation du niveau de la mer et des changements dans les écosystèmes marins.
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
