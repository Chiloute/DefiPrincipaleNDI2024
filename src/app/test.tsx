import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import HintItem from './hint/HintItem';
import RadarChart from './components/RadarChart';

const Page = () => {
  return (
    <div>
      {/* Header avec le logo et menu */}
      <Header />

      {/* Bannière principale */}
      <Banner />

      {/* Contenu principal sur l'océan et le corps humain */}
      <ContentSection />

      {/* Section des Hints */}
      <div style={{ marginTop: '2rem', padding: '1rem' }}>
        <HintItem
          position={4}
          title=" "
          content="C la mort." // Utilisez du contenu pertinent
        />
        <HintItem
          position={4}
          title="Body"
          content="fuck."
        />
      </div>

      <RadarChart />

      <Footer />
    </div>
  );
};

export default Page;
