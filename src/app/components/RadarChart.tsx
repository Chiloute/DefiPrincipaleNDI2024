import React from 'react';
import styles from './RadarChart.module.css';
import Link from 'next/link';

const similarities = [
  { label: "Proportions d'eau", ocean: "71% d'eau", body: "60% d'eau", target: "/eau" },
  { label: "Circulation des fluides", ocean: "Courants marins", body: "Circulation sanguine", target: "/circulation" },
  { label: "Systèmes de régulation", ocean: "Régulation thermique des océans", body: "Système de régulation thermique du corps", target: "/regulation" },
  { label: "Diversité de vie", ocean: "Biodiversité marine", body: "Micro-organismes dans le corps humain", target: "/diversite" },
  { label: "Équilibre", ocean: "Équilibre écologique des océans", body: "Homéostasie dans le corps humain", target: "/equilibre" },
  { label: "Cycles", ocean: "Cycle de l'eau", body: "Cycle des fluides corporels", target: "/cycles" },
  { label: "Dépollution", ocean: "Autocurage des océans", body: "Système immunitaire", target: "/depollution" },
  { label: "Vulnérabilité", ocean: "Vulnérabilité à la pollution", body: "Vulnérabilité aux maladies", target: "/vulnerabilite" },
];

const ContentSection = () => {
  return (
    <section className={styles.content}>
      <div className={styles.comparisonContainer}>
        <h2>Similarités entre les Océans et le Corps Humain</h2>
        <div className={styles.comparisonList}>
          {similarities.map((item, index) => (
            <Link key={index} href={item.target} className={styles.comparisonItem}>
              <div>
                <h3>Océan</h3>
                <p>{item.ocean}</p>
              </div>
              <div className={styles.vs}>VS</div>
              <div>
                <h3>Corps Humain</h3>
                <p>{item.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
