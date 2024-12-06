import React from 'react';
import styles from './RadarChart.module.css';

const similarities = [
  { label: "Proportions d'eau", ocean: "71% d'eau", body: "60% d'eau" },
  { label: "Circulation des fluides", ocean: "Courants marins", body: "Circulation sanguine" },
  { label: "Systèmes de régulation", ocean: "Régulation thermique des océans", body: "Système de régulation thermique du corps" },
  { label: "Diversité de vie", ocean: "Biodiversité marine", body: "Micro-organismes dans le corps humain" },
  { label: "Équilibre", ocean: "Équilibre écologique des océans", body: "Homéostasie dans le corps humain" },
  { label: "Cycles", ocean: "Cycle de l'eau", body: "Cycle des fluides corporels" },
  { label: "Dépollution", ocean: "Autocurage des océans", body: "Système immunitaire" },
  { label: "Vulnérabilité", ocean: "Vulnérabilité à la pollution", body: "Vulnérabilité aux maladies" },
];

const ContentSection = () => {
  return (
    <section className={styles.content}>

    <div className={styles.comparisonContainer}>
  <h2>Similarités entre les Océans et le Corps Humain</h2>
  <div className={styles.comparisonList}>
    {similarities.map((item, index) => (
      <div key={index} className={styles.comparisonItem}>
        <div>
          <h3>Océan</h3>
          <p>{item.ocean}</p>
        </div>
        <div className={styles.vs}>VS</div>
        <div>
          <h3>Corps Humain</h3>
          <p>{item.body}</p>
        </div>
      </div>
    ))}
  </div>
</div>

     </section>
  );
};

export default ContentSection;
