import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import HintPage from './hint/page';
import HintItem from './hint/HintItem';
import HotButton from "@/app/components/HotButton";
import {cookies} from "next/headers";

const Page = () => {
  return (
    <div>
      {/* Header avec le logo et menu */}
      <Header />

      {/* Bannière principale */}
      <Banner />

      {/* Contenu principal sur l'océan et le corps humain */}
      <ContentSection />

        <HotButton />

      {/* Section des Hints */}
      <HintPage />
      <Footer />
    </div>
  );
};

export default Page;
