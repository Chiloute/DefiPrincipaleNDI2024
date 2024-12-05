// src/app/components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>

        <nav className={styles.nav}>
          <ul>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <br></br>
        </nav>
        <p>&copy; 2024 Vive le café Aucun droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
