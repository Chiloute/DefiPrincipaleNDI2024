import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import HintPage from './hint/page';
import HotButton from "@/app/components/HotButton";
import RadarChart from './components/RadarChart';
import { create } from 'zustand';

export interface StoreState {
  temperature: number; // L'état
  increase: () => void; // Une action
  decrease: () => void; // Une autre action
}

export const useStore = create(set => ({
    temperature: 0,
    increment: () => set((state:StoreState) => ({ temperature: state.temperature + 1 })),
    decrement: () => set((state:StoreState) => ({ temperature: state.temperature - 1 })),
}));

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
      <RadarChart />

      <Footer />
    </div>
  );
};

export default Page;